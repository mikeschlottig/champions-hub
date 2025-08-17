
import React from 'react';

export default function Champions() {
  const openSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.classList.add('opacity-100');
  };
  
  const closeSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    overlay.classList.remove('opacity-100');
  };

  React.useEffect(() => {
    // Animate counters
    function animateCount(element, target) {
      let current = 0;
      const increment = Math.ceil(target / 60);
      const duration = 2000;
      const stepTime = duration / (target / increment);
      function step() {
        current += increment;
        if (current > target) current = target;
        element.textContent = current;
        if (current < target) {
          requestAnimationFrame(step);
        }
      }
      step();
    }

    function runOnceOnVisible(el, callback) {
      let fired = false;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !fired) {
            fired = true;
            callback();
            observer.disconnect();
          }
        });
      }, {threshold: 0.5});
      observer.observe(el);
    }

    const champEl = document.getElementById('count-champions');
    const freeEl = document.getElementById('count-free');

    if (champEl && freeEl) {
      runOnceOnVisible(champEl.parentElement.parentElement, () => {
        animateCount(champEl, 163);
        animateCount(freeEl, 12);
      });
    }

    // Setup sidebar overlay click handler
    const overlay = document.getElementById('sidebar-overlay');
    if (overlay) {
      overlay.addEventListener('click', closeSidebar);
    }

    return () => {
      if (overlay) {
        overlay.removeEventListener('click', closeSidebar);
      }
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
        }
        
        @keyframes float-glow {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
        }
        
        @keyframes float-delayed-glow {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-15px) translateX(-10px); opacity: 0.7; }
        }
        
        @keyframes float-slow-glow {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
          50% { transform: translateY(-25px) translateX(5px); opacity: 0.6; }
        }
        
        @keyframes drift {
          0% { transform: translateX(0px); }
          100% { transform: translateX(20px); }
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(30px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(30px) rotate(-360deg); }
        }
        
        @keyframes breathing {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.1); }
        }
        
        @keyframes breathing-delayed {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes stagger-in {
          0% { opacity: 0; transform: translateY(30px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.2); }
          50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.2); }
        }
        
        @keyframes pulse-stagger {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.8); }
        }
        
        @keyframes shimmer-bar {
          0% { background-position: -200px 0; }
          100% { background-position: 200px 0; }
        }
        
        @keyframes bounce-soft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-float-glow { animation: float-glow 4s ease-in-out infinite; }
        .animate-float-delayed-glow { animation: float-delayed-glow 5s ease-in-out infinite; }
        .animate-float-slow-glow { animation: float-slow-glow 6s ease-in-out infinite; }
        .animate-drift { animation: drift 8s ease-in-out infinite alternate; }
        .animate-orbit { animation: orbit 15s linear infinite; }
        .animate-breathing { animation: breathing 4s ease-in-out infinite; }
        .animate-breathing-delayed { animation: breathing-delayed 4s ease-in-out infinite 2s; }
        .animate-rotate-slow { animation: rotate-slow 20s linear infinite; }
        .animate-slideInLeft { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slideInDown { animation: slideInDown 0.8s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.8s ease-out forwards; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-stagger-in { animation: stagger-in 0.6s ease-out forwards; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-pulse-stagger { animation: pulse-stagger 1.5s ease-in-out infinite; }
        .animate-shimmer-bar { animation: shimmer-bar 2s ease-in-out infinite; }
        .animate-bounce-soft { animation: bounce-soft 2s ease-in-out infinite; }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
        }
        
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        
        .scrollbar-thumb-white-20::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        
        .scrollbar-track-transparent::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .hover-scrollbar-thumb-white-40:hover::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.4);
        }
        
        ::-webkit-scrollbar {
          width: 6px;
        }
      `}</style>

      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Background */}
        <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" 
             style={{backgroundImage: "url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cce953ba-bb14-489b-b395-4f22267673e1_3840w.jpg')"}}>
        </div>
        
        {/* Immersive Background */}
        <div className="fixed inset-0">
          {/* Dynamic gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950"></div>
          <div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d0c8cab-aafd-4759-951d-82f748461c75_3840w.jpg)] bg-cover"></div>
          
          {/* Floating particles with enhanced animations */}
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400/40 rounded-full animate-float-glow blur-sm"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/50 rounded-full animate-float-delayed-glow blur-sm"></div>
          <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-pink-400/30 rounded-full animate-float-slow-glow blur-sm"></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-cyan-400/40 rounded-full animate-drift blur-sm"></div>
          <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-indigo-400/30 rounded-full animate-orbit blur-sm"></div>
          
          {/* Ambient orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-blue-500/15 to-transparent rounded-full blur-3xl animate-breathing"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl animate-breathing-delayed"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-radial from-pink-500/10 to-transparent rounded-full blur-3xl animate-rotate-slow"></div>
        </div>

        {/* visionOS Left Navigation Dock */}
        <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 opacity-0 animate-slideInLeft" 
             style={{animationDelay: '400ms'}}>
          <div className="flex flex-col gap-3 hover:shadow-3xl transition-all duration-500 hover:scale-105 bg-white/10 border-white/20 border rounded-3xl pt-6 pr-4 pb-6 pl-4 shadow-2xl backdrop-blur-3xl items-center justify-center">
            <button className="p-4 rounded-2xl hover:bg-white/20 transition-all duration-300 group relative overflow-hidden hover:scale-110">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300">
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
            </button>
            <button className="p-4 rounded-2xl bg-white/15 transition-all duration-300 group relative overflow-hidden border border-white/30 hover:scale-110 animate-pulse-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 relative z-10 text-white group-hover:rotate-180 transition-transform duration-500">
                <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                <rect width="7" height="7" x="3" y="14" rx="1"></rect>
              </svg>
            </button>
            <button className="p-4 rounded-2xl hover:bg-white/20 transition-all duration-300 group relative overflow-hidden hover:scale-110">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 relative z-10 group-hover:scale-125 transition-transform duration-300">
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
              </svg>
            </button>
            <button className="p-4 rounded-2xl hover:bg-white/20 transition-all duration-300 group relative overflow-hidden hover:scale-110">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="m22 21-3-3m-8-4 3-3"></path>
                <circle cx="16" cy="11" r="3"></circle>
              </svg>
            </button>
            <div className="w-8 h-px bg-white/20 my-2"></div>
            <button className="p-2 rounded-xl hover:bg-white/20 transition-all duration-300 group hover:scale-110">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8c334c60-c1c2-4306-8861-5b115655eb00_320w.jpg" className="w-10 h-10 rounded-xl object-cover border border-white/30 group-hover:rotate-6 transition-transform duration-300" alt="Profile" />
            </button>
          </div>
        </div>

        {/* Main Container */}
        <div className="relative z-10 h-screen flex opacity-0 animate-scaleIn ml-32" style={{animationDelay: '200ms'}}>
          {/* Floating Sidebar Panel */}
          <div id="sidebar" className="fixed lg:absolute left-4 top-4 bottom-4 w-80 transform -translate-x-full lg:translate-x-0 transition-all duration-500 lg:block z-40">
            <div className="h-full bg-white/8 backdrop-blur-3xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden opacity-0 animate-slideInLeft hover:border-white/30 transition-all duration-500" 
                 style={{animationDelay: '600ms'}}>
              {/* Header */}
              <div className="p-8 border-b border-white/10">
                <div className="flex items-center gap-4 mb-6 group">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-semibold text-xl">RL</span>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-2xl blur opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <h1 className="font-semibold text-lg tracking-tight text-white group-hover:text-blue-200 transition-colors duration-300">RIOT GAMES</h1>
                    <p className="text-sm text-white/60 -mt-0.5">Champions</p>
                  </div>
                </div>

                {/* Search */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 group-hover:border-white/40 transition-all duration-300">
                    <div className="flex items-center px-4 py-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white/50 mr-3 group-hover:text-white/70 group-hover:scale-110 transition-all duration-300">
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                      </svg>
                      <input type="text" placeholder="Search champions..." className="flex-1 bg-transparent text-white placeholder-white/50 text-sm focus:outline-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 group cursor-pointer">
                    <div className="text-2xl font-semibold text-white mb-1 group-hover:scale-110 transition-transform duration-300" id="count-champions">163</div>
                    <div className="text-xs text-white/60">Champions</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/10 backdrop-blur-xl rounded-2xl p-4 border border-green-400/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105 group cursor-pointer">
                    <div className="text-2xl font-semibold text-green-300 mb-1 group-hover:scale-110 transition-transform duration-300" id="count-free">12</div>
                    <div className="text-xs text-white/60">Free</div>
                  </div>
                </div>

                {/* Filters */}
                <div className="space-y-6">
                  {/* Difficulty */}
                  <div className="group">
                    <div className="flex mb-4 items-center justify-between">
                      <span className="font-medium text-white/90 text-sm group-hover:text-white transition-colors duration-300">Difficulty</span>
                      <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-lg group-hover:bg-white/20 transition-colors duration-300">7/10</span>
                    </div>
                    <div className="relative">
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-xl">
                        <div className="h-full w-[70%] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full relative animate-shimmer-bar">
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-purple-400 shadow-lg hover:scale-125 transition-transform duration-300 cursor-pointer"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Position Filter */}
                  <div>
                    <h3 className="font-medium text-white/90 text-sm mb-4">Position</h3>
                    <div className="space-y-2">
                      {[
                        { name: 'All Positions', count: 163, active: true },
                        { name: 'Top Lane', count: 45 },
                        { name: 'Jungle', count: 38 },
                        { name: 'Bot Lane', count: 42 },
                        { name: 'Support', count: 28 }
                      ].map((position, index) => (
                        <label key={position.name} className="flex items-center p-3 rounded-2xl hover:bg-white/5 transition-all duration-300 cursor-pointer group hover:scale-105">
                          <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                            position.active 
                              ? 'border-blue-400 bg-blue-400/20' 
                              : 'border-white/30 group-hover:border-white/60'
                          }`}>
                            {position.active && (
                              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-glow"></div>
                            )}
                          </div>
                          <span className={`text-sm flex-1 transition-colors duration-300 ${
                            position.active 
                              ? 'text-white/80 group-hover:text-white' 
                              : 'text-white/60 group-hover:text-white/80'
                          }`}>{position.name}</span>
                          <span className="text-xs text-white/40 group-hover:text-white/60 transition-colors duration-300">{position.count}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Overlay */}
          <div id="sidebar-overlay" className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden opacity-0 pointer-events-none transition-opacity duration-300"></div>

          {/* Main Content Area */}
          <div className="flex-1 lg:ml-96 flex flex-col h-screen">
            {/* Floating Header */}
            <div className="m-4 mb-0 shrink-0">
              <div className="bg-white/8 backdrop-blur-3xl rounded-3xl border border-white/20 shadow-2xl p-6 opacity-0 animate-slideInDown hover:border-white/30 transition-all duration-500" 
                   style={{animationDelay: '800ms'}}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button className="lg:hidden p-3 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-110" onClick={openSidebar}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 hover:rotate-180 transition-transform duration-500">
                        <path d="M4 12h16"></path>
                        <path d="M4 18h16"></path>
                        <path d="M4 6h16"></path>
                      </svg>
                    </button>
                    <div className="group">
                      <h1 className="text-2xl font-semibold tracking-tight text-white group-hover:text-blue-200 transition-colors duration-300">Champions</h1>
                      <p className="text-sm text-white/60 -mt-1 group-hover:text-white/80 transition-colors duration-300">Discover your next main</p>
                    </div>
                  </div>
                  <div className="flex-1 pr-6 pl-6">
                    <div className="relative group max-w-md mx-auto">
                      <div className="absolute inset-0 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors duration-300 pointer-events-none"></div>
                      <input type="text" placeholder="Search champions..." className="w-full placeholder-white/50 focus:outline-none text-sm font-medium text-white bg-transparent border-neutral-50/10 border rounded-2xl pt-2 pr-4 pb-2 pl-10" />
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white/70 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none drop-shadow-[0_0_2px_rgba(255,255,255,0.4)] transition-colors duration-300">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-3 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/30 hover:scale-110 group">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300">
                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                        <path d="M3 9h18"></path>
                        <path d="M3 15h18"></path>
                        <path d="M9 3v18"></path>
                        <path d="M15 3v18"></path>
                      </svg>
                    </button>
                    <button className="p-3 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/30 hover:scale-110 group">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:scale-125 transition-transform duration-300">
                        <path d="M3 12h.01"></path>
                        <path d="M3 18h.01"></path>
                        <path d="M3 6h.01"></path>
                        <path d="M8 12h13"></path>
                        <path d="M8 18h13"></path>
                        <path d="M8 6h13"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Champions Grid */}
            <div className="flex-1 m-4 mt-4 mb-8 min-h-0">
              <div className="bg-white/8 backdrop-blur-3xl rounded-3xl border border-white/20 shadow-2xl h-full overflow-hidden opacity-0 animate-fadeInUp hover:border-white/30 transition-all duration-500" 
                   style={{animationDelay: '1000ms'}}>
                <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-white-20 scrollbar-track-transparent hover-scrollbar-thumb-white-40 pt-8 pr-8 pb-8 pl-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 mb-8">
                    {/* Champion Cards - Row 1 */}
                    {[
                      { name: 'Ahri', title: 'The Nine-Tailed Fox', difficulty: 3, position: 'Mid', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg', color: 'purple' },
                      { name: 'Yasuo', title: 'The Unforgiven', difficulty: 5, position: 'Mid', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg', color: 'red', free: true },
                      { name: 'Jinx', title: 'The Loose Cannon', difficulty: 2, position: 'ADC', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg', color: 'yellow' },
                      { name: 'Thresh', title: 'The Chain Warden', difficulty: 4, position: 'Support', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg', color: 'cyan', free: true },
                      { name: 'Lee Sin', title: 'The Blind Monk', difficulty: 5, position: 'Jungle', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg', color: 'orange' },
                      { name: 'Lux', title: 'The Lady of Luminosity', difficulty: 2, position: 'Mid', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg', color: 'yellow', free: true },
                      { name: 'Darius', title: 'The Hand of Noxus', difficulty: 2, position: 'Top', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg', color: 'red' },
                      { name: 'Ezreal', title: 'The Prodigal Explorer', difficulty: 3, position: 'ADC', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg', color: 'blue', free: true },
                    ].map((champion, index) => (
                      <div key={`${champion.name}-1-${index}`} className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-stagger-in" 
                           style={{animationDelay: `${1200 + index * 100}ms`}}>
                        <div className="bg-white/10 backdrop-blur-3xl rounded-3xl border border-white/20 overflow-hidden shadow-xl hover:shadow-2xl hover:border-white/40 transition-all duration-500 hover:bg-white/15">
                          <div className="aspect-square relative overflow-hidden">
                            <img src={champion.image} alt={champion.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            {champion.free && (
                              <div className="absolute top-3 left-3 px-3 py-1 bg-green-500/80 backdrop-blur-xl rounded-full text-xs text-white font-medium border border-green-400/30 animate-bounce-soft">FREE</div>
                            )}
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <h3 className={`font-semibold text-white mb-1 group-hover:text-${champion.color}-200 transition-colors duration-300`}>{champion.name}</h3>
                              <p className="text-xs text-white/70 mb-3 group-hover:text-white/90 transition-colors duration-300">{champion.title}</p>
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-1">
                                  {Array.from({length: 5}).map((_, i) => (
                                    <div key={i} className={`w-1.5 h-1.5 rounded-full animate-pulse-stagger ${
                                      i < champion.difficulty ? `bg-${champion.color}-400` : 'bg-white/20'
                                    }`} style={{animationDelay: `${i * 0.1}s`}}></div>
                                  ))}
                                </div>
                                <span className="text-xs text-white/60 bg-white/20 backdrop-blur-xl px-2 py-1 rounded-lg group-hover:bg-white/30 transition-colors duration-300">{champion.position}</span>
                              </div>
                              <button className="w-full bg-transparent text-white text-sm font-medium py-2.5 px-4 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-xl">
                                Play Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 mb-8">
                    {/* Champion Cards - Row 2 */}
                    {[
                      { name: 'Ahri', title: 'The Nine-Tailed Fox', difficulty: 3, position: 'Mid', image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/585253c8-a642-4441-8b48-a7129af38e4a_800w.jpg', color: 'purple' },
                      { name: 'Yasuo', title: 'The Unforgiven', difficulty: 5, position: 'Mid', image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4d58d888-b70d-4447-bffb-e8a323df8d16_800w.jpg', color: 'red', free: true },
                      { name: 'Jinx', title: 'The Loose Cannon', difficulty: 2, position: 'ADC', image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8aa4c77b-ff68-4e40-a3e1-517139da29de_800w.jpg', color: 'yellow' },
                      { name: 'Thresh', title: 'The Chain Warden', difficulty: 4, position: 'Support', image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd6496a9-fd9e-428e-b2b3-1b35908d9d25_800w.jpg', color: 'cyan', free: true },
                      { name: 'Lee Sin', title: 'The Blind Monk', difficulty: 5, position: 'Jungle', image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/85cb6a1c-4a80-40ce-93f6-2973adb241d4_800w.jpg', color: 'orange' },
                      { name: 'Lux', title: 'The Lady of Luminosity', difficulty: 2, position: 'Mid', image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/071f0f74-e190-4f94-93fb-223ca6938511_800w.jpg', color: 'yellow', free: true },
                      { name: 'Darius', title: 'The Hand of Noxus', difficulty: 2, position: 'Top', image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05e3e53f-e4cc-4941-8fa1-f22b5b9379f1_800w.jpg', color: 'red' },
                      { name: 'Ezreal', title: 'The Prodigal Explorer', difficulty: 3, position: 'ADC', image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/256db67a-9160-4421-b6ad-10cd2d386754_800w.jpg', color: 'blue', free: true },
                    ].map((champion, index) => (
                      <div key={`${champion.name}-2-${index}`} className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-stagger-in"
                           style={{animationDelay: `${1200 + index * 100}ms`}}>
                        <div className="bg-white/10 backdrop-blur-3xl rounded-3xl border border-white/20 overflow-hidden shadow-xl hover:shadow-2xl hover:border-white/40 transition-all duration-500 hover:bg-white/15">
                          <div className="aspect-square relative overflow-hidden">
                            <img src={champion.image} alt={champion.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            {champion.free && (
                              <div className="absolute top-3 left-3 px-3 py-1 bg-green-500/80 backdrop-blur-xl rounded-full text-xs text-white font-medium border border-green-400/30 animate-bounce-soft">FREE</div>
                            )}
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <h3 className={`font-semibold text-white mb-1 group-hover:text-${champion.color}-200 transition-colors duration-300`}>{champion.name}</h3>
                              <p className="text-xs text-white/70 mb-3 group-hover:text-white/90 transition-colors duration-300">{champion.title}</p>
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-1">
                                  {Array.from({length: 5}).map((_, i) => (
                                    <div key={i} className={`w-1.5 h-1.5 rounded-full animate-pulse-stagger ${
                                      i < champion.difficulty ? `bg-${champion.color}-400` : 'bg-white/20'
                                    }`} style={{animationDelay: `${i * 0.1}s`}}></div>
                                  ))}
                                </div>
                                <span className="text-xs text-white/60 bg-white/20 backdrop-blur-xl px-2 py-1 rounded-lg group-hover:bg-white/30 transition-colors duration-300">{champion.position}</span>
                              </div>
                              <button className="w-full bg-transparent text-white text-sm font-medium py-2.5 px-4 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-xl">
                                Play Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex mt-8 justify-center">
                    <button className="hover:from-blue-400 hover:to-purple-500 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-white/40 text-sm font-medium text-white tracking-tight bg-gradient-to-r from-blue-500 to-purple-600 border-white/20 border rounded-2xl pt-2.5 pr-4 pb-2.5 pl-4 backdrop-blur-xl w-full max-w-xs">
                      Load More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
