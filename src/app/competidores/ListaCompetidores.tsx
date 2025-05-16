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
import { ChevronLeft, ArrowUpDown, MoreHorizontal } from 'lucide-react';
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

  const columns: ColumnDef<Competidor>[] = [
    {
      accessorKey: 'nome',
      header: ({ column }) => (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Nome <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => row.getValue('nome'),
    },
    {
      accessorKey: 'academia',
      header: ({ column }) => (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Academia <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => row.getValue('academia'),
    },
    {
      accessorKey: 'cidade',
      header: ({ column }) => (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Cidade <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => row.getValue('cidade'),
    },
    {
      accessorKey: 'estado',
      header: ({ column }) => (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Estado <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => row.getValue('estado'),
    },
    {
      accessorKey: 'vitorias',
      header: ({ column }) => (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Vitórias <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => row.getValue('vitorias'),
    },
    {
      id: 'actions',
      header: 'Ações',
      enableSorting: false,
      cell: ({ row }) => {
        const c = row.original;
        return (
          <div className="flex justify-center gap-2">
            <Button size="sm" onClick={() => openModal(c)}>Editar</Button>
            <Button size="sm" variant="destructive" onClick={() => handleDelete(c.id)}>Excluir</Button>
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

  /* eslint-disable @typescript-eslint/no-unused-vars */
  async function handleDelete(id: string) {
    await fetch(`/api/competidores/${id}`, { method: 'DELETE' });
    setList((prev) => prev.filter((c) => c.id !== id));
    toast.success('Competidor excluído!');
  }
  /* eslint-enable @typescript-eslint/no-unused-vars */

  const onSubmit: SubmitHandler<CompetidorForm> = async (data) => {
    if (editing) {
      const res = await fetch(`/api/competidores/${editing.id}`, {
        method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data)
      });
      const updated: Competidor = await res.json();
      setList((prev) => prev.map((c) => c.id === updated.id ? updated : c));
      toast.success('Informações do competidor atualizadas!');
    } else {
      const res = await fetch('/api/competidores',{ method: 'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data) });
      const novo: Competidor = await res.json();
      setList((prev) => [...prev, novo]);
      toast.success('Novo competidor registrado!');
    }
    reset(); setEditing(null); setIsOpen(false);
  };

  return (
    <div className="p-4 h-screen bg-gray-950 text-white overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <Link href="/dashboard"><ChevronLeft className="cursor-pointer size-14"/></Link>
        <h1 className="text-2xl font-bold">COMPETIDORES</h1>
        <Button size="lg" onClick={() => openModal()} className="bg-green-600">ADICIONAR COMPETIDOR</Button>
      </div>

      <Table className="bg-gray-900 rounded-md w-full">
        <TableHeader>
          {table.getHeaderGroups().map((hg) => (
            <TableRow key={hg.id}>
              {hg.headers.map((header) => (
                <TableHead key={header.id} className="text-center text-white font-bold">
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} className="hover:bg-black">
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className="text-center">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild><span/></DialogTrigger>
        <DialogContent className="bg-gray-950 text-white">
          <DialogHeader><DialogTitle>{editing ? 'Editar Competidor' : 'Adicionar Competidor'}</DialogTitle></DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input placeholder="Nome" {...register('nome',{required:true})}/>
            <Input placeholder="Academia" {...register('academia',{required:true})}/>
            <Input placeholder="Cidade" {...register('cidade',{required:true})}/>
            <Input placeholder="Estado" {...register('estado',{required:true})}/>
            {editing && <Input type="number" placeholder={`Vitórias atuais: ${editing.vitorias}`} {...register('vitorias',{valueAsNumber:true})}/>}            
            <DialogFooter><Button type="submit">{editing?'Atualizar':'Adicionar'}</Button></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
