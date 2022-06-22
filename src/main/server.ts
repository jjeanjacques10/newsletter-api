import { server } from './config/variables'
import { app } from './config/app'

app.listen(server.port, () => {
  console.log(`Starting Server http://localhost:${server.port}`)
})
