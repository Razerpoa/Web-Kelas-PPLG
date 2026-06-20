import { Hero } from '@/components/hero'
import { StudentGrid } from '@/components/student-grid'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <div className="bg-black">
      <Hero />
      <StudentGrid />
      <Footer />
    </div>
  )
}
