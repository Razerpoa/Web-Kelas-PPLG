'use client'

import Image from 'next/image'
import { Student } from '@/lib/students-data'

export function StudentCard({ student }: { student: Student }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-700">
        <Image
          src={student.imageUrl}
          alt={student.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
          {student.name}
        </h3>

        {/* Capabilities */}
        <div className="flex flex-wrap gap-2">
          {student.capabilities.map((capability, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
            >
              {capability}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
