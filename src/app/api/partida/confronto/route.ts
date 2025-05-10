import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { vencedorId, perdedorId, empate } = body;

  try {
    const novaPartida = await prisma.partida.create({
      data: {
        tipo: "CONFRONTO",
        data: new Date(),
        resultado: empate ? "Empate" : "Vitória",
        participantes: {
          create: empate
            ? [
                { competidorId: vencedorId, resultado: "Derrota" },
                { competidorId: perdedorId, resultado: "Derrota" },
              ]
            : [
                { competidorId: vencedorId, resultado: "Vitória" },
                { competidorId: perdedorId, resultado: "Derrota" },
              ],
        },
      },
    });
    if (!empate) {
      await prisma.competidor.update({
        where: { id: vencedorId },
        data: { vitorias: { increment: 1 } },
      });
    }

    return NextResponse.json(novaPartida);
  } catch (error) {
    console.error("Erro ao registrar partida:", error);
    return new NextResponse("Erro ao registrar partida", { status: 500 });
  }
}