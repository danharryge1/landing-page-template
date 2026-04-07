export const HeroSection = () => {
  return (
    <section className="min-h-screen w-full bg-[#0a0a0a] flex flex-col items-center justify-center px-6 py-24 text-center">
      <div className="max-w-4xl flex flex-col items-center space-y-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
          Your product is good.<br className="hidden sm:block" /> Your landing page is killing it.
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl">
          Copy, design, and build — done in 7 days for £997
        </p>
        
        <button className="mt-6 px-8 py-3 rounded-full border border-white text-white font-medium hover:bg-white/10 transition-colors duration-200">
          See how it works
        </button>
      </div>
    </section>
  );
};
