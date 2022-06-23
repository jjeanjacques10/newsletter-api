import ReadSheetService from '../../../app/services/readsheet.service'
import { serverError, success } from '../helpers/http-helpers'
import { Controller, HttpRequest, HttpResponse } from '../protocolos'

export class FilipedeschampsController implements Controller {
    private readSheetService: ReadSheetService

    constructor() {
        this.readSheetService = new ReadSheetService()
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            console.log('handle')
            const news = await this.readSheetService.getNews()
            return success(news)
        } catch (error) {
            console.error(error)
            return serverError(error)
        }
    }
}