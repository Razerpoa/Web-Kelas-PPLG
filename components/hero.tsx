export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-black flex items-center justify-center overflow-hidden px-4">
      {/* Decorative background blur elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        <p className="text-sm md:text-base text-purple-300 mb-6 tracking-wide uppercase">Hi, Visitor</p>
        <h1 className="text-7xl md:text-8xl font-bold text-white mb-2 leading-tight drop-shadow-lg">WELCOME</h1>
        <p className="text-lg md:text-xl text-gray-300 tracking-widest uppercase">To X-PPLG</p>
      </div>
    </section>
  )
}
