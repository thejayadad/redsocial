'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react'

const Createpost = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
  
    const { data: session, status } = useSession()
    const router = useRouter()
    if (status === 'loading') {
        return <p>Loading...</p>
    }
  
    if (status === 'unauthenticated') {
      return <p  >
          Access Denied
      </p>
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
  
    if(!title || !content){
        toast.error("All fields are required")
        return
    }
  
    try {
      
      const res = await fetch(`http://localhost:3000/api/post`, {
        headers: {
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${session?.user?.accessToken}` 
        },
        method: 'POST',
        body: JSON.stringify({title,content,authorId: session?.user?._id})
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
  
    return(
        <section>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setTitle(e.target.value)} type='text' id='title' placeholder='Title' />
                <input onChange={(e) => setContent(e.target.value)} type='text' id='content' placeholder='Content' />
                <button type='submit'>New Post</button>
            </form>
        </section>
    )
}

export default Createpost