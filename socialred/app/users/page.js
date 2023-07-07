'use client'

import React, { useEffect, useState } from 'react';


 

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
        {users?.length > 0 
       ? users.map((user) => (
        <div key={user._id}> 
        <h2>{user.email}</h2>
        </div>
      )) : <h3>No users are currently in the</h3>}

    </section>
  )
}

export default User