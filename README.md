# lambda_url_ping_tool

will confirm the survival of url with lambda.

# requirement

* node.js  
  v8.10.0   
  Recommendation: installed from ndenv and use .node-version
* npm  
  Use npm provided with node
* yarn  
  `npm install -g yarn`

# build

```
yarn
npm run build
```

# deployment

Upload dist/app.zip to lambda after running npm run build.

# debug run on local

```
npm run run
```
