'use client'

import { useState } from 'react'

export function Footer() {
  const [rating, setRating] = useState(5)

  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-slate-900 to-black text-white">
      {/* Divider line */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

      {/* Main footer content */}
      <div className="px-4 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Logo/Branding */}
            <div className="flex justify-center md:justify-start">
              <div className="text-purple-300 text-4xl font-bold">X-PPLG</div>
            </div>

            {/* Created By */}
            <div className="text-center">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-white mb-4">Created By</h3>
              <div className="space-y-2">
                <p className="text-gray-400 hover:text-purple-300 transition-colors cursor-pointer">EKIZR</p>
                <p className="text-gray-400 hover:text-purple-300 transition-colors cursor-pointer">DAFYALL</p>
              </div>
            </div>

            {/* Follow Us */}
            <div className="text-center">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-white mb-4">Follow Us</h3>
              <div className="space-y-2">
                <p className="text-gray-400 hover:text-purple-300 transition-colors cursor-pointer">Instagram</p>
                <p className="text-gray-400 hover:text-purple-300 transition-colors cursor-pointer">Youtube</p>
              </div>
            </div>

            {/* Rate Us */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-2xl">😊</span>
                <span className="text-sm font-semibold tracking-widest uppercase text-white">Rate Us</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="flex-1 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                <div className="w-5 h-5 bg-white rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform" 
                     onClick={() => setRating(5)}></div>
              </div>
              <p className="text-sm text-gray-400 mt-2">{rating}.0</p>
            </div>
          </div>

          {/* Bottom divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 my-8"></div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500">
            <p>© 2025 Kelas X-PPLG | Program Keahlian Perangkat Lunak dan Perangkat Multimedia</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
