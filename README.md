## Newsletter API

<p align="center">
    <img src="./files/logo-newsletter-api.png" width="300"/>
    <br />
    <br />
    <a href="https://newsletter-deschamps.herokuapp.com/news">Demo</a>
    ·
    <a href="https://github.com/jjeanjacques10/newsletter-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/jjeanjacques10/newsletter-api/issues">Request Feature</a>
</p>

<p align="center">
   <a href="https://www.linkedin.com/in/jjean-jacques10/">
      <img alt="Jean Jacques Barros" src="https://img.shields.io/badge/-JeanJacquesBarros-8CC64F?style=flat&logo=Linkedin&logoColor=white" />
   </a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jjeanjacques10/newsletter-api?color=8CC64F">

  <a href="https://github.com/jjeanjacques10/newsletter-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jjeanjacques10/newsletter-api?color=8CC64F">
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-8CC64F">
  <img alt="GitHub Pull Requests" src="https://img.shields.io/github/issues-pr/jjeanjacques10/newsletter-api?color=8CC64F" />
  <a href="https://github.com/jjeanjacques10/newsletter-api/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/jjeanjacques10/newsletter-api?color=8CC64F&logo=github">
  </a>
</p>


API that returns a JSON news list of popular newsletters. Currently, the API only supports one newsletter, but it will be extended to support more than one in the future.

### Technologies

* [TypeScript](https://www.typescriptlang.org/)
* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [Redis](https://redis.io/)

## Getting started

### Configuration Newsletter #1

set the following environment variables in `.env`:

``` bash
GOOGLE_SHEET_ID=

PROJECT_ID=
PRIVATE_KEY_ID=
PRIVATE_KEY=
CLIENT_EMAIL=
CLIENT_ID=
CLIENT_X509_CERT_URL=
PRODUCTION=< true | false >

REDIS_URL=
```

### Running the server

``` bash
npm install
npm run dev
```

to run the server in production mode, set the `PRODUCTION` environment variable to `true`

``` bash
npm install
npm run build
npm run start
```

call the following URL to get the list of news:

- GET http://localhost:3000/news

or using heroku deployed app:

- GET https://api-newsletter.herokuapp.com/news


## Newsletters configuted

- #1 Filipe Deschamps Newsletter (https://filipedeschamps.com.br/newsletter)

## Diagram

<img src="./files/diagram-jjeanjacques10.png">

## Next steps

- [x] Update cache parameter in request to get the latest news
- [ ] Add support for more than one newsletter
- [ ] Return the list of news in a Text plain format
- [ ] Observability and monitoring with Prometheus + Grafana

---
developed by [@jjeanjacques10](https://github.com/jjeanjacques10)