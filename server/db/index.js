import pg from 'pg';
import { DB_NAME, PG_PASSWORD } from '../constants/index.js';

const { Pool } = pg;

const pool=  new Pool({
    user:"postgres",
    host:"localhost",
    database:`${DB_NAME}`,
    password:`${PG_PASSWORD}`,
    port:5432
})

export const query=(text,params)=>pool.query(text,params);