'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';

const CreateCommunity = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    return <p>Access Denied</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description) {
      toast.error('All fields are required');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/communities', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
        method: 'POST',
        body: JSON.stringify({ name, description }),
      });

      if (!res.ok) {
        throw new Error('Error occurred');
      }
      const post = await res.json()

      router.push(`/community`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h2>Create Community</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="text" onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <button type="submit">Create Community</button>
      </form>
    </section>
  );
};

export default CreateCommunity;
