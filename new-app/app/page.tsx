
export default function Home() {
  return (
      <div className="min-h-screen bg-white font-sans text-slate-900">
          <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
              <div className="text-2xl font-bold text-black tracking-tight">Send Mail</div>
              <a href="/signup" className="bg-amber-900 text-white px-5 py-2 rounded-full font-semibold hover:bg-slate-800 transition">
                  Sign In
              </a>
          </nav>
          <section className="flex flex-col items-center text-center px-6 pt-20 pb-32 max-w-4xl mx-auto">


              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                  Send emails that actually get opened.
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
                  The all-in-one email platform to grow your business. Build your list, automate your sales, and hit $500k in revenue faster.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <a href="/signup" className="bg-amber-900 text-white text-lg px-10 py-4 rounded-xl font-bold shadow-xl shadow-blue-200 transition-all transform hover:-translate-y-1">
                      Register for Free
                  </a>
              </div>
          </section>
      </div>
  );
}
