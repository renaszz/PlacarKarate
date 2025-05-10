import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { competidorId, notaMedia } = body;

  if (!competidorId || notaMedia === undefined) {
    return new NextResponse("Dados inválidos", { status: 400 });
  }

  const resultadoTexto =
    notaMedia === 0 ? "Desclassificação" : `Nota: ${notaMedia.toFixed(1)}`;

  try {
    const novaPartida = await prisma.partida.create({
      data: {
        tipo: "KATA",
        data: new Date(),
        resultado: resultadoTexto,
        participantes: {
          create: [
            {
              competidorId,
              resultado: notaMedia === 0 ? "Desclassificado" : "Avaliado",
            },
          ],
        },
      },
    });

    return NextResponse.json(novaPartida);
  } catch (error) {
    console.error("Erro ao registrar partida de KATA:", error);
    return new NextResponse("Erro ao registrar partida de KATA", { status: 500 });
  }
}
