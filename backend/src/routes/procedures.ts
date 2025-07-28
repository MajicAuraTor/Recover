//we want to fetch the procedures from the database

import { db } from '../db';
import { Router } from 'express';


export const router = Router();

router.get('/', async (req,res) => {
    try{
        const [procedures] = await db.query('SELECT * FROM procedures');
         //we use brackets because it uses array destructuing and allows you to store a lot of stuff in one place
        res.json(procedures);
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            error:'Failed to fetch procedures.'
        });
    }
});