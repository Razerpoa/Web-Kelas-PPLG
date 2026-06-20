import { Hero } from '@/components/hero'
import { StudentGrid } from '@/components/student-grid'

export default function Page() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <Hero />
      <StudentGrid />
    </main>
  )
}
