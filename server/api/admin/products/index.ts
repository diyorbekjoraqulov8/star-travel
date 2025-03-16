export default defineEventHandler(async (event) => {
    const db = useDatabase("mainDB");

    const users = await db.sql`SELECT * FROM users`;

    return users.rows;
})
