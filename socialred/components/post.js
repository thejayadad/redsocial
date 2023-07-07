'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Post = ({ post: { title, content, authorId, _id } }) => {
  return (
    <section>
        <h3>{title}</h3>
        <p>{content}</p>
    </section>
  )
}

export default Post