import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { name, password } = await req.json()

  if (!name || !password) {
    return NextResponse.json({ error: "Credenciais inválidas" }, { status: 400 })
  }

  const user = await prisma.user.findUnique({
    where: { name },
  })

  if (!user) {
    return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 })
  }

  if (user.password !== password) {
    return NextResponse.json({ error: "Senha incorreta" }, { status: 401 })
  }

  return NextResponse.json({ success: true, user: { id: user.id, username: user.name } })
}
