import Image from 'next/image'
import {Schedule} from "../components/schedule";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Schedule />
    </main>
  )
}
