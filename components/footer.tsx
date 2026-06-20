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
                <p className="text-white hover:text-cyan-400 transition-colors cursor-pointer">EKIZR</p>
                <p className="text-white hover:text-cyan-400 transition-colors cursor-pointer">DAFYALL</p>
              </div>
            </div>

            {/* Follow Us */}
            <div className="text-center">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-cyan-400 mb-4 font-jersey">Follow Us</h3>
              <div className="space-y-2">
                <p className="text-white hover:text-cyan-400 transition-colors cursor-pointer">Instagram</p>
                <p className="text-white hover:text-cyan-400 transition-colors cursor-pointer">Youtube</p>
              </div>
            </div>

            {/* Rate Us */}
            <div className="text-center">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-cyan-400 mb-4 font-jersey">Rate Us</h3>
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div
                    key={star}
                    className={`w-5 h-5 cursor-pointer transition-colors ${star <= rating ? 'bg-cyan-400' : 'bg-gray-600'}`}
                    onClick={() => setRating(star)}
                  ></div>
                ))}
              </div>
              <p className="text-sm text-cyan-400 mt-2 font-jersey">{rating}.0</p>
            </div>
          </div>

          {/* Blocky divider */}
          <div className="h-2 bg-cyan-400 my-8"></div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400">
            <p>© 2025 Kelas X-PPLG | Program Keahlian Perangkat Lunak dan Perangkat Multimedia</p>
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
