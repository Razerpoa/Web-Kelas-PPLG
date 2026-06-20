'use client'

import { useState, useEffect } from 'react'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-black flex items-center justify-center overflow-hidden px-4">
      {/* Animated decorative background blur elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Pixelated decorative elements for gamey vibe */}
      <div className="absolute top-10 right-10 w-8 h-8 bg-cyan-400 opacity-30" style={{ animation: 'bounce 2s infinite' }}></div>
      <div className="absolute bottom-20 right-20 w-6 h-6 bg-pink-400 opacity-30" style={{ animation: 'bounce 2s infinite 0.5s' }}></div>
      <div className="absolute top-1/4 left-10 w-6 h-6 bg-yellow-400 opacity-30" style={{ animation: 'bounce 2s infinite 1s' }}></div>

      <div className={`relative z-10 text-center max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="text-sm md:text-base text-cyan-300 mb-4 tracking-widest uppercase font-jersey text-shadow" style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}>Hi, Visitor</p>
        
        <h1 className="text-8xl md:text-9xl font-bold text-white mb-4 leading-tight drop-shadow-2xl font-jersey animate-in fade-in duration-1000" style={{ 
          textShadow: '0 0 20px rgba(167, 139, 250, 0.8), 0 0 40px rgba(59, 130, 246, 0.6)',
          letterSpacing: '0.05em'
        }}>
          WELCOME
        </h1>
        
        <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 tracking-widest uppercase font-jersey font-bold animate-pulse" style={{ 
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}>
          To X-PPLG
        </p>

        {/* Decorative dividers */}
        <div className="flex justify-center gap-4 mt-12">
          <div className="w-8 h-1 bg-gradient-to-r from-transparent to-cyan-400"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="w-8 h-1 bg-gradient-to-l from-transparent to-cyan-400"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  )
}
