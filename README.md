### Design API Specs Using API Blueprint
1. This nodejs based tool uses the apiblueprint spec files to generate pdf and html docs.
2. To know more about API Blueprint, please visit :https://apiblueprint.org
3. To install the dependecies, run this command: npm install at the root directory of the app
4. To generate the docs (pdf + html), run this command: 
   ```node gen_api_docs.js main-api-spec.apib```
5. For modular approach, api spec files can be added to ```main-api-spec.apib``` file
6. This tool uses these awesome packages:
      - a. https://github.com/danielgtaylor/aglio    
      - b. https://github.com/marcbachmann/node-html-pdf    

### Authoring APIBlueprint specs:
 1. Install this Atom package: https://atom.io/packages/api-blueprint-preview
 2. Press ctrl-shift-a (to see the api spec preview)
 
 ### Future Enhancements 
 1. Maybe generate API specs and docs from TLA+ (formal specification langiuage) ?  not sure:-) 
