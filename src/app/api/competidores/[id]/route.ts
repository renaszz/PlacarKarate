import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  const competidorAtual = await prisma.competidor.findUnique({
    where: { id },
  });

  if (!competidorAtual) {
    return NextResponse.json({ error: 'Competidor não encontrado' }, { status: 404 });
  }

  const atualizado = await prisma.competidor.update({
    where: { id },
    data: {
      nome: body.nome,
      academia: body.academia,
      cidade: body.cidade,
      estado: body.estado,
      body.vitorias ?? competidorAtual.vitorias,
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
