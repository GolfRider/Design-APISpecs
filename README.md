### 1. Design API Specs Using API Blueprint
1. This nodejs based tool uses the apiblueprint spec files to generate pdf and html docs.
2. To know more about API Blueprint, please visit :https://apiblueprint.org
3. To install the dependecies, run this command: npm install at the root directory of the app
4. To generate the docs (pdf + html), run this command: 
   ```node gen_api_docs.js main-api-spec.apib```
5. For modular approach, api spec files can be added to ```main-api-spec.apib``` file
6. This tool uses these awesome packages:
      - a. https://github.com/danielgtaylor/aglio    
      - b. https://github.com/marcbachmann/node-html-pdf    

### 2. Authoring APIBlueprint specs:
 1. Install this Atom package: https://atom.io/packages/api-blueprint-preview
 2. Press ctrl-shift-a (to see the api spec preview)
 
### 3. Some more interesting tools
1. Swagger (https://swagger.io/
      - popular, can be little tedious when writing large specs by hand, varied ecosystem depending on the language)
2. ReDoc  (https://rebilly.github.io/ReDoc/)
3. Goa.Design (https://goa.design/; go specific dsl)

### 4. Future Enhancements (Just an idea :-) 
 1. Maybe generate API specs and docs from TLA+ (formal specification language)  ??
      - https://www.learntla.com/introduction/  
