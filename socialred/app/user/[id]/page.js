'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'


const Userprofile = (ctx) => {
    const [userDetails, setUserDetails] = useState("")
    useEffect(() => {
        async function fetchUser() {
            const res = await fetch(`http://localhost:3000/api/user/${ctx.params.id}`, { cache: 'no-store' })
            const user = await res.json()

            setUserDetails(user)
        }
        fetchUser()
    }, [])
  return (
    <section>
        <h2>User Profile</h2><Link href={'/'}>Home</Link>
        <p>{userDetails.username}</p>
        <h4>{userDetails.email}</h4>
        <h4>{userDetails.following}</h4>
        <h4>{userDetails.post}</h4>

    </section>
  )
}

export default Userprofile