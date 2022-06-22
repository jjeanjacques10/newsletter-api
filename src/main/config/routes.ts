import { Router, Express } from 'express'
import fg from 'fast-glob'
import { production } from './variables'

export default (app: Express): void => {
  const router = Router()
  app.use(router)
  fg.sync(`**/${production.isProd ? 'dist' : 'src'}/main/routes/**routes{.ts,.js}`).map(async (file) => {
    const route = (await import(`../../../${file}`)).default
    route(router)
  })
}
