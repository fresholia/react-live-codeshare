import supabase from './database';
 
let caches: any = {} // TODO_GITHUB: We need to put the correct type.

let queuedQueries: any = {} // TODO_GITHUB: We need to put the correct type.

const getCache = (table: string, index: string) => {
    if (caches[table] && caches[table][index]) {
        return caches[table][index]
    }
    return false
}

const setCache = async (table: string, indexTo: any, callback: Function) => {
    const { data, error } = await supabase
        .from(table)
        .select("*")
        .eq(indexTo.index, indexTo.value)

    if (data && data[0] && callback) {
        data[0].content = JSON.parse(data[0].content)
        callback(data[0])

        if (!caches[table])
            caches[table] = {}

        caches[table][indexTo.value] = data[0]
    }
    
    return true
}

const setCacheBlock = async (table: string, indexTo: any, blockName: string, value: string | number | object, queue: boolean) => {
    if (caches[table] && caches[table][indexTo.value]) {
        caches[table][indexTo.value][blockName] = value

        if (queue) { // Save after 40 sec
            if (!queuedQueries[table])
                queuedQueries[table] = {}

            queuedQueries[table][indexTo.value] = [table, indexTo, blockName, value]

            return true
        } else {
            if (typeof value === 'object') {
                value = JSON.stringify(value)
            }
            const { data, error } = await supabase
                .from('codeblocks')
                .update({ [blockName]: value })
                .eq(indexTo.index, indexTo.value)
        }

        return false
    }

    return false
}

const queuedPushInterval = () => {
    // TODO_GITHUB: This field does not work fully dynamically, if a queue data other than content is sent, it goes over it. Objects need to be separated and multi-thread should be used.
    if (queuedQueries) {
        Object.entries(queuedQueries).forEach(([key, value]: any) => {
            
            Object.entries(value).forEach(([k, v]) => {
                const cache = getCache(key, k)
                if (cache) {
                    const [ table, indexTo, blockName, value ]: any = v
                    setCacheBlock(table, indexTo, blockName, value, false)

                    delete queuedQueries[key][k]
                }
            })

        });
    }
}
setInterval(queuedPushInterval, 40000) // Processes to database every 40 seconds

export { getCache, setCache, setCacheBlock }