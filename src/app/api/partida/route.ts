import { prisma } from "@/lib/prisma";
import { NextResponse } from 'next/server';

export async function GET() {
  const partidas = await prisma.partida.findMany({
    include: {
      participantes: {
        include: {
          competidor: true,
        },
      },
    },
    orderBy: { data: 'desc' },
  });
  return NextResponse.json(partidas);
}