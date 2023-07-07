import db from '@/lib/db';

import Community from '@/models/Community';

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