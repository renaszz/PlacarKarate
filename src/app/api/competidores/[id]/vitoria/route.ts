import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const competidor = await prisma.competidor.update({
    where: { id },
    data: {
      vitorias: { increment: 1 },
    },
  });

  return NextResponse.json(competidor);
}