import dotenv from "dotenv"

dotenv.config()

export const {PORT,JWT_SECRET,PG_PASSWORD, DB_NAME}=process.env