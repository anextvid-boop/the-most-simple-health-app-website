import React from 'react';
import ParticleEngine from './ParticleEngine';
import './index.css';

function App() {
  return (
    <>
      <ParticleEngine />
      {/* Primary Navbar */}
      <nav className="absolute top-0 left-0 w-full p-6 md:p-8 z-50 flex items-center">
        <img src="/assets/logo.svg" alt="Most Simple Health App Logo" className="h-[32px] md:h-[48px]" />
      </nav>

      {/* Main Content Flow */}
      <main className="relative z-10 flex flex-col items-center w-full min-h-screen">
        {/* 3.1.1 The Hero Entrance */}
        <section className="min-h-screen pt-32 pb-48 lg:py-20 flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl px-6 gap-12 lg:gap-24">
          <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left gap-8 z-20">
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-mono font-[800] tracking-[-0.05em] leading-[1.05] text-white uppercase break-words px-2 lg:px-0">
              The World's <br/> Simplest <br/> Health App.
            </h1>
            <div className="hidden lg:block w-full max-w-md pt-8">
              <button className="tactile-button w-full text-xl py-5">
                Download for iOS
              </button>
            </div>
          </div>
          
          <div className="flex-1 flex items-center justify-center z-10 w-full px-4 lg:px-0 mb-10 lg:mb-0">
            {/* Hero Isometric Phone Mockup */}
            <div className="isometric-device relative w-[240px] md:w-[300px] lg:w-[350px] max-w-full aspect-[1/2.16] rounded-[30px] md:rounded-[40px] overflow-hidden border-[6px] md:border-[8px] border-white/10 bg-black shadow-2xl">
               <img src="/assets/scoreboard_view.png" alt="Scoreboard View" className="w-full h-full object-cover" width="400" height="864" loading="eager" />
            </div>
          </div>
        </section>

        {/* Mobile Fixed CTA */}
        <div className="lg:hidden fixed bottom-6 left-0 w-full px-6 z-50">
           <button className="tactile-button w-full text-xl py-5 shadow-[0_15px_30px_-5px_rgba(129,59,175,0.5)]">
             Download for iOS
           </button>
        </div>

        {/* 3.1.2 The 'Intelligence Core' Feature Breakdown */}
        <section className="w-full max-w-7xl px-6 py-16 md:py-32 flex flex-col gap-12 md:gap-16 relative z-20">
          <h2 className="text-center font-mono text-3xl md:text-5xl mb-4 md:mb-8 text-white uppercase">Intelligence Core</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
            {/* Hydration Card */}
            <div className="glass-card p-6 md:p-8 flex flex-col gap-6 items-center text-center">
               <div className="w-full aspect-[4/3] rounded-[16px] md:rounded-[24px] overflow-hidden bg-black/50 border border-white/5">
                 <img src="/assets/hydration_view.png" alt="Hydration UI Screenshot" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" loading="lazy" width="400" height="300" />
               </div>
               <h3 className="text-xl md:text-2xl font-mono text-[var(--tactile-blue)] uppercase">Hydration</h3>
               <p className="text-base md:text-lg opacity-80 font-sans px-2">Track your liquid intake effortlessly with zero friction.</p>
            </div>
            
            {/* Whole Foods Card */}
            <div className="glass-card p-6 md:p-8 flex flex-col gap-6 items-center text-center mt-4 lg:mt-0">
               <div className="w-full aspect-[4/3] rounded-[16px] md:rounded-[24px] overflow-hidden bg-black/50 border border-white/5">
                 <img src="/assets/wholefoods_view.png" alt="Whole Foods UI Screenshot" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" loading="lazy" width="400" height="300" />
               </div>
               <h3 className="text-xl md:text-2xl font-mono text-[var(--tactile-green)] uppercase">Whole Foods</h3>
               <p className="text-base md:text-lg opacity-80 font-sans px-2">Log non-processed food intake and establish raw eating habits.</p>
            </div>

            {/* Sleep Battle Card */}
            <div className="glass-card p-6 md:p-8 flex flex-col gap-6 items-center text-center mt-4 lg:mt-0">
               <div className="w-full aspect-[4/3] rounded-[16px] md:rounded-[24px] overflow-hidden bg-black/50 border border-white/5">
                 <img src="/assets/sleep_view.png" alt="Sleep UI Screenshot" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" loading="lazy" width="400" height="300" />
               </div>
               <h3 className="text-xl md:text-2xl font-mono text-[var(--tactile-purple)] uppercase">Sleep Battle</h3>
               <p className="text-base md:text-lg opacity-80 font-sans px-2">Compete against yourself to achieve the perfect circadian rhythm.</p>
            </div>
          </div>
        </section>

        {/* 3.1.3 The Pricing Paywall Pitch */}
        <section className="w-full max-w-4xl px-4 md:px-6 py-20 md:py-32 flex flex-col items-center text-center gap-8 relative z-20">
           <div className="glass-card w-full p-8 md:p-16 lg:p-20 flex flex-col items-center gap-6 md:gap-8 border-[var(--tactile-green)]/30 max-w-[90vw]">
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-mono text-[var(--tactile-green)] drop-shadow-[0_0_15px_rgba(101,179,117,0.5)] leading-tight break-words px-2 w-full text-center">30 DAYS /<br className="md:hidden" /> FREE TRIAL</h2>
              <p className="text-lg md:text-xl lg:text-2xl font-sans text-white/80 max-w-2xl px-4">
                 One single purchase. No hidden subscriptions. Experience the simplest health app ever created completely free for 30 days.
              </p>
              <button className="tactile-button bg-[var(--tactile-green)] text-black text-lg md:text-xl py-4 px-8 md:px-12 mt-4 hover:bg-white border-b-[8px] md:border-[0px] hover:translate-y-0 active:translate-y-2 active:border-b-0 w-full sm:w-auto">
                 START PROTOCOL
              </button>
           </div>
        </section>

      </main>

      {/* 3.1.4 Global Footer */}
      <footer className="w-full mt-10 md:mt-24 py-12 md:py-16 px-4 md:px-6 glass-card rounded-t-[30px] md:rounded-t-[40px] rounded-b-none border-b-0 flex flex-col items-center gap-8 z-20 relative px-safe bottom-0 pb-28 lg:pb-16">
        <img src="/assets/logo.svg" alt="Most Simple Health App" className="h-10 md:h-12 opacity-50 filter grayscale" />
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 text-xs sm:text-sm font-mono opacity-60 uppercase tracking-wider text-center">
           <a href="mailto:support@mostsimplehealth.com" className="hover:opacity-100 hover:text-white transition-colors py-2 md:py-0">Support</a>
           <a href="/privacy" className="hover:opacity-100 hover:text-white transition-colors py-2 md:py-0">Privacy Policy</a>
           <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" className="hover:opacity-100 hover:text-white transition-colors py-2 md:py-0" target="_blank" rel="noreferrer">EULA</a>
        </div>
        <p className="text-[10px] sm:text-xs font-mono opacity-40 font-mono mt-4 sm:mt-8 text-center px-4">© 2026 Most Simple Health App. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
