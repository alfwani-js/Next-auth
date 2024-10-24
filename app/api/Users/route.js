import User from "@/app/(modals)/User";
import { NextResponse } from "next/server";

import bcrypt from "bcrypt";

export async function POST(req){
    try {
        const body = await req.json()
        const userData = body.formData

        //confirm data exists
        if(!userData?.email || !userData.password){
            return NextResponse.json({message:"all fields are required1", err}, {status:400});

        }
        //Check for duplicate emails
        const duplicate = await User.findOne({email: userData.email}).lean().exec();

        if(duplicate){
            return NextResponse.json({message:"User already exists2", err}, {status:409});
        };
        const hashPassword = await bcrypt.hash(userData.password, 10);
        userData.password = hashPassword;
        await User.create(userData);
        return NextResponse.json({message:"user Created by Ian3", err}, {status:201});
        
    } catch (error) {
        console.log(err);
        console.log(process.env.MONGODB_URI);
        return NextResponse.json({message:"error4", err}, {status:500});
        
    }
}