'use client'

import { useState, useEffect } from 'react'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden px-4">
      {/* Blocky geometric background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large blocks */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600 opacity-10"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-pink-500 opacity-5"></div>
        
        {/* Pixelated grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.1) 25%, rgba(255, 255, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.1) 75%, rgba(255, 255, 255, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.1) 25%, rgba(255, 255, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.1) 75%, rgba(255, 255, 255, 0.1) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Blocky pixel decorative elements */}
      <div className="absolute top-12 right-12 flex gap-2 pointer-events-none">
        <div className="w-6 h-6 bg-cyan-400"></div>
        <div className="w-6 h-6 bg-pink-400"></div>
        <div className="w-6 h-6 bg-cyan-400"></div>
      </div>
      <div className="absolute bottom-12 left-12 flex gap-2 pointer-events-none">
        <div className="w-6 h-6 bg-purple-400"></div>
        <div className="w-6 h-6 bg-cyan-400"></div>
        <div className="w-6 h-6 bg-purple-400"></div>
        <div className="w-6 h-6 bg-cyan-400"></div>
      </div>

      <div className={`relative z-10 text-center max-w-4xl transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <p className="text-sm md:text-base text-cyan-400 mb-6 tracking-widest uppercase font-jersey" style={{ letterSpacing: '0.1em' }}>Hi, Visitor</p>
        
        <h1 className="text-8xl md:text-9xl font-bold text-white mb-4 leading-tight font-jersey" style={{ 
          letterSpacing: '0.08em',
          border: '3px solid white',
          padding: '20px 40px',
          boxShadow: '8px 8px 0px rgba(34, 211, 238, 0.5), 16px 16px 0px rgba(236, 72, 153, 0.3)'
        }}>
          WELCOME
        </h1>
        
        <p className="text-2xl md:text-3xl text-cyan-400 tracking-widest uppercase font-jersey font-bold mt-8" style={{ letterSpacing: '0.08em' }}>
          To X-PPLG
        </p>

        {/* Blocky decorative line dividers */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-4 h-4 bg-cyan-400"></div>
          <div className="w-4 h-4 bg-white"></div>
          <div className="w-4 h-4 bg-pink-400"></div>
          <div className="w-4 h-4 bg-white"></div>
          <div className="w-4 h-4 bg-cyan-400"></div>
        </div>
      </div>
    </section>
  )
}
