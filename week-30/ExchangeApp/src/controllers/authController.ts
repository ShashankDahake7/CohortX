import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user';

const users: { [key: string]: any } = {};

export const signup = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    if (users[username]) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    users[username] = { username, password: hashedPassword };

    res.status(201).json({ message: 'User created successfully' });
};

export const signin = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    const user = users[username];

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ username }, 'your_jwt_secret', { expiresIn: '1h' });

    res.status(200).json({ token });
};
