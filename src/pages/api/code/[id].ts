import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../models/db'

import { getCachedCodeContent, setCachedCodeContent } from '../../../models/cache'
import { CachedCodeContentTypes, ContentProps } from '../../../types/CachedCodeContentTypes.d'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query

    if (id === 'undefined')
        return res.status(200).json([])
        
    const cache = getCachedCodeContent(id.toString())
    if (!cache) {
        let { data, error } = await supabase
            .from('codeblocks')
            .select("*")
            .eq('base_id', id.toString())

        if (data) {
            const cachedData: ContentProps = {
                id: data[0].id,
                base_id: id.toString(),
                name: data[0].name?.toString(),
                content: data[0].content?.toString(),
                language: data[0].language?.toString(),
                theme: data[0].theme?.toString(),
                created_at: data[0].created_at?.toString(),
                updated_at: data[0].updated_at?.toString()
            }
            setCachedCodeContent(id.toString(), cachedData)

            if (data.length > 0)
                return res.status(200).json(data[0])
        }
    } else {
        console.log(`C2G > getting page cache from api/pages/${id.toString()}`)
        return res.status(200).json(cache)
    }

    res.status(200).json({notFound: true})
}