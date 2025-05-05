import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full bg-gray-950 p-12 justify-center items-center gap-8">
      <Link href="/placar">
        <Card className="justify-center items-center h-48 w-3xl bg-gray-900 border-none">
          <CardContent className="text-6xl font-bold text-white">Placar Karate</CardContent>
        </Card>
      </Link>
      <Link href="/kata">
        <Card className="justify-center items-center h-48 w-3xl bg-gray-900 border-none">
          <CardContent className="text-6xl font-bold text-white">Kata</CardContent>
        </Card>
      </Link>
    </div>
  )
}
