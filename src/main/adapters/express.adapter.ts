import { Controller, HttpRequest, HttpResponse } from '../../app/presentation/protocolos'
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response): Promise<any> => {
    const httpRequest: HttpRequest = {
      body: request.body,
      query: request.query,
      params: request.params,
      headers: request.headers
    }
    const httpResponse: HttpResponse = await controller.handle(httpRequest)
    response.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
