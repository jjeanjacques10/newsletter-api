import ReadSheetService from '../../../app/services/readsheet.service'
import { serverError, success } from '../helpers/http-helpers'
import { Controller, HttpRequest, HttpResponse } from '../protocolos'

export class FilipedeschampsController implements Controller {
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const news = await new ReadSheetService().getNews()
            return success(news)
        } catch (error) {
            console.error(error)
            return serverError()
        }   
    }
}