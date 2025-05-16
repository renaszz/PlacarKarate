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

  const openModal = (competidor?: Competidor) => {
    if (competidor) {
      setEditing(competidor);
      reset({
        nome: competidor.nome,
        academia: competidor.academia,
        cidade: competidor.cidade,
        estado: competidor.estado,
        vitorias: competidor.vitorias,
      });
    } else {
      setEditing(null);
      reset();
    }
    setIsOpen(true);
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/competidores/${id}`, { method: 'DELETE' });
    setList(prev => prev.filter(c => c.id !== id));
    toast.success('Competidor excluído!');
  };

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
    { accessorKey: 'nome', header: 'NOME' },
    { accessorKey: 'academia', header: 'ACADEMIA' },
    { accessorKey: 'cidade', header: 'CIDADE' },
    { accessorKey: 'estado', header: 'ESTADO' },
    { accessorKey: 'vitorias', header: 'VITÓRIAS' },
    {
      id: 'actions',
      header: 'ALTERAR',
      enableSorting: false,
      cell: ({ row }) => {
        const c = row.original;
        return (
          <div className="flex justify-center gap-2">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-900" onClick={() => openModal(c)}>
              Editar
            </Button>
            <Button size="lg" variant="destructive" className="bg-red-600 hover:bg-red-900" onClick={() => handleDelete(c.id)}>
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
          <ChevronLeft className="cursor-pointer text-white" />
        </Link>
        <h1 className="text-2xl font-bold">COMPETIDORES</h1>
        <Button size="lg" className="bg-green-600" onClick={() => openModal()}>
          ADICIONAR
        </Button>
      </div>
      <Table className="w-full bg-gray-900 rounded-md border border-gray-600 border-collapse">
        <TableHeader>
          {table.getHeaderGroups().map(hg => (
            <TableRow key={hg.id} className="border-gray-600">
              {hg.headers.map(header => (
                <TableHead
                  key={header.id}
                  className={`text-center font-bold text-white ${header.id === 'actions' ? 'w-24' : ''}`}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map(row => (
            <TableRow key={row.id} className="border-gray-600">
              {row.getVisibleCells().map(cell => (
                <TableCell
                  key={cell.id}
                  className={`text-center ${cell.column.id === 'actions' ? 'w-24' : ''}`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-gray-950 text-white">
          <DialogHeader>
            <DialogTitle>{editing ? 'Editar Competidor' : 'Adicionar Competidor'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input placeholder="Nome" {...register('nome', { required: true })} />
            <Input placeholder="Academia" {...register('academia', { required: true })} />
            <Input placeholder="Cidade" {...register('cidade', { required: true })} />
            <Input placeholder="Estado" {...register('estado', { required: true })} />
            {editing && (
              <Input
                type="number"
                placeholder={`Vitórias atuais: ${editing.vitorias}`}
                {...register('vitorias', { valueAsNumber: true })}
              />
            )}
            <DialogFooter>
              <Button type="submit" className="bg-gray-700">
                {editing ? 'Atualizar' : 'Adicionar'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
