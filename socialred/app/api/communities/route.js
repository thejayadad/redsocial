import db from '@/lib/db';
import Community from '@/models/Community';
import { verifyJwtToken, verifyToken } from '@/lib/jwt';


export async function GET(req) {
    await dbConnect();

    try {
        const communities = await Community.find();
    
        return res.status(200).json(communities);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
      }

}

export async function POST(req) {
    await db.connect()

    const accessToken = req.headers.get("authorization")
    const token = accessToken.split(' ')[1]

    const decodedToken = verifyJwtToken(token)
    

    if (!accessToken || !decodedToken) {
        return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 })
    }

    try {
        const body = await req.json()
        const newCommunity = await Community.create(body)

        return new Response(JSON.stringify(newCommunity), { status: 201 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }


    
}