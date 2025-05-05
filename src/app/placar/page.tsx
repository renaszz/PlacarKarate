'use client'

import { useState } from "react";
import { Timer } from "@/components/Timer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Controlador } from "@/components/Controlador";
import { Input } from "@/components/ui/input";
import { Vencedor } from "@/components/Vencedor";

export default function Home() {
  const [nome1, setNome1] = useState("");
  const [nome2, setNome2] = useState("");
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState(0);
  const [inputTime, setInputTime] = useState(0);
  const [partidaFinalizada, setPartidaFinalizada] = useState(false);
  const [exibirBotaoVoltar, setExibirBotaoVoltar] = useState(false); // Novo estado para o botão "Voltar"

  const handleStart = () => {
    if (nome1 && nome2 && inputTime > 0) {
      setTime(inputTime * 60);
      setStarted(true);
    }
  };

  const handleFinalizarPartida = () => {
    setPartidaFinalizada(true);
    setExibirBotaoVoltar(true); // Exibe o botão "Voltar" após finalizar a partida
  };

  const handleVoltar = () => {
    setPartidaFinalizada(false);
    setExibirBotaoVoltar(false); // Esconde o botão "Voltar" ao voltar ao estado inicial
  };

  if (!started) {
    return (
      <div className="h-screen w-screen bg-gray-950 flex items-center justify-center">
        <Card className="p-6 bg-gray-900 rounded-lg shadow-md w-[400px] border-none">
          <CardContent className="flex flex-col gap-4">
            <Label className="text-white text-xl">Nome do Competidor 1:</Label>
            <Input
              className="p-2 rounded bg-gray-800 text-white border-1 border-gray-600" 
              value={nome1}
              onChange={(e) => setNome1(e.target.value)}
              placeholder="Digite o nome"
            />
            <Label className="text-white text-xl">Nome do Competidor 2:</Label>
            <Input
              className="p-2 rounded bg-gray-800 text-white border-1 border-gray-600"
              value={nome2}
              onChange={(e) => setNome2(e.target.value)}
              placeholder="Digite o nome"
            />
            <Label className="text-white text-xl">Tempo (em minutos):</Label>
            <Input
              className="p-2 rounded bg-gray-800 text-white border-1 border-gray-600"
              type="number"
              value={inputTime}
              onChange={(e) => setInputTime(Number(e.target.value))}
              min="1"
              max="60"
            />
            <Button
              onClick={handleStart}
              className="mt-4 bg-gray-950 border-1 border-gray-800 text-white text-xl cursor-pointer"
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
      {!partidaFinalizada ? (
        <>
          <Controlador nome={nome1} cor="red" />
          <Controlador nome={nome2} cor="blue" />
        </>
      ) : (
        <>
          <Vencedor nome={nome1} cor="red" />
          <Vencedor nome={nome2} cor="blue" />
        </>
      )}

      <div className="flex-[1.5] bg-gray-900 rounded-md border-none flex justify-between items-end">
        <Card className="w-120 h-28 bg-gray-950 border-none m-4 rounded-md p-0">
          <CardContent className="grid grid-rows-2 w-full h-full p-0">
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
