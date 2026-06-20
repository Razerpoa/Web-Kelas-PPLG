'use client'

import { students } from '@/lib/students-data'
import { StudentCard } from './student-card'

export function StudentGrid() {
  return (
    <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-900">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our Students
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each student brings a unique blend of technical skills and creative talents to the X-PPLG program.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </div>
    </section>
  )
}
