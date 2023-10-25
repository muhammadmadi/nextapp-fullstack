import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "User no found" }, { status: 404 });

  return NextResponse.json([
    { id: 1, name: "mosh" },
    { id: 2, name: "john" },
  ]);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  //check if use name invalid
  if (!body.name)
    return NextResponse.json({ error: "Name is required " }, { status: 400 });
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