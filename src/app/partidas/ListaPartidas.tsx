'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Prisma } from '@/generated/prisma';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import {
  ColumnDef,
  SortingState,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';

type ParticipacaoComCompetidor = Prisma.ParticipacaoGetPayload<{
  include: { competidor: true };
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
  const [sorting, setSorting] = useState<SortingState>([]);

  const handleDelete = async (id: string) => {
    await fetch(`/api/partida/${id}`, { method: 'DELETE' });
    setList((prev: Partida[]) => prev.filter((p: Partida) => p.id !== id));
    toast.success('Partida excluída!');
  };

  const columns: ColumnDef<Partida>[] = [
    {
      accessorKey: 'tipo',
      header: ({ column }) => (
        <div
          className="cursor-pointer text-center text-white font-bold"
          onClick={() =>
            column.toggleSorting(column.getIsSorted() === 'asc')
          }
        >
          TIPO
        </div>
      ),
      cell: ({ row }) => <div className="text-center">{row.getValue('tipo')}</div>,
    },
    {
      id: 'participantes',
      header: () => (
        <div className="text-center text-white font-bold">PARTICIPANTES</div>
      ),
      cell: ({ row }) => {
        const participantes = row.original.participantes
          .map((p) => p.competidor.nome)
          .join(' e ');
        return <div className="text-center">{participantes}</div>;
      },
    },
    {
    id: 'vencedor',
    accessorFn: (row) =>
      row.participantes.find((p) => p.resultado === 'Vencedor')
        ?.competidor.nome ?? '',
    header: ({ column }) => (
      <div
        className="cursor-pointer text-center text-white font-bold"
        onClick={() =>
          column.toggleSorting(column.getIsSorted() === 'asc')
        }
      >
        VENCEDOR
      </div>
    ),
    cell: ({ getValue }) => (
      <div className="text-center">{getValue<string>()}</div>
    ),
  },
    {
  accessorKey: 'resultado',
  header: ({ column }) => (
    <div
      className="cursor-pointer text-center text-white font-bold"
      onClick={() =>
        column.toggleSorting(column.getIsSorted() === 'asc')
      }
    >
      RESULTADO
    </div>
  ),
  cell: ({ getValue }) => (
    <div className="text-center">
      {getValue<string>()}
    </div>
  ),
}
    {
      accessorKey: 'data',
      header: ({ column }) => (
        <div
          className="cursor-pointer text-center text-white font-bold"
          onClick={() =>
            column.toggleSorting(column.getIsSorted() === 'asc')
          }
        >
          DATA
        </div>
      ),
      cell: ({ row }) => {
        const data = new Date(row.getValue('data'));
        return (
          <div className="text-center">
            {data.toLocaleString('pt-BR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        );
      },
    },
    {
      id: 'actions',
      header: () => (
        <div className="text-center text-white font-bold w-64">APAGAR REGISTRO</div>
      ),
      enableSorting: false,
      cell: ({ row }) => (
        <div className="text-center">
          <Button
            size="lg"
            className="bg-red-600 shadow-2xl hover:bg-red-900 border-1 border-gray-600 cursor-pointer"
            variant="destructive"
            onClick={() => handleDelete(row.original.id)}
          >
            Excluir
          </Button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: list,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="p-4 h-screen overflow-y-auto bg-gray-950 text-white">
      <div className="flex justify-between items-center">
        <Link href="/dashboard">
          <ChevronLeft className="cursor-pointer size-14" />
        </Link>
        <h1 className="text-2xl mb-4 font-bold">PARTIDAS</h1>
        <span />
      </div>

      <Table className="bg-gray-900 rounded-md w-full mt-6 border-1 border-gray-600">
        <TableHeader>
          {table.getHeaderGroups().map((hg) => (
            <TableRow
              key={hg.id}
              className="bg-gray-950 border-gray-600 border-1 hover:bg-black font-white text-xl"
            >
              {hg.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className={`text-center text-white font-bold ${
                    header.column.id === 'actions' ? 'w-64' : ''
                  }`}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} className="hover:bg-black font-white border-1 border-gray-600">
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  className={`text-center ${
                    cell.column.id === 'actions' ? 'w-64' : ''
                  }`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
