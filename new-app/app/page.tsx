'use client'
import { useEffect, useState } from "react";

export default function Home() {
    const words = ["Hair Products", "HairP", "HP"];
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[index];
        let speed = isDeleting ? 60 : 120;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.substring(0, text.length + 1));
                if (text === currentWord) {
                    setIsDeleting(true);
                    speed = 1000;
                }
            } else {
                setText(currentWord.substring(0, text.length - 1));
                if (text === "") {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, speed);
        return () => clearTimeout(timeout);
    }, [text, isDeleting, index]);

  return (
      <div className="min-h-screen bg-white font-sans text-slate-900">
          <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
              <div className="text-2xl font-bold tracking-tight flex items-center gap-2">
                  <span className="text-amber-900">✦</span>
                  <span>{text}</span>
                  <span className="animate-pulse">|</span>
              </div>
              <a href="/auth/signup" className="bg-amber-900 text-white px-5 py-2 rounded-full font-semibold hover:bg-slate-800 transition">
                  Sign In
              </a>
          </nav>
          <section className="flex flex-col items-center text-center px-6 pt-20 pb-32 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                  Make Order of any Hair Products of your choice.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
                  Get any Hair Products of your choice, to grow your hair, make your hair texture soft, to make it easy to comb, to moisturize your hair.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <a href="/auth/signup" className="bg-amber-900 text-white text-lg px-10 py-4 rounded-xl font-bold shadow-xl shadow-blue-200 transition-all transform hover:-translate-y-1">
                      Register for Free
                  </a>
              </div>
          </section>
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
              <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
                  <div className="w-full md:w-1/2 text-center md:text-left">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                          Healthy Hair Starts Here
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-6">
                          Discover premium hair products designed to nourish, strengthen, and
                          enhance your natural beauty. Whether you're looking to moisturize,
                          soften, or promote growth, we’ve got everything you need.
                      </p>
                      <a
                          href="/auth/signup"
                          className="inline-block bg-amber-900 text-white text-sm sm:text-base px-5 sm:px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition"
                      >
                          Shop Now
                      </a>
                  </div>
                  <div className="w-full md:w-1/2">
                      <img
                          src="https://pyxis.nymag.com/v1/imgs/0ee/050/dd1d8804c80c00b88c3c6fae56d04f5d76-going-natural.2x.rsocial.w600.jpg"
                          alt="Hair care"
                          className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-lg"
                      />
                  </div>
              </div>
          </section>
          <footer className="bg-slate-900 text-white mt-20">
              <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
                  <div>
                      <h3 className="text-2xl font-bold mb-4">HairP</h3>
                      <p className="text-slate-400 leading-relaxed">
                          Your go-to destination for premium hair care products that nourish,
                          strengthen, and enhance your natural beauty.
                      </p>
                  </div>
                  <div>
                      <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                      <ul className="space-y-2 text-slate-400">
                          <li><a href="#" className="hover:text-white transition">Home</a></li>
                          <li><a href="auth/login" className="hover:text-white transition">Products</a></li>
                          <li><a href="#" className="hover:text-white transition">About</a></li>
                          <li><a href="#" className="hover:text-white transition">Contact</a></li>
                      </ul>
                  </div>
                  <div>
                      <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
                      <p className="text-slate-400 mb-4">
                          Subscribe to get updates on new products and offers.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                          <input
                              type="email"
                              placeholder="Enter your email"
                              className="px-4 py-2 rounded-lg text-slate-900 w-full focus:outline-none"
                          />
                          <button className="bg-amber-900 px-5 py-2 rounded-lg font-semibold hover:bg-amber-800 transition">
                              Subscribe
                          </button>
                      </div>
                  </div>
              </div>
              <div className="border-t border-slate-800 text-center text-slate-500 py-6 text-sm">
                  © {new Date().getFullYear()} HairP. All rights reserved.
              </div>
          </footer>
      </div>
  );
}
