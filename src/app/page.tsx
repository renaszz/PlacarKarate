import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid grid-cols-2 w-full h-full bg-gray-950 p-12 justify-center items-center gap-8">
      <Link href="/competidores">
        <Card className="justify-center items-center h-48 w-3xl bg-gray-900 border-1 border-gray-700">
          <CardContent className="text-6xl font-bold text-white">COMPETIDORES</CardContent>
        </Card>
      </Link>
      <Link href="/partidas">
        <Card className="justify-center items-center h-48 w-3xl bg-gray-900 border-1 border-gray-700">
          <CardContent className="text-6xl font-bold text-white">PARTIDAS REALIZADAS</CardContent>
        </Card>
      </Link>
      <Link href="/placar">
        <Card className="justify-center items-center h-48 w-3xl bg-gray-900 border-1 border-gray-700">
          <CardContent className="text-6xl font-bold text-white">PLACAR KARATE</CardContent>
        </Card>
      </Link>
      <Link href="/kata">
        <Card className="justify-center items-center h-48 w-3xl bg-gray-900 border-1 border-gray-700">
          <CardContent className="text-6xl font-bold text-white">KATA</CardContent>
        </Card>
      </Link>
    </div>
  )
}
