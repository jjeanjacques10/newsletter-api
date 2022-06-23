import Redis from 'ioredis'
import { cache } from '../config/variables'

const redisConnection = (): any => {
    return new Redis({
        host: cache.host,
        password: cache.password,
        port: parseInt((cache.port ?? '6379')),
        keyPrefix: cache.prefix
    })
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const RedisHelpers = {
    client: null as unknown as any,
    connect: async (): Promise<void> => {
        RedisHelpers.client = redisConnection()
    }
}