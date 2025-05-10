import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  await prisma.partida.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}