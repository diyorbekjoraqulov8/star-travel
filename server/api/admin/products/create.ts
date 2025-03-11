import { createError, sendError } from 'h3';

export default defineEventHandler(async (event) => {
    try {
        const requestBody = await readBody(event)

        console.log('requestBody: ', requestBody)

        const db = useDatabase('mainDB')

        await db.sql`CREATE TABLE IF NOT EXISTS users
            (
                ID INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT,
                email TEXT UNIQUE,
                description TEXT
            )
        `

        return await db.sql`INSERT INTO users (username, email, description) VALUES (${requestBody.username}, ${requestBody.email}, ${requestBody.description})`
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: error.code,
            data: error.message, // Xatolik tafsilotlari
        });
    }
})
