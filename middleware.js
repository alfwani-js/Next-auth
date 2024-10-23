import {withAuth} from "next-auth/middleware";
import  {NextResponse} from "next/server";

export default withAuth(
    function middleware(req){
        console.log("url:"+req.nextUrl.pathname);
        console.log("role:"+req.nextauth.role);

        if(req.nextUrl.pathname.startsWith("/createuser") &&
         req.nextauth.role !== "admin"){
            return NextResponse.rewrite(new URL("/denied", req.url));
    }
},
{callbacks:{
    authorized:({token}) =>!!token,
},
}
);

export const config = {matcher:["/createuser"]};