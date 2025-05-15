import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center bg-gray-950 p-20 space-y-12 gap-2">
      <div className="space-y-6 justify-center">
        <div className='flex justify-center'>  
          <Label className="text-gray-400 text-6xl font-semibold">PAINEL DE CONTROLE</Label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/competidores">
            <Card className="flex justify-center items-center h-48 bg-gray-900 border border-gray-700 hover:border-gray-500 transition">
              <CardContent className="text-4xl md:text-5xl font-bold text-white">COMPETIDORES</CardContent>
            </Card>
          </Link>
          <Link href="/partidas">
            <Card className="flex justify-center items-center h-48 bg-gray-900 border border-gray-700 hover:border-gray-500 transition">
              <CardContent className="text-4xl md:text-5xl font-bold text-white">PARTIDAS REALIZADAS</CardContent>
            </Card>
          </Link>
        </div>
      </div>
      <div className="space-y-6">
        <div className='flex justify-center'>
          <Label className="text-gray-400 text-6xl font-semibold">MODOS DE COMBATE</Label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/placar">
            <Card className="flex justify-center items-center h-48 bg-gray-900 border border-gray-700 hover:border-gray-500 transition">
              <CardContent className="text-4xl md:text-5xl font-bold text-white">PLACAR KARATE</CardContent>
            </Card>
          </Link>
          <Link href="/kata">
            <Card className="flex justify-center items-center h-48 bg-gray-900 border border-gray-700 hover:border-gray-500 transition">
              <CardContent className="text-4xl md:text-5xl font-bold text-white">KATA</CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
