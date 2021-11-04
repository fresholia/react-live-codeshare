import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query

    /*
    await prisma.codeBlocks.create({
        data: {
            name: 'hello.js',
            content: 'console.log("hello world")',
        }
    })
    */

    const allUsers = await prisma.codeBlocks.findMany({
        where: {
            id: Number(id)
        }
    })
    
    res.json(allUsers)
}