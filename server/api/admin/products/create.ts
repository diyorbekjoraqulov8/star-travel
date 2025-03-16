export default defineEventHandler(async (event) => {
    const requestBody = await readBody(event);

    const db = useDatabase("mainDB");

    return await db.sql`INSERT INTO users (Name,Email) VALUES (${requestBody.username},${requestBody.email})`;
})
