'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react'

const CreateCommunity = () => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const { data: session, status } = useSession()
    const router = useRouter()

    if (status === 'loading') {
        return <p>Loading...</p>
    }
  
    if (status === 'unauthenticated') {
      return <p>
          Access Denied
      </p>
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    if(!name || !desc){
        toast.error("All fields are required")
        return
    }
  
    try {
      
      const res = await fetch(`http://localhost:3000/api/community`, {
        headers: {
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${session?.user?.accessToken}` 
        },
        method: 'POST',
        body: JSON.stringify({name,desc,authorId: session?.user?._id})
      })
  
      if(!res.ok){
        throw new Error("Error occured")
      }
  
      const post = await res.json()
  
      router.push(`/`)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <section>
      <h2>Create a Community</h2>
     <form onSubmit={handleSubmit}>
     <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Name'/>
     <input type='text' onChange={(e) => setDesc(e.target.value)} placeholder='Description'/>
    <button type='submit'>Create</button>
    </form>
    </section>
  )
}

export default CreateCommunity