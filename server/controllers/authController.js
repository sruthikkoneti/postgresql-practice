import { query } from "../db/index.js"

export const getUsers=async(req,res)=>{
    try{
        const users=await query('select * from users')

        res.status(200).json(users.rows)
    }catch(err){

    }
}