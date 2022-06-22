import { Router } from 'express'
import { FilipedeschampsController } from '../../app/presentation/controllers/FilipedeschampsController'
import { adaptRoute } from '../adapters/express.adapter'

export default (router: Router): void => {
  router.get('/news', adaptRoute(new FilipedeschampsController()))
}
