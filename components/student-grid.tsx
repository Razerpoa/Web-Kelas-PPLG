'use client'

import { students } from '@/lib/students-data'
import { StudentCard } from './student-card'

export function StudentGrid() {
  return (
    <section className="px-4 py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Meet Our Students
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
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
