import { NextResponse as res } from "next/server"


export const GET = async ()=>{
   return res.json({
    success : true,
    message : 'success get data'
   }, {status : 200})
}