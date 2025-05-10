export const dynamic = 'force-dynamic';

import { prisma } from '@/lib/prisma';
import ListaCompetidores from './ListaCompetidores';

export default async function CompetidoresPage() {
  const competidores = await prisma.competidor.findMany({
    orderBy: { vitorias: 'desc' },
  });

  return <ListaCompetidores initialData={competidores} />;
}
