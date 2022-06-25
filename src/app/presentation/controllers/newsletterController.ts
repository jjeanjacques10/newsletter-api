import { INewsletter } from 'src/app/services/newsletter/newsletter'
import ReadSheetService from '../../services/readsheet.service'
import { serverError, success } from '../helpers/http-helpers'
import { Controller, HttpRequest, HttpResponse } from '../protocolos'

export class NewsletterController implements Controller {
    private readSheetService: ReadSheetService

    constructor(newsletter: INewsletter) {
        this.readSheetService = new ReadSheetService(newsletter)
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const useCache = httpRequest.query.cache == 'false' ? false : true

            const news = await this.readSheetService.getNews(useCache)
            return success(news)
        } catch (error) {
            console.error(error)
            return serverError(error)
        }
    }
}