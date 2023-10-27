import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const Product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!Product) {
    return NextResponse.json({ error: "Product not found or has been Deleted" }, { status: 404 });
  }

  return NextResponse.json(Product);
}
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const productName = await prisma.product.findFirst({
    where: { name: body.name },
  });

  if (productName) {
    return NextResponse.json(
      { error: "this Product Name already exists" },
      { status: 400 }
    );
  }

  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!product) {
    return NextResponse.json({ error: "product not found" }, { status: 404 });
  }

  const Updatedproduct = await prisma.product.update({
    where: { id: product.id },
    data: { name: body.name, price: body.price },
  });
  return NextResponse.json(Updatedproduct, { status: 202 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) }
  });
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }


  const body = await request.json();
  const DeletedProduct = await prisma.product.delete({ where: { id: parseInt(params.id) }})
  
  return NextResponse.json({ DeletedProduct }, { status: 200 });
}