'use client'

import { useState, useEffect } from 'react'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden px-4">
      {/* Animated rising blocks background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated blocks moving up */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: Math.random() * 80 + 40 + 'px',
              height: Math.random() * 80 + 40 + 'px',
              left: Math.random() * 100 + '%',
              bottom: Math.random() * -300 + 'px',
              backgroundColor: [
                'rgb(34, 211, 238)',
                'rgb(236, 72, 153)',
                'rgb(168, 85, 247)',
                'rgb(59, 130, 246)'
              ][i % 4],
              opacity: 0.2,
              animation: `float-up ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: Math.random() * 3 + 's'
            }}
          ></div>
        ))}

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

      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          5% {
            opacity: 0.2;
          }
          95% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}
