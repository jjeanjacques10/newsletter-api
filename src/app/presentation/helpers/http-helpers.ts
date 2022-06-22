import { InvalidParamError, MissingParamError, NotFoundError, ServerError, UnauthorizedError } from '../errors'
import { HttpResponse } from '../protocolos'
export const serverError = (): HttpResponse => {
  const error = new ServerError()
  return {
    statusCode: 500,
    body: {
      name: error.name,
      message: error.message
    }
  }
}

export const missingParam = (paramName: string): HttpResponse => {
  const error = new MissingParamError(paramName)
  return {
    statusCode: 400,
    body: {
      name: error.name,
      message: error.message
    }
  }
}

export const invalidParam = (paramName: string): HttpResponse => {
  const error = new InvalidParamError(paramName)
  return {
    statusCode: 400,
    body: {
      name: error.name,
      message: error.message
    }
  }
}

export const success = (data: any): HttpResponse => {
  return {
    statusCode: 200,
    body: { data }
  }
}

export const created = (data: any): HttpResponse => {
  return {
    statusCode: 201,
    body: { data: data }
  }
}

export const notFound = (message: string): HttpResponse => {
  const error = new NotFoundError(message)
  return {
    statusCode: 404,
    body: {
      name: error.name,
      message: error.message
    }
  }
}

export const notAuthorization = (): HttpResponse => {
  const error = new UnauthorizedError()
  return {
    statusCode: 401,
    body: {
      name: error.name,
      message: error.message
    }
  }
}
