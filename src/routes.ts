import { Router } from 'express'

import userController from '@controllers/user'
import guardianController from '@controllers/guardian'
import storeController from '@controllers/store'
import authMiddleware from '@middlewares/auth'

const routes = Router()

routes.get('/', async (request, response) => {
  return response.json({
    message: 'Hello'
  })
})

routes.post('/user', userController.create)
routes.post('/user/authentication', userController.session)
routes.put('/user', authMiddleware, userController.update)
routes.get('/user', authMiddleware, userController.show)

routes.post('/guardian', guardianController.create)
routes.post('/guardian/authentication', guardianController.session)
routes.put('/guardian', authMiddleware, guardianController.update)
routes.get('/guardian', authMiddleware, guardianController.show)

routes.post('/store', storeController.create)

export default routes
