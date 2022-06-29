import { config } from 'dotenv'
config()

export const server = {
  port: parseInt(process.env.PORT ?? '3000')
}

export const production = {
  isProd: (process.env.PRODUCTION === 'true')
}

export const google = {
  api_key: {
    deschamps: (process.env.GOOGLE_SHEET_ID_DESCHAMPS ?? ""),
    caveiratech: (process.env.GOOGLE_SHEET_ID_CAVEIRA_TECH ?? "")
  },
  credentials: {
    "type": "service_account",
    "project_id": process.env.PROJECT_ID,
    "private_key_id": process.env.PRIVATE_KEY_ID,
    "private_key": process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'),
    "client_email": process.env.CLIENT_EMAIL,
    "client_id": process.env.CLIENT_ID,
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": process.env.CLIENT_X509_CERT_URL
  }
}

export const cache = {
  redis_url: process.env.REDIS_URL ?? 'redis://localhost:6379'
}