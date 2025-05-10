// app/login/page.tsx

"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = async () => {
  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, password }),
    })

    const data = await res.json()

    if (!res.ok) {
      alert(data.error || "Erro ao fazer login")
      return
    }

    router.push("/dashboard")
    toast.success(`Login bem-sucedido! Bem-vindo, ${data.user.username}`)
  } catch (error) {
    console.error("Erro no login:", error)
  }
}

  return (
    <div className="h-screen w-screen bg-gray-950 flex items-center justify-center">
      <Card className="p-6 bg-gray-900 rounded-lg shadow-md w-[400px] border border-gray-700">
        <CardContent className="flex flex-col gap-4">
          <h2 className="text-white text-2xl font-semibold text-center mb-2">Login</h2>

          <Label className="text-white text-xl" htmlFor="username">
            Usuário
          </Label>
          <Input
            id="username"
            className="p-2 rounded bg-gray-800 text-white border border-gray-600"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu usuário"
          />

          <Label className="text-white text-xl" htmlFor="password">
            Senha
          </Label>
          <Input
            id="password"
            className="p-2 rounded bg-gray-800 text-white border border-gray-600"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />

          <Button
            size={"lg"}
            onClick={handleLogin}
            className="mt-4 bg-gray-950 border border-gray-800 text-white text-xl cursor-pointer"
          >
            Avançar
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
