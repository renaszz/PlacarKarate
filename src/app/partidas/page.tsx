import { prisma } from '@/lib/prisma';
import ListaPartidas from './ListaPartidas';

export default async function PartidasPage() {
  const partidas = await prisma.partida.findMany({
    include: {
      participantes: {
        include: {
          competidor: true,
        },
      },
    },
    orderBy: { data: 'desc' },
  });

  return <ListaPartidas initialData={partidas} />;
}
