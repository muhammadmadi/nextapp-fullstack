import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!user) {
    return NextResponse.json({ error: "User not found or has been Deleted" }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const userEmail = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (userEmail) {
    return NextResponse.json(
      { error: "this email already exists" },
      { status: 400 }
    );
  }

  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user) {
    return NextResponse.json({ error: "User no found" }, { status: 404 });
  }

  const UpdatedUser = await prisma.user.update({
    where: { id: user.id },
    data: { name: body.name, email: body.email },
  });
  return NextResponse.json(UpdatedUser, { status: 202 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) }
  });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }


  const body = await request.json();
  const DeletedUser = await prisma.user.delete({ where: { id: parseInt(params.id) }})
  
  return NextResponse.json({ DeletedUser }, { status: 200 });
}
