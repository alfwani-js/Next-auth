import Link from "next/link"

const Nav = () => {
  return (
    <div>
       <header className="bg-gray-600 text-gray-100">
        <nav className="flex justify-between items-center w-full px-10 py-4">
            <div>My site</div>
            <div className="flex gap-10">
                <Link href="/">Home</Link>
                <Link href="/createuser">Create user</Link>
                <Link href="/ClientMember">Client Member</Link>
                <Link href="/member">member</Link>
                <Link href="/public">Public</Link>
            </div>

        </nav>
        </header>
    </div>
  )
}

export default Nav
