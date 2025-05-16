'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { toast } from 'sonner';
import {
  ColumnDef,
  SortingState,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';

interface Competidor {
  id: string;
  nome: string;
  academia: string;
  cidade: string;
  estado: string;
  vitorias: number;
}

interface CompetidorForm {
  nome: string;
  academia: string;
  cidade: string;
  estado: string;
  vitorias?: number;
}

export default function ListaCompetidores({ initialData }: { initialData: Competidor[] }) {
  const { register, handleSubmit, reset } = useForm<CompetidorForm>();
  const [list, setList] = useState<Competidor[]>(initialData);
  const [isOpen, setIsOpen] = useState(false);
  const [editing, setEditing] = useState<Competidor | null>(null);
  const [sorting, setSorting] = useState<SortingState>([]);

  function openModal(competidor?: Competidor) {
    if (competidor) {
      setEditing(competidor);
      reset({
        nome: competidor.nome,
        academia: competidor.academia,
        cidade: competidor.cidade,
        estado: competidor.estado,
      });
    } else {
      setEditing(null);
      reset();
    }
    setIsOpen(true);
  }

  async function handleDelete(id: string) {
    await fetch(`/api/competidores/${id}`, { method: 'DELETE' });
    setList(prev => prev.filter(c => c.id !== id));
    toast.success('Competidor excluído!');
  }

  const onSubmit: SubmitHandler<CompetidorForm> = async data => {
    if (editing) {
      const res = await fetch(`/api/competidores/${editing.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const updated: Competidor = await res.json();
      setList(prev => prev.map(c => (c.id === updated.id ? updated : c)));
      toast.success('Informações do competidor atualizadas!');
    } else {
      const res = await fetch('/api/competidores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const novo: Competidor = await res.json();
      setList(prev => [...prev, novo]);
      toast.success('Novo competidor registrado!');
    }

    reset();
    setEditing(null);
    setIsOpen(false);
  };

  const columns: ColumnDef<Competidor>[] = [
    {
      accessorKey: 'nome',
      header: ({ column }) => (
        <div
          className="cursor-pointer text-center text-white font-bold"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          NOME
        </div>
      ),
      cell: ({ row }) => <div className="text-center">{row.getValue('nome')}</div>,
    },
    {
      accessorKey: 'academia',
      header: ({ column }) => (
        <div
          className="cursor-pointer text-center text-white font-bold"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          ACADEMIA
        </div>
      ),
      cell: ({ row }) => <div className="text-center">{row.getValue('academia')}</div>,
    },
    {
      accessorKey: 'cidade',
      header: ({ column }) => (
        <div
          className="cursor-pointer text-center text-white font-bold"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          CIDADE
        </div>
      ),
      cell: ({ row }) => <div className="text-center">{row.getValue('cidade')}</div>,
    },
    {
      accessorKey: 'estado',
      header: ({ column }) => (
        <div
          className="cursor-pointer text-center text-white font-bold"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          ESTADO
        </div>
      ),
      cell: ({ row }) => <div className="text-center">{row.getValue('estado')}</div>,
    },
    {
      accessorKey: 'vitorias',
      header: ({ column }) => (
        <div
          className="cursor-pointer text-center text-white font-bold"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          VITÓRIAS
        </div>
      ),
      cell: ({ row }) => <div className="text-center">{row.getValue('vitorias')}</div>,
    },
    {
      id: 'actions',
      header: () => <div className="text-center text-white font-bold">ALTERAR</div>,
      enableSorting: false,
      cell: ({ row }) => {
        const c = row.original;
        return (
          <div className="flex justify-center gap-2">
            <Button size="lg" className="bg-blue-600 shadow-2xl hover:bg-blue-900 border-1 border-gray-600 cursor-pointer" onClick={() => openModal(c)}>
              Editar
            </Button>
            <Button size="lg" variant="destructive" className="bg-red-600 shadow-2xl hover:bg-red-900 border-1 border-gray-600 cursor-pointer" onClick={() => handleDelete(c.id)}>
              Excluir
            </Button>
          </div>
        );
      },
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
    <div className="p-4 h-screen bg-gray-950 text-white overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <Link href="/dashboard">
          <ChevronLeft className="cursor-pointer size-14" />
        </Link>
        <h1 className="text-2xl mb-4 font-bold">COMPETIDORES</h1>
        <Button size={'lg'} onClick={() => openModal()} className="mb-4 bg-green-600 border-1 border-gray-600 cursor-pointer">
          ADICIONAR COMPETIDOR
        </Button>
      </div>
      <Table className="bg-gray-900 rounded-md w-full mt-6 border-1 border-gray-600">
        <TableHeader>
          {table.getHeaderGroups().map(hg => (
            <TableRow key={hg.id} className="bg-gray-950 border-gray-600 hover:bg-black text-xl">
              {hg.headers.map(header => (
                <TableHead key={header.id} className={`text-center text-white font-bold ${header.column.id === 'actions' ? 'w-24' : ''}`}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map(row => (
            <TableRow key={row.id} className="hover:bg-black">
              {row.getVisibleCells().map(cell => (
                <TableCell key={cell.id} className={`text-center ${cell.column.id === 'actions' ? 'w-24' : ''}`}> 
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild><span /></DialogTrigger>
        <DialogContent className="bg-gray-950 text-white mb-2">
          <DialogHeader>
            <DialogTitle className="mb-2">{editing ? 'Editar Competidor' : 'Adicionar Competidor'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input className="placeholder:text-white border-1 border-gray-700" placeholder="Nome" {...register('nome',{required:true})}/>
            <Input className="placeholder:text-white border-1 border-gray-700" placeholder="Academia" {...register('academia',{required:true})}/>
            <Input className="placeholder:text-white border-1 border-gray-700" placeholder="Cidade" {...register('cidade',{required:true})}/>
            <Input className="placeholder:text-white border-1 border-gray-700" placeholder="Estado" {...register('estado',{required:true})}/>
            {editing && (
              <Input type="number" className="placeholder:text-white border-1 border-gray-700" placeholder={`Vitórias atuais: ${editing.vitorias}`} {...register('vitorias',{valueAsNumber:true})}/>
            )}
            <DialogFooter>
              <Button className="cursor-pointer bg-gray-900 border-1 border-gray-700" type="submit">{editing?'Atualizar':'Adicionar'}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
