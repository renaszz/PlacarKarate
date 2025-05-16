import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  const atualizado = await prisma.competidor.update({
    where: { id },
    data: {
      nome: body.nome,
      academia: body.academia,
      cidade: body.cidade,
      estado: body.estado,
      vitorias: body.vitorias,
    },
  });

  return NextResponse.json(atualizado);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await prisma.competidor.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
