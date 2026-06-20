'use client'

import { useState } from 'react'

export function Footer() {
  const [rating, setRating] = useState(5)

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Blocky divider line */}
      <div className="h-2 bg-cyan-400"></div>

      {/* Main footer content */}
      <div className="px-4 py-16 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Logo/Branding */}
            <div className="flex justify-center md:justify-start">
              <div className="text-white text-4xl font-bold font-jersey" style={{ 
                border: '2px solid white',
                padding: '8px 16px'
              }}>X-PPLG</div>
            </div>

            {/* Created By */}
            <div className="text-center">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-cyan-400 mb-4 font-jersey">Created By</h3>
              <div className="space-y-2">
                <a href="https://github.com/Razerpoa" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-cyan-400 transition-colors cursor-pointer">FATHAN</a>
              </div>
            </div>

            {/* Follow Us */}
            <div className="text-center">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-cyan-400 mb-4 font-jersey">Follow Us</h3>
              <div className="space-y-2">
                <a href="https://www.instagram.com/pplgfamily6" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-cyan-400 transition-colors cursor-pointer">Instagram</a>
              </div>
            </div>
          </div>

          {/* Blocky divider */}
          <div className="h-2 bg-cyan-400 my-8"></div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400">
            <p>© 2026 Kelas X-PPLG | Pengembangan Perangkat Lunak dan Gim</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
      `}</style>
    </footer>
  )
}
