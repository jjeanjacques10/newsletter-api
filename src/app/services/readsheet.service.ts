import { INewsletter } from 'src/app/services/newsletter/newsletter';

export default class ReadSheetService {

    private newsletter: INewsletter

    constructor(newsletter: INewsletter) {
        this.newsletter = newsletter;
    }

    async getNews(useCache: boolean = true) {
        return await this.newsletter.read(useCache);
    }

}