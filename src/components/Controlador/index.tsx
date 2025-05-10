import { useState } from "react";
import { Label } from "../ui/label";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Props {
  nome: string;
  cor: "red" | "blue";
  finalizado: boolean;
  competidorId: string;
  oponenteId: string;
}

export function Controlador({
  nome,
  cor,
  finalizado,
  competidorId,
  oponenteId,
}: Props) {
  const [ippon, setIppon] = useState(0);
  const [waza, setWaza] = useState(0);
  const [chui, setChui] = useState(0);
  const [genten, setGenten] = useState(0);
  const router = useRouter();

  const bgMain = cor === "red" ? "bg-red-600" : "bg-blue-700";
  const bgTop = cor === "red" ? "bg-red-400" : "bg-blue-500";

  async function registrarResultado(tipoResultado: string) {
    await fetch("/api/partida/confronto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        vencedorId: competidorId,
        perdedorId: oponenteId,
        resultado: tipoResultado,
      }),
    });
    toast.success(`Resultado registrado: ${tipoResultado}`);
    setTimeout(() => router.push("/"), 1500);
  }

  return (
    <div className="flex-[2] bg-gray-900 rounded-md border-none flex justify-between">
      <div className="flex items-start flex-col justify-between">
        <Label className="font-semibold text-white text-6xl p-4">{nome}</Label>

        {!finalizado ? (
          <Card className="w-180 h-40 bg-gray-950 border-none m-4 rounded-md p-0">
            <CardContent className="grid grid-cols-4 grid-rows-2 w-full h-full p-0">
              <Button onClick={() => setIppon(ippon + 1)} className="bg-gray-950 w-full h-full rounded-none text-2xl hover:border-white hover:border cursor-pointer">+ IPPON</Button>
              <Button onClick={() => setWaza(waza + 1)} className="bg-gray-950 w-full h-full rounded-none text-2xl hover:border-white hover:border cursor-pointer">+ WAZA-ARI</Button>
              <Button onClick={() => setChui(chui + 1)} className="bg-gray-950 w-full h-full rounded-none text-2xl hover:border-white hover:border cursor-pointer">+ CHUI</Button>
              <Button onClick={() => setGenten(genten + 1)} className="bg-gray-950 w-full h-full rounded-none text-2xl hover:border-white hover:border cursor-pointer">+ GENTEN</Button>
              <Button onClick={() => setIppon(Math.max(ippon - 1, 0))} className="bg-gray-950 w-full h-full rounded-none text-2xl hover:border-white hover:border cursor-pointer">- IPPON</Button>
              <Button onClick={() => setWaza(Math.max(waza - 1, 0))} className="bg-gray-950 w-full h-full rounded-none text-2xl hover:border-white hover:border cursor-pointer">- WAZA-ARI</Button>
              <Button onClick={() => setChui(Math.max(chui - 1, 0))} className="bg-gray-950 w-full h-full rounded-none text-2xl hover:border-white hover:border cursor-pointer">- CHUI</Button>
              <Button onClick={() => setGenten(Math.max(genten - 1, 0))} className="bg-gray-950 w-full h-full rounded-none text-2xl hover:border-white hover:border cursor-pointer">- GENTEN</Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="w-240 h-50 bg-gray-950 border-none m-4 rounded-md p-0">
            <CardHeader className="bg-white font-bold border-none rounded-t-md p-0 items-center justify-center text-3xl">
              VENCEU POR:
            </CardHeader>
            <CardContent className="grid grid-cols-4 grid-rows-2 w-full h-full p-0">
              <Button onClick={() => registrarResultado("PONTOS")} className="bg-gray-950 w-full h-full rounded-none text-2xl hover:border-white hover:border cursor-pointer">PONTOS</Button>
              <Button onClick={() => registrarResultado("FULL IPPON")} className="bg-gray-950 w-full h-full rounded-none text-2xl hover:border-white hover:border cursor-pointer">FULL IPPON</Button>
              <Button onClick={() => registrarResultado("NO SHOW")} className="bg-gray-950 w-full h-full rounded-none text-2xl hover:border-white hover:border cursor-pointer">NO SHOW</Button>
              <Button onClick={() => registrarResultado("DESQUALIFICAÇÃO")} className="bg-gray-950 w-full h-full rounded-none text-2xl hover:border-white hover:border cursor-pointer">DESQUALIFICAÇÃO</Button>
              <Button onClick={() => registrarResultado("WO LUTA")} className="bg-gray-950 w-full h-full rounded-none text-2xl hover:border-white hover:border cursor-pointer">WO LUTA</Button>
              <Button onClick={() => registrarResultado("WO EVENTO")} className="bg-gray-950 w-full h-full rounded-none text-2xl hover:border-white hover:border cursor-pointer">WO EVENTO</Button>
              <Button onClick={() => registrarResultado("DECISÃO")} className="bg-gray-950 w-full h-full rounded-none text-2xl hover:border-white hover:border cursor-pointer">DECISÃO</Button>
              <div></div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Placar lateral */}
      <div className="flex">
        <div className="flex flex-col justify-between items-center h-full w-20 py-4 mr-4">
          <div className="flex flex-col items-center">
            <Label className="text-gray-400 text-xl">CHUI</Label>
            <Label className="text-gray-400 font-bold text-8xl">{chui}</Label>
          </div>
          <div className="flex flex-col items-center">
            <Label className="text-gray-400 text-xl">GENTEN</Label>
            <Label className="text-gray-400 font-bold text-8xl">{genten}</Label>
          </div>
        </div>
        <div className="flex flex-col">
          <div className={`flex w-70 h-1/4 ${bgTop} rounded-tr-md justify-center items-center`}>
            <Label className="text-white font-semibold text-7xl mb-2">{waza}</Label>
          </div>
          <div className={`flex w-70 h-3/4 ${bgMain} rounded-br-md justify-center items-center`}>
            <Label className="text-white font-bold text-[12rem] mb-8 leading-none">{ippon}</Label>
          </div>
        </div>
      </div>
    </div>
  );
}
