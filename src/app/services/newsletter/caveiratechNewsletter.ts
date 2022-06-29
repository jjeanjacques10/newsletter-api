import cheerio from 'cheerio'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { NewsRepository } from "../../../app/repositories/newsRepository"
import { RedisHelpers } from "../../../main/database/redisConfiguration"
import { INewsletter } from "../../../app/services/newsletter/newsletter"
import { google } from '../../../main/config/variables'
import { buildResponse } from 'src/app/presentation/helpers/build-response'

export class CaveiratechNewsletter implements INewsletter {
    private newsRepository: NewsRepository;

    constructor() {
        this.newsRepository = new NewsRepository(RedisHelpers.client);
    }

    read(useCache: boolean): Promise<any> {
        console.log('Caveiratech');
        return this.getNews(useCache);
    }

    private async getNews(useCache: boolean = true) {
        const newsCached = await this.newsRepository.get('news-caveiratech')
        if (newsCached != null && useCache) {
            console.log('getNews from cache')
            return JSON.parse(newsCached ?? '[]')
        }
        const doc = new GoogleSpreadsheet(google.api_key.caveiratech)

        const creds = google.credentials

        await doc.useServiceAccountAuth(creds)
        await doc.loadInfo()

        const sheet = doc.sheetsByIndex[0]
        const rows = await sheet.getRows()

        const news = this.cleanText(rows[(rows.length - 1)].Message, rows[(rows.length - 1)].Date)

        console.log('getNews update cache')
        this.newsRepository.set('news-caveiratech', JSON.stringify(news), 10 * 1000)
        return news
    }

    private cleanText(email, date) {
        email = email.split('</p>');

        var paragraphs = email.map(paragraph => {
            const $ = cheerio.load(paragraph)
            var news = $('p').text()
            var title = $('strong').text()

            news = news.replace(/\.(?!\d)/g, '. ')
            news = news.replace('\n      ', '')

            if (title != '') {
                return [title, news]
            }
        }).filter((paragraph) => paragraph != undefined);

        return buildResponse(paragraphs, date, 'https://caveiratech.com')
    }

}