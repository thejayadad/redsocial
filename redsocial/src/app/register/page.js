'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'


const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()
    
        if(username === '' || email === '' || password === ''){
            toast.error("Fill all fields")
            return
        }
    
        if(password.length < 6){
            toast.error("Password must be at least 6 characters")
            return
        }
    
        try {
            const res = await fetch('http://localhost:3000/api/register', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({username, email, password})
            })
    
            console.log(await res.json())
            if(res.ok){
                toast.success("Successfully registered the user")
                setTimeout(() => {
                    signIn()
                }, 1500)
                return
            } else {
                toast.error("Error occured while registering")
                return
            }
        } catch (error) {
            console.log(error)
        }
      }
  return (
    <section>
        <h2>Register</h2>

        <form onSubmit={handleSubmit}>
        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email'/>
        <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Your Username"/>
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Your Password"/>
        <button type='submit'>Register</button>
        </form>
        <a href='/login'>
            <span>Already have an account?</span>
        </a>
    </section>  
  )
}

export default Register