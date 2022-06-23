import { Redis } from 'ioredis'

export class NewsRepository {
    private readonly client: Redis
    constructor(client: Redis) {
        this.client = client
    }

    async set(key: string, value: string, timeExp?: number | undefined): Promise<void> {
        timeExp === undefined ? await this.client.set(key, value) : await this.client.set(key, value, 'EX', timeExp)
    }

    async get(key: string): Promise<string | null> {
        return await this.client.get(key)
    }

    async del(key: string): Promise<void> {
        await this.client.del(key)
    }

    async getKeysByPrefix(prefixs: string[]): Promise<string[]> {
        let key: string = ''

        for (let i = 0; prefixs.length > i; i++) {
            key += (key !== undefined ? ':' + prefixs[i] : prefixs[i])
        }
        const keys = await this.client.keys(key)
        return keys
    }
}