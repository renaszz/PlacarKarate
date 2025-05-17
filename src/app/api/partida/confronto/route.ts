import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { vencedorId, perdedorId, resultado } = await req.json();

  try {
    const novaPartida = await prisma.partida.create({
      data: {
        tipo: "CONFRONTO",
        data: new Date(),
        resultado,
        participantes: {
          create: [
            { competidorId: vencedorId, resultado: "Vencedor" },
            { competidorId: perdedorId, resultado: "Derrota" },
          ],
        },
      },
    });

    await prisma.competidor.update({
      where: { id: vencedorId },
      data: { vitorias: { increment: 1 } },
    });

    return NextResponse.json(novaPartida);
  } catch (error) {
    console.error("Erro ao registrar partida:", error);
    return new NextResponse("Erro ao registrar partida", { status: 500 });
  }
}
