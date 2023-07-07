import Link from "next/link"
import Post from "@/components/post"


export async function fetchPosts(){
  const res = await fetch('http://localhost:3000/api/post', {cache: 'no-store'})

  return res.json()
}
export default async function Home() {
  const posts = await fetchPosts()
  return (
    <main>
      <h2>Hello World</h2>
      <Link href={'/users'}>All Users</Link>
      <Link href={'/community'}>All communities</Link>
      <Link href={'/community/create-community'}>Create Community</Link>
      <Link href={'/create-post'}>Create Post</Link>
      <section>
      {posts?.length > 0 && <h2 className="text-center">Socail Red</h2>}
    {posts?.length > 0 
       ? posts.map((post) => (
        <Post key={post._id} post={post}/>
      )) : <h3>Post Will Be Loaded Soon</h3>}
      </section>
    </main>
  )
}
