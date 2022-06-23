import { server } from './config/variables'
import { app } from './config/app'
import { RedisHelpers } from './database/redisConfiguration'

RedisHelpers.connect().then(() => {
  app.listen(server.port, () => {
    console.log(`Starting Server http://localhost:${server.port}`)
  })
}).catch((err) => { })