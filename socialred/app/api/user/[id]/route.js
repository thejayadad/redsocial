import db from '@/lib/db';

import User from '@/models/User';

export async function GET(req, ctx) {
    await db.connect()
    const id = ctx.params.id

    try {
        const user = await User.findById(id).populate('posts')
        return new Response(JSON.stringify(user), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })

    }

}