import { GoogleSpreadsheet } from 'google-spreadsheet'
import cheerio from 'cheerio'
import { google } from '../../main/config/variables'
import { v4 as uuidv4 } from 'uuid';
import { NewsRepository } from '../repositories/newsRepository';
import { RedisHelpers } from '../../main/database/redisConfiguration';

export default class ReadSheetService {

    private newsRepository: NewsRepository

    constructor() {
        this.newsRepository = new NewsRepository(RedisHelpers.client);
    }

    async getNews(useCache: boolean = true) {
        const newsCached = await this.newsRepository.get('news')
        if (newsCached != null && useCache) {
            console.log('getNews from cache')
            return JSON.parse(newsCached ?? '[]');
        }
        const doc = new GoogleSpreadsheet(google.api_key)

        const creds = google.credentials

        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();

        const sheet = doc.sheetsByIndex[0];
        const rows = await sheet.getRows();

        const news = this.cleanText(rows[(rows.length - 1)].Message);

        console.log('getNews update cache')
        this.newsRepository.set('news', JSON.stringify(news), 10 * 1000);
        return news;
    }

    private cleanText(email) {
        email = email.split('</p>');

        var paragraphs = email.map(paragraph => {
            const $ = cheerio.load(paragraph)
            var news = $('p').text();
            var title = $('strong').text();

            //news = news.replace(title, '');
            news = news.replace(/\.(?!\d)/g, '. ');
            news = news.replace('\n      ', '');
            const regex = /(Confere lá:\s+Link Afiliado)|:\s+Link Afiliado/gi;

            return [title, news.replace(regex, '')];
        })

        return this.buildJson(paragraphs)
    }

    private buildJson(news) {
        return news.map((newsItem, index) => {
            var date = new Date();

            if (newsItem[1] != '') {
                return {
                    "uid": uuidv4(),
                    "updateDate": new Date(date.getTime() - (1000 * index)).toISOString(),
                    "titleText": newsItem[0],
                    "mainText": newsItem[1],
                    "redirectionUrl": 'https://filipedeschamps.com.br/newsletter'
                }
            }
        }).filter((newsItem) => newsItem != null);
    }
}