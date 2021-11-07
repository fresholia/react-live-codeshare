import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../models/db';

import { setCachedCodeContentData } from '../../models/cache';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = req.body

    if (!data || typeof data === 'undefined' || !data[0])
        return res.status(200).json([])

    const id = Number(data[0])
    const content = JSON.stringify(data[1].split("\n"))

    const base_id = data[2].toString()

    setCachedCodeContentData(id.toString(), content.toString())

    await prisma.codeblocks.update({
        where: {
            id: id
        },
        data: {
            content: content
        }
    })

    res.status(200).json([])
}