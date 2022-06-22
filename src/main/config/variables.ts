import { config } from 'dotenv'
config()

export const server = {
  port: parseInt(process.env.PORT ?? '3000')
}

export const production = {
  isProd: (process.env.PRODUCTION === 'true')
}

export const google = {
  api_key: (process.env.GOOGLE_API_KEY ?? "")
}