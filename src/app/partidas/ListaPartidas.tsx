'use client';

import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Prisma } from '@/generated/prisma';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

type ParticipacaoComCompetidor = Prisma.ParticipacaoGetPayload<{
  include: { competidor: true }
}>;

interface Partida {
  id: string;
  tipo: string;
  data: Date;
  resultado: string;
  participantes: ParticipacaoComCompetidor[];
}

export default function ListaPartidas({ initialData }: { initialData: Partida[] }) {
  const [list, setList] = useState<Partida[]>(initialData);

  const handleDelete = async (id: string) => {
    await fetch(`/api/partida/${id}`, { method: 'DELETE' });
    setList((prev: Partida[]) => prev.filter((p: Partida) => p.id !== id));
    toast.success("Partida excluída!");
  };

  return (
    <div className="p-4 h-full bg-gray-950 text-white overflow-hidden">
      <div className='flex justify-between items-center'>
        <Link href="/dashboard">
          <ChevronLeft className="cursor-pointer size-14" />
        </Link>
        <h1 className="text-2xl mb-4 font-bold">PARTIDAS</h1>
        <span />
      </div>

      <Table className="bg-gray-900 rounded-md w-full mt-6 border-1 border-gray-600">
        <TableHeader>
          <TableRow className="bg-gray-950 border-gray-600 hover:bg-black font-white text-xl">
            <TableHead className="text-center text-white font-bold">TIPO</TableHead>
            <TableHead className="text-center text-white font-bold">PARTICIPANTES</TableHead>
            <TableHead className="text-center text-white font-bold">RESULTADO</TableHead>
            <TableHead className="text-center text-white font-bold">DATA</TableHead>
            <TableHead className="text-center text-white font-bold w-64">APAGAR REGISTRO</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {list.map((p) => (
            <TableRow key={p.id} className="hover:bg-black font-white">
              <TableCell className="text-center">{p.tipo}</TableCell>
              <TableCell className="text-center">
                {p.participantes.map((p) => p.competidor.nome).join(' e ')}
              </TableCell>
              <TableCell className="text-center">
                {p.resultado.toLowerCase() === 'vitória'
                  ? `Vitória de ${
                      p.participantes.find(part =>
                        part.resultado.toLowerCase() === 'vitória'
                      )?.competidor.nome
                    }`
                  : p.resultado}
              </TableCell>
              <TableCell className="text-center">
                {new Date(p.data).toLocaleString('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </TableCell>
              <TableCell className="text-center">
                <Button
                  size="lg"
                  className="bg-red-600 shadow-2xl hover:bg-red-900 border-1 border-gray-600 cursor-pointer"
                  variant="destructive"
                  onClick={() => handleDelete(p.id)}
                >
                  Excluir
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
