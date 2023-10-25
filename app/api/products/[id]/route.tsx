import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "User no found" }, { status: 404 });

  return NextResponse.json([
    { id: 1, name: "mosh" , price : 2.5 },
    { id: 2, name: "john" , price : 2.5  },
  ]);
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

    return NextResponse.json({id:1 , name :"moe" , price : 25}  );
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