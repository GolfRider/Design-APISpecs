#!/usr/bin/env node

var fs = require('fs');
var pdf = require('html-pdf');
var program = require('commander');
var aglio = require('aglio');

program
  .option('-p, --path', 'path to the file')
  .option('-v, --verbose', 'enable verbose')
  .parse(process.argv);

var flags = program.args;

if (!flags.length) {
  console.error('Please run the command with these flags');
  console.error('          -p <path to api-spec file>  (required)       ');
  console.error('          -v to enable verbose mode  (optional)        ');
  process.exit(1);
}


 console.log("Generating Books API docs");

// To disable hide option on load, default behavior is to hide the description sections in the generated html doc
var cleanupHtmlDoc = function(html_doc){
        var exec = require('child_process').execSync;
        var cmd = "sed -e 's/collapse-button\"/collapse-button show\"/g' -i '' " + html_doc;

        var cmd_options = {
          encoding: 'utf8'
        };

        console.log(exec(cmd, cmd_options));
}



var genPDF = function(html_doc, pdf_doc){
    var html = fs.readFileSync(html_doc, 'utf8');

    var pdf_options = {
            format: 'A4', // Letter, Tabloid, A4
            header: {
                  height: "45mm",
                   contents: `<div style="text-align: center;font-weight:bold;margin-bottom:10px;margin-top:10px">
                                Books REST APIs ver 1.0</div>'
                              `
            },
            footer: {
               height: "28mm",
               contents: `<div style="text-align: center;margin-top:10px;">
                            <div style="float:left;text-align:left;margin-left:30px;">
                            <span style="color: #999;font-weight:bold">&copy; ABC Bookstore 2017 </span>
                            </div>
                            <div style="float:right;text-align:right;margin-right:30px;">
                            <span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>
                             </div>
                          </div>`
            },
             zoomFactor: "1",
        };
        pdf.create(html, pdf_options).toFile(pdf_doc, function(err, res) {
          if (err) return console.log(err);
           console.log('Following Books API documentation files generated successfully in the current directory');
           console.log("  [1] " + html_doc);
           console.log("  [2] " + pdf_doc);
        });
}

// Generate html, pdf docs
var main = function(){
        var aglio_options = {
            //themeTemplate: 'default',
        };

        var API_SPEC_FILE = flags[0]
        var DOC_PREFIX = './books-api-' + Date.now()
        var API_HTML_DOC =  DOC_PREFIX + '.html'
        var API_PDF_DOC =  DOC_PREFIX + '.pdf'


        aglio.renderFile(API_SPEC_FILE, API_HTML_DOC, aglio_options, function (err, warnings) {
            if (err) return console.log(err);
            if (warnings && program.verbose){
                console.log(warnings);
            }
            cleanupHtmlDoc(API_HTML_DOC)
            genPDF(API_HTML_DOC, API_PDF_DOC)
        });
}

main()
