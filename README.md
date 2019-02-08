# A simple poll demo with unit and e2e testing

You can see the project live on 

http://b85dc9a0-4bc0-4807-8ee1-3c3046da97c7.s3-website.eu-central-1.amazonaws.com/

Data is persisted on local storage, so even if you refresh your page or close the browser, the state will still be there, next time you load the web applicatoin.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

## Docker

To run as a docker instance, in the root of the project run the following commands,

```
npm install
npm run build
docker build . -t poll-demo
docker run --rm -d --name poll-demo poll-demo
```

On linux if you run the following command it will open the page in your browser.

```bash
xdg-open "http://$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' poll-demo)"
```