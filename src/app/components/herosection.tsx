import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image dengan Overlay Gelap */}
      <div className="absolute inset-0 z-0">
        {/* Pastikan Anda punya gambar yang agak gelap/mistis di folder public */}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <p className="text-red-500 font-mono text-lg mb-4 tracking-[0.5em] animate-pulse">
          WELCOME TO THE UPSIDE DOWN
        </p>
        
        <h1 className="text-6xl md:text-9xl font-extrabold text-transparent st-title mb-8">
          STRANGERS THINGS<br/>
          <span className="text-4xl md:text-7xl text-red-600" style={{ textShadow: 'none', WebkitTextStroke: '0px' }}>THINGS</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 font-mono border-l-2 border-red-600 pl-4 text-left">
        Siap menjelajah dimensi baru?
        </p>

        <div className="mt-10">
          <button className="px-8 py-3 border-2 border-red-600 text-red-600 font-bold uppercase tracking-widest hover:bg-red-600 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.5)]">
            Mulai Petualangan
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;