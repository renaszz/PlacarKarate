'use client'

import { useEffect, useState } from "react";
import { Label } from "../ui/label";
import {
  SkipBack,
  Rewind,
  Play,
  SkipForward,
  FastForward,
  Pause
} from "lucide-react";

interface TimerProps {
  initialTime: number;
}

export const Timer = ({ initialTime }: TimerProps) => {
  const [timer, setTimer] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!isRunning || timer <= 0) return;

    const intervalo = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(intervalo);
          setIsRunning(false);
          return 0; // Para o cronômetro quando chega a 0
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalo);
  }, [isRunning, timer]);

  const formatarTempo = (tempo: number) => {
    const minutos = Math.floor(tempo / 60).toString().padStart(2, "0");
    const segundos = (tempo % 60).toString().padStart(2, "0");
    return `${minutos}:${segundos}`;
  };

  const handlePlayPause = () => {
    setHasStarted(true);
    setIsRunning((prev) => !prev);
  };

  const handleRewind = () => {
    setTimer((prev) => Math.max(prev - 30, 0));
  };

  const handleSkipBack = () => {
    setTimer((prev) => Math.max(prev - 1, 0));
  };

  const handleSkipForward = () => {
    setTimer((prev) => prev + 1);
  };

  const handleFastForward = () => {
    setTimer((prev) => prev + 30);
  };

  const getTimerColor = () => {
    if (timer === 0) return "text-gray-500";
    if (!hasStarted) return "text-gray-500";
    if (isRunning) return "text-white";
    return "text-yellow-400";
  };

  return (
    <div className="flex flex-col justify-center w-96 h-52 rounded-t-2xl bg-gray-950 border-none rounded-b-none mx-2 my-2">
      <div className="flex justify-center items-center flex-1">
        <Label className={`font-semibold text-9xl ${getTimerColor()} min-w-[90px]`}>
          {formatarTempo(timer)}
        </Label>
      </div>
      <div className="h-1/4 bg-black w-full flex items-center justify-between px-4">
        <Rewind className="text-white fill-white cursor-pointer" onClick={handleRewind} />
        <SkipBack className="text-white fill-white cursor-pointer" onClick={handleSkipBack} />
        {isRunning ? (
          <Pause className="text-white fill-white cursor-pointer" onClick={handlePlayPause} />
        ) : (
          <Play className="text-white fill-white cursor-pointer" onClick={handlePlayPause} />
        )}
        <SkipForward className="text-white fill-white cursor-pointer" onClick={handleSkipForward} />
        <FastForward className="text-white fill-white cursor-pointer" onClick={handleFastForward} />
      </div>
    </div>
  );
};
