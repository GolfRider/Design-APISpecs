SOFTWARE DEPENDENCIES
---------------------
1. Install NodeJS : https://nodejs.org/en/
2. Installation of NodeJS also includes installation of npm (node package manager)
3. To install the dependencies (specified in package.json)
   Run this command: npm install (this might take some time, but this is a ONE-TIME only operation)

TOOL USAGE:
-----------
1. To generate the docs (pdf/html)
   Run this command: node gen_api_docs.js main-api-spec.apib
   where main-api-spec.apib is the main 'api-spec'  file
   Two documents would be generated in the current working directory
     a. books-api-<timestamp>.html
     b. books-api-<timestamp>.pdf


REFERENCES:
-----------
1. https://apiblueprint.org/ -  (API Spec language, uses custom markdown format)
2. https://github.com/danielgtaylor/aglio - (Generates html from the spec files)
3. https://github.com/marcbachmann/node-html-pdf - (Generates pdf from html files)