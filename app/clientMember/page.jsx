"use client";
import { useSession} from "next-auth/react"
import { redirect } from "next/navigation"
const Member =  () => {
    const {data: session} = useSession({
      required: true,
      onUnauthenticated(){
        redirect("/api/auth/signin?callbackUrl=/member");
      },
    });
    return (
      <>
      <div>
      <h1> Member Client Session</h1>
      <p>
      email:{session?.user?.email}
      
    </p>
    <p>user role:{session?.user.role}</p>        
      </div>
      </>
    )
  }
  
  export default Member
  