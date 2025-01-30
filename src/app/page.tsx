import Calendar from '@/components/calendar'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="flex h-dvh justify-center sm:items-center">
      <Calendar />
      <Footer />
    </main>
  )
}
