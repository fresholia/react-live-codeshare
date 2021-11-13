import supabase from '../../models/db';

import { getCache, setCache, setCacheBlock } from '../../models/cache/cache.model'
import { IClientActions, ICodeBlocks } from 'types/codeview.type';

export class CodeController {
    tableName: string = 'codeblocks'
    data: any // TODO_GITHUB: We need to put the correct type.

    requestedCallbacks: Array<Function> = []

    clients: IClientActions[] = []

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

    updateCache(dataName: string, value: string | number | string[]): void {
        if (this.data) {
            this.data[dataName] = value
            // FUTURE_PLAN: insert to database
        }
    }

    getClients() {
        return this.clients
    }

    addClient(id: string, name: string, ipaddr: string): void {
        let index = this.clients.findIndex(data => data.ip == ipaddr)
        if (index >= 0) {
            this.clients.splice(index, 1)
        }
        
        this.clients.push({
            id: id,
            name: name,
            position: [0, 0],
            selection: [0, 0],
            ip: ipaddr
        })
    }

    removeClient(id: string): void {
        let index = this.clients.findIndex(data => data.id == id)

        if (index >= 0) {
            this.clients.splice(index, 1)
        }
    }

    setClientData(id: string, value: IClientActions): void {
        let index = this.clients.findIndex(data => data.id == id)
        if (index >= 0) {
            this.clients[index] = value
        }
    }

}