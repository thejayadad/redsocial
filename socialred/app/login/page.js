'use client'
import React, {useState} from 'react'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password === '' || email === '') {
            toast.error("Fill all fields!")
            return
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long")
            return
        }

        try {
            const res = await signIn('credentials', { email, password, redirect: false })

            if (res?.error == null) {
                router.push("/")
            } else {
                toast.error("Error occured while logging")
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setEmail(e.target.value)} type="email" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" />
                <button type='submit'>Login</button>
            </form>
            <a href='/register'>
                <span>Need an Account?</span>
            </a>
        </div>
    )


}

export default Login