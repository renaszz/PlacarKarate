import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const competidores = await prisma.competidor.findMany();
  return NextResponse.json(competidores);
}

export async function POST(req: Request) {
  const data = await req.json();

  const novoCompetidor = await prisma.competidor.create({
    data: {
      nome: data.nome,
      academia: data.academia,
      cidade: data.cidade,
      estado: data.estado,
      vitorias: 0,
      medalhas: 0,
    },
  });

  return NextResponse.json(novoCompetidor);
}
