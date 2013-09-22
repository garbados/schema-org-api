var select = require('soupselect').select,
    htmlparser = require('htmlparser'),
    request = require('request'),
    schema_url = 'http://schema.org';

function parse_html (html, cb) {
  var handler = new htmlparser.DefaultHandler(cb),
      parser = new htmlparser.Parser(handler);

  return parser.parseComplete(html);
}

var parse_related = (function () {

  function get_items (dom) {
    var items = select(dom, '#mainContent div ul li a');
    return items;
  }

  function get_item (dom) {
    return {
      href: '/' + dom.attribs.href,
      name: dom.children[0].raw
    };
  }

  return function (dom) {
    return get_items(dom).map(get_item);
  }

})();

var parse_object = (function () {

  function get_rows (dom) {
    return select(dom, 'tbody tr');
  }

  function get_property (dom) {
    var property = select(dom, 'th.prop-nam code a');
    if (property.length) {
      return property[0].children[0].raw;
    }
  }

  function get_expected (dom) {
    var row = select(dom, '.prop-ect')[0],
        expected = {
          type: '',
        };
    if (row) {
      if (row.children[1]) {
        expected._links = {
          self: {
            href: [schema_url, row.children[1].attribs.href].join('/')
          }
        };
        expected.type = row.children[1].children[0].raw;
      } else {
        expected.type = row.children[0].raw.replace(/\s+/g, '')
      }
  
      return expected;
    }
  }

  function get_description (dom) {
    var description = select(dom, 'td.prop-desc');
    return description[0].children[0].raw;
  }

  return function (dom) {
    var rows = get_rows(dom);
    return rows.map(function (row) {
      var expected = get_expected(row),
          property = get_property(row);
      if (expected && property) {
        return {
          description: get_description(row),
          expected: expected,
          property: property
        }; 
      }
    }).filter(Boolean);
  }
})();

exports.entity = function (req, res) {
  request.get([schema_url, req.params.entity].join('/'), function (err, response) {
    if (err) {
      res.send(400, err);
    } else {
      parse_html(response.body, function (error, dom) {
        if (error) {
          res.send(400, error);
        } else {
          var properties = parse_object(dom),
              related = parse_related(dom);

          res.json({
            name: req.params.entity,
            _links: {
              self: {
                href: '/' + req.params.entity
              },
              related: related
            },
            _embedded: properties
          });
        }
      });
    }
  });
}