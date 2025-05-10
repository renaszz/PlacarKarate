import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const data = await req.json();

  const atualizado = await prisma.competidor.update({
    where: { id: params.id },
    data: {
      nome: data.nome,
      academia: data.academia,
      cidade: data.cidade,
      estado: data.estado,
    },
  });

  return NextResponse.json(atualizado);
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  await prisma.competidor.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
