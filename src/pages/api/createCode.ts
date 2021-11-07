import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../models/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const reqBody = req.body

    if (!reqBody || typeof reqBody === 'undefined' || !reqBody[0])
        return res.status(200).json([])

    const content = reqBody[0]

    const base_id = Math.random().toString(36).substr(2, 9)
    

    const { data, error } = await supabase
        .from('codeblocks')
        .insert([
            { base_id: base_id, name: content, content: '', language: 'plaintext', theme: 'material-darker' }
        ])


    res.status(200).json(data)
}