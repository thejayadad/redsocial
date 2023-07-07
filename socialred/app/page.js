import Link from "next/link"


export default function Home() {
  return (
    <main>
      <h2>Hello World</h2>
      <Link href={'/users'}>All Users</Link>
      <Link href={'/community'}>All communities</Link>
      <Link href={'/community/create-community'}>Create Community</Link>

    </main>
  )
}
