export async function onRequest(context) {
    // 获取绑定的 D1 数据库实例
    const db = context.env.D1_DB;

    // 执行查询
    const query = 'SELECT * FROM your_table_name';
    try {
        const result = await db.prepare(query).all();
        return new Response(JSON.stringify(result), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response('Error querying database: ' + error.message, {
            headers: { 'Content-Type': 'text/plain' },
        });
    }
}
