import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { options } from "@/app/api/auth/[...nextauth]/options"

const Member= async() => {
  const session = await getServerSession(options)

  if(!session){
    redirect("/api/auth/signin?callbackUrl=/member")
  }
  return (
    <div>
    <h1> Member Server Session</h1>
    <p>
      {session?.user?.email}
    </p>
    <p>{session?.user?.email}</p>
      
    </div>
  )
}

export default Member
