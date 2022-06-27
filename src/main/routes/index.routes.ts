import { Router } from 'express'
import { DeschampsNewsletter } from '../../app/services/newsletter/deschampsNewsletter'
import { NewsletterController } from '../../app/presentation/controllers/newsletterController'
import { adaptRoute } from '../adapters/express.adapter'

export default (router: Router): void => {
  router.get('/news', adaptRoute(new NewsletterController(new DeschampsNewsletter)))
  router.get('/filipedeschamps', adaptRoute(new NewsletterController(new DeschampsNewsletter)))
}
