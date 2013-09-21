var select = require('soupselect').select,
    htmlparser = require('htmlparser'),
    request = require('request'),
    schema_url = 'http://schema.org',
    fs = require('fs'),
    md = require('markdown').markdown.toHTML,
    readme = fs.readFileSync(__dirname + '/../readme.md').toString();

function parse_html (html, cb) {
  var handler = new htmlparser.DefaultHandler(cb),
      parser = new htmlparser.Parser(handler);

  return parser.parseComplete(html);
}

/*
 * GET home page.
 */

exports.index = function (req, res) {
  res.render('index', { 
    title: 'schema.org API',
    readme: readme,
    md: md
  });
};

exports.entity = function (req, res) {
  request.get([schema_url, req.params.entity].join('/'), function (err, response) {
    if (err) {
      res.send(400, err);
    } else {
      parse_html(response.body, function (error, dom) {
        if (error) {
          res.send(400, error);
        } else {
          var rows = select(dom, 'tbody tr')
              .map(function (row) {
                var property = select(row, 'th.prop-nam code a')[0];
                var type = select(row, '.prop-ect')[0]
                if (property && type) {
                  return {
                    url: schema_url + property.attribs.href,
                    property: property.children[0].raw,
                    type: type.children[1] ? {
                      url: [schema_url, type.children[1].attribs.href].join('/'),
                      property: type.children[1].children[0].raw
                    } : type.children[0].raw.replace(/\s+/g, ''),
                    description: select(row, 'td.prop-desc')[0].children[0].raw
                  }; 
                }
              })
              .filter(function (row) {
                return row;
              });
          res.json(rows);
        }
      });
    }
  });
}