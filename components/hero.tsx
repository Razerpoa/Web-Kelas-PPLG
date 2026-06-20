export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-4 py-20 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
            <span className="mr-2">🎓</span>
            10th Grade Software & Games
          </div>
          
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
            X-PPLG Classroom
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Meet the talented students of X-PPLG. Each member brings unique skills and perspectives to the classroom, collaborating on software development and game design projects.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">8</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Students</p>
            </div>
            <div className="h-12 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">∞</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Possibilities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
