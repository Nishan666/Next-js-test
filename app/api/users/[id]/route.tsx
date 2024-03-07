import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import schema from "../schema";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 400 });

  return NextResponse.json(user, { status: 200 });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();
  const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 400 });

  //zod
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const updateduser = await prisma.user.update({
    where: { id: parseInt(id) },
    data : { name : body.name , email : body.email}
  });

  return NextResponse.json(updateduser, { status: 200 });
}


export async function DELETE(request: NextRequest, { params: { id } }: Props) {
    const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
  
    if (!user)
      return NextResponse.json({ error: "User not found" }, { status: 400 });

    const delUser = await prisma.user.delete({
        where : {
            id : parseInt(id)
        }
    })
  
    return NextResponse.json({message :"Delete Successful"}, { status: 200 });
  }