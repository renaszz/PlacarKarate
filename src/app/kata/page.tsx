'use client';

import { useState, useEffect, useMemo } from "react";
import { Timer } from "@/components/Timer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { ChevronLeft, UserCircleIcon } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface Competidor {
  id: string;
  nome: string;
}

export default function Kata() {
  const [competidores, setCompetidores] = useState<Competidor[]>([]);
  const [idCompetidor, setIdCompetidor] = useState("");
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState(0);
  const [inputTime, setInputTime] = useState(0);
  const [notas, setNotas] = useState([0, 0, 0]);
  const router = useRouter();

  useEffect(() => {
    async function fetchCompetidores() {
      const res = await fetch("/api/competidores");
      const data = await res.json();
      setCompetidores(data);
    }

    fetchCompetidores();
  }, []);

  const handleStart = () => {
    if (idCompetidor && inputTime > 0) {
      setTime(inputTime * 60);
      setStarted(true);
    }
  };

  const handleNotaChange = (index: number, value: number) => {
    const novas = [...notas];
    novas[index] = value;
    setNotas(novas);
  };

  const media = useMemo(() => {
    const soma = notas.reduce((a, v) => a + v, 0);
    return (soma / notas.length).toFixed(1);
  }, [notas]);

  const nome1 = competidores.find(c => c.id === idCompetidor)?.nome || "Competidor";

  async function registrarPartidaKata() {
    await fetch("/api/partida/kata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        competidorId: idCompetidor,
        notaMedia: parseFloat(media),
      }),
    });
    toast.success("Partida de kata registrada!");
    setTimeout(() => router.push("/dashboard"), 1500);
  }

  if (!started) {
    return (
      <div className="h-screen w-screen bg-gray-950 flex items-center justify-center">
        <Card className="p-6 bg-gray-900 rounded-lg shadow-md w-[400px] border-1 border-gray-700">
          <Link href="/">
                <ChevronLeft color="#fff" className="cursor-pointer fill"/>
          </Link>
          <CardContent className="flex flex-col gap-4">
            <Label className="text-white text-xl">Competidor:</Label>
            <select
              className="p-2 rounded bg-gray-800 text-white border border-gray-600"
              value={idCompetidor}
              onChange={(e) => setIdCompetidor(e.target.value)}
            >
              <option value="">Selecione o competidor</option>
              {competidores.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.nome}
                </option>
              ))}
            </select>
            <Label className="text-white text-xl">Tempo (em minutos):</Label>
            <Input
              className="p-2 rounded bg-gray-800 text-white border border-gray-600 text-2xl"
              type="number"
              value={inputTime}
              onChange={e => setInputTime(Number(e.target.value))}
              min={1}
              max={60}
            />
            <Button
              onClick={handleStart}
              className="mt-4 bg-gray-950 border border-gray-800 text-white text-xl cursor-pointer"
            >
              Começar Partida
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-950 p-2 gap-4">
      <div className="grid grid-cols-2 mb-12 mt-8">
        <div className="flex flex-col gap-8 ml-80">
          {[1, 2, 3].map((num, idx) => (
            <div key={num} className="flex items-center gap-16">
              <Label className="text-white text-8xl font-bold">JUIZ {num}</Label>
              <Input
                type="number"
                min={0}
                max={10}
                className="w-30 h-20 bg-black rounded text-white font-bold !text-6xl !leading-none text-center appearance-none placeholder:text-white"
                value={notas[idx] || ''}
                onChange={e => {
                  const valor = Number(e.target.value);
                  if (valor >= 1 && valor <= 10) {
                    handleNotaChange(idx, valor);
                  } else if (e.target.value === "") {
                    handleNotaChange(idx, 0);
                  }
                }}
                placeholder="0"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center mr-80">
          <UserCircleIcon size={350} className="text-gray-600" />
          <Label className="mt-4 bg-transparent border-none text-white text-7xl font-bold text-center">{nome1}</Label>
        </div>
      </div>
      <div className="flex-[1.5] bg-gray-900 rounded-md border-none flex justify-between items-end">
        <Card className="w-128 h-28 bg-gray-950 border-none m-4 rounded-md p-0">
          <CardContent className="w-full h-full p-0 flex">
            <Link href="/dashboard" className="w-1/2 h-full">
              <Button className="bg-gray-950 w-full h-full rounded-none text-2xl hover:border-white hover:border hover:bg-gray-950 cursor-pointer">
                SAIR
              </Button>
            </Link>
            <Button
              onClick={registrarPartidaKata}
              className="bg-gray-950 w-1/2 h-full rounded-none text-2xl hover:border-white hover:border hover:bg-gray-950 cursor-pointer"
            >
              FINALIZAR PARTIDA
            </Button>
          </CardContent>
        </Card>
        <div className="flex gap-20">
          <div className="flex flex-col items-center h-full w-20 py-4">
            <Label className="text-gray-400 text-2xl text-center">PONTUAÇÃO FINAL</Label>
            <Label className="text-white text-9xl font-bold">{media}</Label>
          </div>
          <Timer initialTime={time} />
        </div>
      </div>
    </div>
  );
}
