import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { perdedorIds, resultado } = await req.json();

  if (!Array.isArray(perdedorIds) || perdedorIds.length !== 2) {
    return new NextResponse('Payload inválido: esperados dois IDs de perdedores', { status: 400 });
  }

  try {
    const novaPartida = await prisma.partida.create({
      data: {
        tipo: 'CONFRONTO',
        data: new Date(),
        resultado,
        participantes: {
          create: perdedorIds.map((id: string) => ({
            competidorId: id,
            resultado: 'Derrota',
          })),
        },
      },
    });

    return NextResponse.json(novaPartida);
  } catch (error) {
    console.error('Erro ao registrar partida sem vencedor:', error);
    return new NextResponse('Erro ao registrar partida sem vencedor', { status: 500 });
  }
}
