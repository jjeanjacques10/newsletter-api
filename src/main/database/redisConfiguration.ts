import Redis from 'ioredis'
import { cache } from '../config/variables'

const redisConnection = (): any => {
    return new Redis(cache.redis_url)
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const RedisHelpers = {
    client: null as unknown as any,
    connect: async (): Promise<void> => {
        RedisHelpers.client = redisConnection()
        console.log('finished connecting to redis')
    }
}