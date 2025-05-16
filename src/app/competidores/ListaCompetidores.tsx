// app/competidores/CompetidoresClient.tsx
'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
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
}

export default function ListaCompetidores({ initialData }: { initialData: Competidor[] }) {
  const { register, handleSubmit, reset } = useForm<CompetidorForm>();

  const [list, setList] = useState<Competidor[]>(initialData);
  const [isOpen, setIsOpen] = useState(false);
  const [editing, setEditing] = useState<Competidor | null>(null);

  const onSubmit: SubmitHandler<CompetidorForm> = async (data) => {
    if (editing) {
      const res = await fetch(`/api/competidores/${editing.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const updated: Competidor = await res.json();
      setList((prev) => prev.map((c) => (c.id === updated.id ? updated : c)));
      toast.success("Informações do competidor atualizadas!");
    } else {
      const res = await fetch('/api/competidores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const novo: Competidor = await res.json();
      setList((prev) => [...prev, novo]);
      toast.success("Novo competidor registrado!");
    }

    reset();
    setEditing(null);
    setIsOpen(false);
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/competidores/${id}`, { method: 'DELETE' });
    setList((prev) => prev.filter((c) => c.id !== id));
    toast.success("Competidor excluído!");
  };

  const openModal = (competidor?: Competidor) => {
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
  };

  return (
    <div className="p-4 h-screen bg-gray-950 text-white overflow-y-auto">
        <div className='flex justify-between items-center'>
            <Link href="/dashboard">
                <ChevronLeft className="cursor-pointer size-14"/>
            </Link>
            <h1 className="text-2xl mb-4 font-bold">COMPETIDORES</h1>
            <Button size={'lg'} onClick={() => openModal()} className="mb-4 bg-green-600 border-1 border-gray-600 cursor-pointer">
              ADICIONAR COMPETIDOR
            </Button>
        </div>
      <div className="flex justify-between mx-4">
      </div>
      <Table className="bg-gray-900 rounded-md w-full mt-6 border-1 border-gray-600">
        <TableHeader>
          <TableRow className="bg-gray-950 border-gray-600 hover:bg-black font-white text-xl">
            <TableHead className="text-center text-white font-bold">NOME</TableHead>
            <TableHead className="text-center text-white font-bold">ACADEMIA</TableHead>
            <TableHead className="text-center text-white font-bold">CIDADE</TableHead>
            <TableHead className="text-center text-white font-bold">ESTADO</TableHead>
            <TableHead className="text-center text-white font-bold">VITÓRIAS</TableHead>
            <TableHead className="text-center text-white font-bold w-24">ALTERAR</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {list.map((c) => (
            <TableRow key={c.id} className='hover:bg-black font-white'>
              <TableCell className="text-center">{c.nome}</TableCell>
              <TableCell className="text-center">{c.academia}</TableCell>
              <TableCell className="text-center">{c.cidade}</TableCell>
              <TableCell className="text-center">{c.estado}</TableCell>
              <TableCell className="text-center">{c.vitorias}</TableCell>
              <TableCell className='text-center'>
                <Button size="lg" className='bg-blue-600 shadow-2xl  hover:bg-blue-900 border-1 border-gray-600 cursor-pointer' onClick={() => openModal(c)}>Editar</Button>
                <Button size="lg" className='bg-red-600 shadow-2xl ml-4 hover:bg-red-900 border-1 border-gray-600 cursor-pointer' variant="destructive" onClick={() => handleDelete(c.id)}>
                  Excluir
                </Button>
              </TableCell>
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
            <Input className="placeholder:text-white border-1 border-gray-700" placeholder="Nome" {...register('nome', { required: true })} />
            <Input className="placeholder:text-white border-1 border-gray-700" placeholder="Academia" {...register('academia', { required: true })} />
            <Input className="placeholder:text-white border-1 border-gray-700" placeholder="Cidade" {...register('cidade', { required: true })} />
            <Input className="placeholder:text-white border-1 border-gray-700" placeholder="Estado" {...register('estado', { required: true })} />
            <DialogFooter>
              <Button className="cursor-pointer bg-gray-900 border-1 border-gray-700" type="submit">{editing ? 'Atualizar' : 'Adicionar'}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
