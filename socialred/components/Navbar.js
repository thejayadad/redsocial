
"use client"
import Image from 'next/image'
import React, { useState, useEffect } from "react";
import logo from "../public/logo.png"
import Link from 'next/link'
import { signIn, signOut, useSession, getProviders } from "next-auth/react";


const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setupProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setupProviders();
  }, []);


  return (
    <header className='flex justify-between 
    gap-3 md:gap-2 items-center p-6 '>
        <Image
            className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'
            width={100} height={80}
            alt='logo'
            src={logo}
        />
        <nav>
        {session?.user ? (
        <div className="flex items-center space-x-8">
          <Link href="/create-prompt" className="blue-btn">
            Create Prompt
          </Link>
     
              <Image
                src={session?.user.image}
                width={"37"}
                height={"37"}
                className="rounded-full"
                alt="Profile Picture"
              />

              <div className="flex flex-col py-2 px-3 space-y-2">
                <Link href={`/profile/${session?.user.id}`}>Profile</Link>
                <button onClick={signOut}>Logout</button>
              </div>
         
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                className="blue-btn"
                key={provider.name}
                onClick={() => signIn(providers.id)}
              >
                Sign In
              </button>
            ))}
        </>
      )}
        </nav>
    </header>
  )
}

export default Navbar