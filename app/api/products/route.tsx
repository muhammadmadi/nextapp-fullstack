import { NextRequest, NextResponse } from "next/server";
import { number } from "zod";
import schema from "./schema";


export function GET(request: NextRequest) {
  let asd = NextResponse.json([
    { id: 1, name: "milk" , price : 21},
    { id: 2, name: "bread" , price : 32},
  ]);

  return asd;
} 

export async function POST(request:NextRequest ) {
   const body = await request.json()
   const validation = schema.safeParse(body)
    if (!validation.success)
        return NextResponse.json(validation.error.errors , {status : 400});

        return NextResponse.json({id:10 ,name : body.name , price : body.price }, {status : 201}); 
      //return NextResponse.json({id:10 , ...body });  
}




export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  //check if use name invalid
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
//check if user exist
 if (params.id > 10)
    return NextResponse.json({ error: "User no found" }, { status: 404 });

    return NextResponse.json({id:1 , name :"moe"}  );
}


export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
   const body = await request.json();
//check if user exist
 if (params.id > 10)
    return NextResponse.json({ error: "User no found" }, { status: 404 });

    return NextResponse.json('user deleted ' , {status : 200} ); 
}