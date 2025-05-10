'use client'

import { useState, useEffect } from "react";
import { Timer } from "@/components/Timer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Controlador } from "@/components/Controlador";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";

interface Competidor {
  id: string;
  nome: string;
}

export default function Home() {
  const [competidores, setCompetidores] = useState<Competidor[]>([]);
  const [idCompetidor1, setIdCompetidor1] = useState("");
  const [idCompetidor2, setIdCompetidor2] = useState("");
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState(0);
  const [inputTime, setInputTime] = useState(0);
  const [partidaFinalizada, setPartidaFinalizada] = useState(false);
  const [exibirBotaoVoltar, setExibirBotaoVoltar] = useState(false);

  useEffect(() => {
    async function fetchCompetidores() {
      const res = await fetch('/api/competidores');
      const data = await res.json();
      setCompetidores(data);
    }

    fetchCompetidores();
    
  }, []);

  const handleStart = () => {
    if (idCompetidor1 && idCompetidor2 && inputTime > 0) {
      setTime(inputTime * 60);
      setStarted(true);
    }
  };

  const handleFinalizarPartida = () => {
    setPartidaFinalizada(true);
    setExibirBotaoVoltar(true);
  };

  const handleVoltar = () => {
    setPartidaFinalizada(false);
    setExibirBotaoVoltar(false);
  };

  const nome1 = competidores.find(c => c.id === idCompetidor1)?.nome || "Competidor 1";
  const nome2 = competidores.find(c => c.id === idCompetidor2)?.nome || "Competidor 2";

  if (!started) {
    return (
      <div className="h-screen w-screen bg-gray-950 flex items-center justify-center">
        <Card className="p-6 bg-gray-900 rounded-lg shadow-md w-[400px] border-1 border-gray-700">
          <Link href="/">
                <ChevronLeft color="#fff" className="cursor-pointer fill"/>
          </Link>
          <CardContent className="flex flex-col gap-4">
            <Label className="text-white text-xl">Competidor 1:</Label>
            <select
              className="p-2 rounded bg-gray-800 text-white border border-gray-600"
              value={idCompetidor1}
              onChange={(e) => setIdCompetidor1(e.target.value)}
            >
              <option value="">Selecione o competidor</option>
              {competidores.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.nome}
                </option>
              ))}
            </select>

            <Label className="text-white text-xl">Competidor 2:</Label>
            <select
              className="p-2 rounded bg-gray-800 text-white border border-gray-600"
              value={idCompetidor2}
              onChange={(e) => setIdCompetidor2(e.target.value)}
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
              className="p-2 rounded bg-gray-800 text-white border border-gray-600"
              type="number"
              value={inputTime}
              onChange={(e) => setInputTime(Number(e.target.value))}
              min="1"
              max="60"
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
    <div className="flex flex-col h-screen bg-gray-950 gap-2 p-2">
      <>
        <Controlador
          nome={nome1}
          cor="red"
          competidorId={idCompetidor1}
          oponenteId={idCompetidor2}
          finalizado={partidaFinalizada}
        />
        <Controlador
          nome={nome2}
          cor="blue"
          competidorId={idCompetidor2}
          oponenteId={idCompetidor1}
          finalizado={partidaFinalizada}
        />
      </>


      <div className="flex-[1.5] bg-gray-900 rounded-md border-none flex justify-between items-end">
        <Card className="w-120 h-28 bg-gray-950 border-none m-4 rounded-md p-0">
          <CardContent className="grid grid-cols-2 grid-rows-1 w-full h-full p-0">
            <Link href="/">
              <Button className="bg-gray-950 w-full h-full rounded-none text-2xl hover:border-white hover:border hover:bg-gray-950 cursor-pointer">
                SAIR
              </Button>
            </Link>
            {exibirBotaoVoltar ? (
              <Button
                onClick={handleVoltar}
                className="bg-gray-950 w-full h-full rounded-none text-2xl hover:border-white hover:border hover:bg-gray-950 cursor-pointer"
              >
                VOLTAR
              </Button>
            ) : (
              <Button
                onClick={handleFinalizarPartida}
                className="bg-gray-950 w-full h-full rounded-none text-2xl hover:border-white hover:border hover:bg-gray-950 cursor-pointer"
              >
                FINALIZAR PARTIDA
              </Button>
            )}
          </CardContent>
        </Card>
        <Timer initialTime={time} />
      </div>
    </div>
  );
}