import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { getCache } from '../models/cache';

import supabase from '../models/database'

import crypto from 'crypto'

interface AuthResult {
    status: number;
    message: string;
    data: {
        id?: number;
        username?: string;
        email?: string;
        created_at?: string;
        updated_at?: string;
    };
}

export async function login(req: Request, res: Response) {
    const { username, password } = req.body;

    let user = getCache('users', username)
    let result: AuthResult = {status: 201, data: {}, message: ''}

    if (!user) {
        const { data, error } = await supabase
            .from('users')
            .select("*")
            .eq('username', username)

        if (data && data[0]) {
            user = data[0]
        }
    }

    let hashedPassword = crypto.createHash('md5').update(password).digest('hex')

    if (user.password == hashedPassword) {
        result.status = 200
        result.data = {
            id: user.id,
            username: user.username,
            email: user.email,
            created_at: user.created_at,
            updated_at: user.updated_at
        }
    } else {
        result.status = 401
        result.message = 'Username or password is wrong.'
    }

    return res.json(result)
}