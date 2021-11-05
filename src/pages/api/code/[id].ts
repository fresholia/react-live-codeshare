import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query

    if (id === 'undefined')
        return res.json([])

    const allUsers = await prisma.codeBlocks.findMany({
        where: {
            id: Number(id)
        }
    })
    
    if (allUsers.length > 0)
        return res.json(allUsers)

    res.json([])
}