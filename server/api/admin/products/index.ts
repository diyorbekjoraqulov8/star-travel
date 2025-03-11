export default defineEventHandler(async (event) => {
    const db = useDatabase('mainDB')

    const result = await db.sql`SELECT * FROM users`
    return result.rows
})
