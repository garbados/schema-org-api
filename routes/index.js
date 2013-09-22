var fs = require('fs'),
    md = require('markdown').markdown.toHTML,
    readme = fs.readFileSync(__dirname + '/../readme.md').toString();

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

exports.entity = require('./api').entity;