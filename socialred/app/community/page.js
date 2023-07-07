'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';



const Community = () => {
    const [communities, setCommunities] = useState([]);

    useEffect(() => {
      const fetchCommunities = async () => {
        try {
          const res = await fetch('http://localhost:3000/api/community', { cache: 'no-store' });
          const data = await res.json();
          setUsers(data);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
  
      fetchCommunities();
    }, []);
  
  return (
    <section>
        <h2>All communities</h2>
        {communities?.length > 0 
       ? communities.map((community) => (
        <div key={community._id}> 
        <h2>
          <Link href={`/user/${community._id}`}>
          {community.name}
          </Link>        
        </h2>
        </div>
      )) : <h3>No communities To Display</h3>}

      <Link href={'/'}>Home</Link>
    </section>
  )
}

export default Community