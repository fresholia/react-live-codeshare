import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = req.body

    if (!data || typeof data === 'undefined' || !data[0])
        return res.status(200).json([])

    const id = Number(data[0])
    const content = data[1]
    
    await prisma.codeBlocks.update({
        where: {
            id: id
        },
        data: {
            content: content
        }
    })
    
    res.status(200).json([])
}