import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../models/db';

import { setCachedCodeContentData } from '../../models/cache';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const reqBody = req.body

    if (!reqBody || typeof reqBody === 'undefined' || !reqBody[0])
        return res.status(200).json([])

    const id = Number(reqBody[0])
    const content = JSON.stringify(reqBody[1].split("\n"))

    const base_id = reqBody[2].toString()

    setCachedCodeContentData(base_id.toString(), content.toString())

    const { data, error } = await supabase
        .from('codeblocks')
        .update({ content: content })
        .eq('id', id.toString())

    res.status(200).json(data)
}