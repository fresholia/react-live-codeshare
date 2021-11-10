import supabase from '../../models/db';

import { getCache, setCache, setCacheBlock } from '../../models/cache/cache.model'

export class CodeController {
    tableName: string = 'codeblocks'
    data: any

    requestedCallbacks: Array<Function> = []

    constructor(room: string) {
        const cache = getCache(this.tableName, room)
        if (cache) {
            this.data = cache
        } else {
            setCache(this.tableName, {index: 'base_id', value: room}, (cache: any) => {
                this.data = cache

                if (this.requestedCallbacks && this.requestedCallbacks.length > 0) {
                    this.requestedCallbacks.forEach( f => {
                        f(this.data)
                    })
                }
            })
        }
    }

    getContent(callback: Function): void {
        if (this.data) {
            callback(this.data)
        } else {
            this.requestedCallbacks.push(callback)
        }
    }

    setCodeContent(content: string[]): void {
        if (this.data) {
            this.data.content = content.join('\n')
            setCacheBlock(this.tableName, {index: 'base_id', value: this.data.base_id}, 'content', content, true)
        }
    }

}