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
GOOGLE_SHEET_ID_DESCHAMPS=
GOOGLE_SHEET_ID_CAVEIRA_TECH=

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

* GET <http://localhost:3000/news>

or using heroku deployed app:

* GET <https://api-newsletter.herokuapp.com/news>

## Newsletters configured

| Newsletter  | Updated    | Endpoint  |
| ----------- | -------    | --------  |
| #1 [Filipe Deschamps Newsletter](https://filipedeschamps.com.br/newsletter) | 11:10 AM - 11:50 AM | GET [/news/filipedeschamps](https://api-newsletter.herokuapp.com/news/filipedeschamps) |
| #2 [Caveira Tech Newsletter](https://caveiratech.com.br) | 11:40 AM | GET [/news/caveiratech](https://api-newsletter.herokuapp.com/news/caveiratech) |

### Response format

``` json
{
    "data": [
      {
            "uuid": "ec29d802-95e7-4f2c-8de3-90b69a2197c9",
            "update_date": "2022-06-29T14:11:39.000Z",
            "title": "Mark Zuckerberg espera atrair 1 bilhão de usuários para o metaverso até o final da década:",
            "content": "Mark Zuckerberg espera atrair 1 bilhão de usuários para o metaverso até o final da década: o CEO da Meta acredita que essas pessoas gastarão centenas de dólares por ano em ativos digitais como roupas para seus avatares, em decoração de seus escritórios e casas virtuais, e em aplicativos de produtividade geral.  Zuckerberg também afirma que experiências no metaverso contribuem para uma “sensação realista de presença”, algo não possível através das videochamadas atuais.  As informações são da rede CNBC. ",
            "source": "https://filipedeschamps.com.br/newsletter"
        }
    ]
}
```

## Diagram

<img src="./files/diagram-jjeanjacques10.png">

## Next steps

* [x] Update cache parameter in request to get the latest news
* [x] Add support for more than one newsletter
* [ ] Return the list of news in a Text plain format
* [ ] Observability and monitoring with Prometheus + Grafana
* [ ] Configure cron job to update the cache

---
developed by [@jjeanjacques10](https://github.com/jjeanjacques10)
