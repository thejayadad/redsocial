'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

 

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/user', { cache: 'no-store' });
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <section>
        <h2>All Users</h2>
        <Link href={'/'}>Home</Link>
        {users?.length > 0 
       ? users.map((user) => (
        <div key={user._id}> 
        <h2>
          <Link href={`/user/${user._id}`}>
          {user.email}
          </Link>        
        </h2>
        </div>
      )) : <h3>No users To Display</h3>}

    </section>
  )
}

export default User