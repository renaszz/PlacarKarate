import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const competidor = await prisma.competidor.update({
      where: { id },
      data: { vitorias: { increment: 1 } },
    });

    return NextResponse.json(competidor);
  }
