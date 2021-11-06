import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../models/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = req.body

    if (!data || typeof data === 'undefined' || !data[0])
        return res.status(200).json([])

    const content = data[0]

    const base_id = Math.random().toString(36).substr(2, 9)
    
    const codeData = await prisma.codeblocks.create({
        data: {
            base_id: base_id,
            name: content,
            content: '',
            language: 'plaintext',
            theme: 'material-darker'
        }
    })

    res.status(200).json(codeData)
}