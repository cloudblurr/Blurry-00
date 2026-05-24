import { useState, useEffect } from 'react';
import { 
  Cloud, Terminal, Globe, Server, Check, Copy, Network, Shield, Cpu, 
  ArrowUp, Activity, Moon, Sun, Command, HelpCircle, HardDrive, RefreshCw, ExternalLink,
  Menu, X, ChevronDown, Search, ArrowRight, Brain, Sparkles, Zap, Wand, Boxes, Upload
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});
  const [activeRegion, setActiveRegion] = useState('SF');
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuSearch, setMenuSearch] = useState('');
  
  // Real-time stat simulator variables
  const [stats, setStats] = useState({
    globalLoad: 41.2,
    activeBuilders: 31250,
    edgeNodes: 142,
    runningPipelines: 489,
    latencyMs: 1.4,
  });

  useEffect(() => {
    const handleStatTicks = setInterval(() => {
      setStats((prev) => ({
        globalLoad: +(prev.globalLoad + (Math.random() * 0.8 - 0.4)).toFixed(1),
        activeBuilders: prev.activeBuilders + Math.floor(Math.random() * 5 - 2),
        edgeNodes: prev.edgeNodes,
        runningPipelines: prev.runningPipelines + Math.floor(Math.random() * 3 - 1),
        latencyMs: +(prev.latencyMs + (Math.random() * 0.04 - 0.02)).toFixed(2),
      }));
    }, 4000);
    return () => clearInterval(handleStatTicks);
  }, []);

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const handleScrollToHub = () => {
    const element = document.getElementById('products-hub-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const directLinks = [
    { name: 'Blnq Upload', domain: 'blnq.click', desc: 'Secure asset distribution', icon: Upload, color: 'from-violet-500 to-indigo-500', glow: 'rgba(139, 92, 246, 0.15)' },
    { name: 'AceAgent', domain: 'ace.blurr.cloud', desc: 'Intelligent AI runners', icon: Brain, color: 'from-pink-500 to-rose-500', glow: 'rgba(236, 72, 153, 0.15)' },
    { name: 'Blnq Harvest', domain: 'hvy.blnq.click', desc: 'Heavy page scraper', icon: Terminal, color: 'from-cyan-400 to-blue-500', glow: 'rgba(6, 182, 212, 0.15)' },
    { name: 'Starlock Storage', domain: 'starlock.space', desc: 'Sovereign encrypted vaults', icon: Shield, color: 'from-emerald-500 to-teal-500', glow: 'rgba(16, 185, 129, 0.15)' },
  ];

  return (
    <div id="blurr-landing-root" className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col selection:bg-violet-500/30 selection:text-white relative">
      
      {/* Visual Ambient Grid / Haze Backdrops */}
      <div className="absolute top-0 left-0 right-0 h-[480px] bg-gradient-to-b from-violet-950/15 via-transparent to-transparent pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/5 blur-[140px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-700/5 blur-[120px] pointer-events-none -z-10" />

      {/* Modern Header / Navigation Bar */}
      <nav id="navbar" className="sticky top-0 z-40 w-full bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-900/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          
          {/* Logo brand */}
          <div id="navbar-brand" className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 to-blue-500/30 blur-sm" />
              <Cloud className="w-4 h-4 text-zinc-200 relative z-10" />
            </div>
            <div>
              <span className="font-display font-bold text-lg text-white">
                Blurr<span className="text-violet-400">.cloud</span>
              </span>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute animate-ping inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span className="text-[8px] font-mono tracking-widest text-[#10b981] uppercase select-none font-bold">
                  SOVEREIGN HUB ONLINE
                </span>
              </div>
            </div>
          </div>

          {/* Dynamic Stylish Navigation Gateway Button & Overlay Menu */}
          <div className="flex items-center gap-3">
            
            {/* The Stylish Portal Trigger Button */}
            <button
              id="nav-gateway-trigger"
              onClick={() => {
                setMenuOpen(!menuOpen);
                setMenuSearch('');
              }}
              className={`relative flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs font-mono border transition-all duration-300 cursor-pointer ${
                menuOpen 
                  ? 'bg-violet-950/40 border-violet-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.15)]' 
                  : 'bg-zinc-900/70 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-900'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${menuOpen ? 'animate-ping bg-violet-400' : 'bg-emerald-400'}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${menuOpen ? 'bg-violet-500' : 'bg-emerald-500'}`}></span>
              </span>
              <span>NETWORK PORTALS</span>
              <ChevronDown className={`w-3.5 h-3.5 text-zinc-500 transition-transform duration-300 ${menuOpen ? 'rotate-180 text-violet-400' : ''}`} />
            </button>

            {/* Quick Actions Portal Link (Desktop only) */}
            <button
              id="header-btn-hub-jump"
              onClick={handleScrollToHub}
              className="hidden sm:inline-flex px-4 py-2 bg-zinc-900 border border-zinc-800 hover:border-violet-500/30 rounded-xl text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer shadow-sm"
            >
              Enter Hub Portal
            </button>
          </div>

          {/* Modern Interactive Expandable Menu Dropdown Panel */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                id="megamenu-dropdown-overlay"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute top-full right-4 sm:right-8 mt-3 w-[calc(100vw-2rem)] sm:w-96 bg-zinc-950/95 backdrop-blur-xl border border-zinc-900 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden z-50 p-4"
              >
                {/* Search Bar inside menu */}
                <div className="relative mb-3.5">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-3.5 w-3.5 text-zinc-500" />
                  </span>
                  <input
                    type="text"
                    value={menuSearch}
                    onChange={(e) => setMenuSearch(e.target.value)}
                    placeholder="Search cloud nodes / links..."
                    className="w-full text-xs font-mono bg-zinc-900/65 border border-zinc-800 focus:border-violet-500/50 rounded-xl py-2 pl-9 pr-4 text-zinc-200 placeholder-zinc-500 outline-none transition-all"
                  />
                  {menuSearch && (
                    <button 
                      onClick={() => setMenuSearch('')}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-[10px] font-mono text-zinc-500 hover:text-zinc-300"
                    >
                      CLEAR
                    </button>
                  )}
                </div>

                {/* Grid Links */}
                <span className="text-[10px] font-mono text-zinc-550 block uppercase px-1 mb-2 tracking-wide">// Active Cloud Gateways</span>
                <div className="space-y-1.5 max-h-[280px] overflow-y-auto pr-1">
                  {directLinks
                    .filter(link => 
                      link.name.toLowerCase().includes(menuSearch.toLowerCase()) || 
                      link.domain.toLowerCase().includes(menuSearch.toLowerCase()) ||
                      link.desc.toLowerCase().includes(menuSearch.toLowerCase())
                    )
                    .map((link) => {
                      const isCopied = copiedStates[link.domain];
                      return (
                        <div
                          key={link.domain}
                          className="group relative flex flex-col justify-between p-3 rounded-xl bg-zinc-900/40 hover:bg-violet-950/10 border border-zinc-900 hover:border-violet-500/20 transition-all duration-200"
                        >
                          <div className="flex items-start justify-between gap-1">
                            <div>
                              <span className="font-display font-medium text-xs text-zinc-100 group-hover:text-violet-300 transition-colors flex items-center gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-violet-500 animate-pulse" />
                                {link.name}
                              </span>
                              <p className="text-[11px] text-zinc-400 font-sans font-light mt-0.5 leading-snug">{link.desc}</p>
                            </div>

                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={() => handleCopyText(`https://${link.domain}`, link.domain)}
                                className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
                                title="Copy portal URL"
                              >
                                {isCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                              </button>
                              
                              <a
                                href={`https://${link.domain}`}
                                target="_blank"
                                referrerPolicy="no-referrer"
                                className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-500 hover:text-zinc-300 transition-colors"
                                title="Open in new tab"
                              >
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          </div>

                          <div className="flex justify-between items-center text-[9px] font-mono mt-2 pt-2 border-t border-zinc-900/60 text-zinc-500">
                            <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors">{link.domain}</span>
                            <span className="text-[#10b981]">// ONLINE</span>
                          </div>
                        </div>
                      );
                    })}
                  {directLinks.filter(link => 
                    link.name.toLowerCase().includes(menuSearch.toLowerCase()) || 
                    link.domain.toLowerCase().includes(menuSearch.toLowerCase()) ||
                    link.desc.toLowerCase().includes(menuSearch.toLowerCase())
                  ).length === 0 && (
                    <div className="p-6 text-center text-[11px] font-mono text-zinc-500">
                      NO ACTIVE GATEWAYS FOUND
                    </div>
                  )}
                </div>

                {/* Footer section inside dropdown */}
                <div className="mt-4 pt-3 border-t border-zinc-900/80 flex items-center justify-between text-[10px] font-mono text-zinc-500 bg-zinc-950/40">
                  <span>SECURE GATEWAY ENVELOPE</span>
                  <button 
                    onClick={() => {
                      setMenuOpen(false);
                      handleScrollToHub();
                    }}
                    className="flex items-center gap-1 text-violet-400 hover:text-violet-300 cursor-pointer"
                  >
                    <span>View Showcase</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </nav>

      {/* Main Container */}
      <main className="flex-grow pt-10 sm:pt-16 pb-20">
        
        {/* Concise and visually outstanding Hero Block detailing Blurr's mission */}
        <section id="hero-statement-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center md:text-left relative">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Mission Copy block detailing user's tagline + text */}
            <div className="md:col-span-7 space-y-6">
              
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-950/80 border border-zinc-800 backdrop-blur-sm text-[10px] font-mono tracking-wider text-violet-400 uppercase">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>Elevated Cloud Creativity</span>
              </div>

              {/* Tagline constraint strictly implemented: "a next-generation digital civilization layer for creators, developers, and modern internet users." */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight text-white leading-[1.15]">
                Blurr is <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-300 to-blue-400 font-bold">a next-generation digital civilization layer</span> for creators, developers, and modern internet users.
              </h1>

              {/* Company detail block strictly implemented */}
              <p className="text-zinc-400 text-xs sm:text-sm font-sans font-light leading-relaxed max-w-2xl">
                Blurr Cloud is a company focused on elevated cloud creativity and versatile digital experiences — leveraging modern platforms, infrastructure, and intelligent tools to empower creators, developers, and individuals at the highest level.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  id="btn-discover-now"
                  onClick={handleScrollToHub}
                  className="px-5 py-2.5 bg-gradient-to-r from-violet-600 to-blue-600 hover:opacity-90 text-white rounded-xl font-mono text-xs transition-all tracking-wide cursor-pointer flex items-center gap-2 shadow-lg"
                >
                  <span>Explore Cloud Hub Portals</span>
                  <Command className="w-3.5 h-3.5" />
                </button>
                
                <span className="text-[10px] font-mono text-zinc-500">// ALL STACKS DEPLOYED ON SSL PORTS</span>
              </div>
            </div>

            {/* Visual interactive edge telemetry block */}
            <div className="md:col-span-5 bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-850 p-6 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none">
                <HardDrive className="w-48 h-48 text-white" />
              </div>

              <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                <div className="flex items-center gap-2">
                  <Network className="w-4 h-4 text-violet-400" />
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Edge Synapse Status</span>
                </div>
                <div className="flex bg-zinc-900 p-0.5 rounded-lg border border-zinc-800 text-[9px] font-mono">
                  {['SF', 'Paris', 'Tokyo'].map((reg) => (
                    <button
                      key={reg}
                      onClick={() => setActiveRegion(reg)}
                      className={`px-2 py-0.5 rounded transition-all ${activeRegion === reg ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                    >
                      {reg}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 block uppercase">Transit Load</span>
                    <span className="text-base font-mono font-bold text-white mt-0.5">{stats.globalLoad.toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 block uppercase">Running Tasks</span>
                    <span className="text-base font-mono font-bold text-white mt-0.5">{stats.runningPipelines} ops/s</span>
                  </div>
                </div>

                <div className="p-3 bg-zinc-950/80 rounded-xl border border-zinc-900 space-y-1">
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="text-zinc-500">Gateway latency ({activeRegion}-Edge-01)</span>
                    <span className="text-emerald-400 font-semibold">{stats.latencyMs.toFixed(2)}ms</span>
                  </div>
                  <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden mt-1.5">
                    <div className="bg-emerald-500 h-full transition-all duration-300" style={{ width: `${Math.min(100, 30 + stats.latencyMs * 25)}%` }} />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <Shield className="w-3.5 h-3.5 text-zinc-600" />
                  <span className="text-[9px] font-mono text-zinc-500">Security level formally validated (ECDSA-384 keys)</span>
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* SkyWalker AI — blurr.cloud's High-End AI Agent Backbone */}
        <section id="products-hub-section" className="scroll-mt-24 border-t border-zinc-900/60 pt-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-violet-950/5 to-cyan-950/10 pointer-events-none" />

            <div className="relative bg-gradient-to-br from-zinc-950 via-violet-950/20 to-zinc-950 border border-violet-500/20 rounded-3xl p-8 sm:p-12 overflow-hidden">
              {/* Ambient glow orbs */}
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-violet-600/15 blur-[120px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-cyan-600/10 blur-[120px] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-violet-500/8 blur-[150px] pointer-events-none" />

              <div className="relative z-10">
                {/* Header badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 backdrop-blur-sm text-[10px] font-mono tracking-widest text-violet-300 uppercase mb-8">
                  <Brain className="w-4 h-4 text-violet-400" />
                  <span>AI Agent Backbone</span>
                  <span className="text-violet-500">•</span>
                  <span className="text-emerald-400">Sovereign</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Copy Column */}
                  <div className="lg:col-span-7 space-y-7">
                    <div>
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight text-white leading-[1.1]">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-purple-200 to-cyan-300 font-bold">
                          SkyWalker AI
                        </span>
                      </h2>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="h-px flex-1 bg-gradient-to-r from-violet-500/50 to-transparent" />
                        <span className="text-[11px] font-mono tracking-widest text-violet-400/80 uppercase">The Creative Agent Backbone</span>
                      </div>
                    </div>

                    <p className="text-zinc-300 text-sm sm:text-base font-sans font-light leading-relaxed max-w-xl">
                      SkyWalker is a <span className="text-white font-medium">one-of-a-kind AI</span> — blurr.cloud's high-end, powerful, and creative agent backbone. 
                      It doesn't just respond; it <span className="text-violet-300 font-medium">builds entire worlds</span>. At its core, SkyWalker generates{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-semibold">StateMind Environments</span>
                      {' '}— fully customizable digital workspaces, IDEs, and runtime instances that are portable across devices, 
                      engineered for ultra-low compute, and infinitely configurable to any creative workflow.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                      <div className="flex flex-col items-start gap-3 p-5 rounded-2xl bg-gradient-to-b from-violet-500/5 to-transparent border border-violet-500/15 hover:border-violet-500/30 transition-all group/card">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-500/15 shrink-0 ring-1 ring-violet-500/20 group-hover/card:ring-violet-500/40 transition-all">
                          <Boxes className="w-5 h-5 text-violet-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-display font-semibold text-white mb-1">StateMind Environments</h4>
                          <p className="text-[12px] text-zinc-400 leading-relaxed">Portable workspaces and IDEs that persist anywhere — take your instance across devices without losing state.</p>
                        </div>
                      </div>

                      <div className="flex flex-col items-start gap-3 p-5 rounded-2xl bg-gradient-to-b from-cyan-500/5 to-transparent border border-cyan-500/15 hover:border-cyan-500/30 transition-all group/card">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/15 shrink-0 ring-1 ring-cyan-500/20 group-hover/card:ring-cyan-500/40 transition-all">
                          <Zap className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-display font-semibold text-white mb-1">Low-Compute, High-Power</h4>
                          <p className="text-[12px] text-zinc-400 leading-relaxed">Maximum creative throughput on minimal hardware — run advanced AI workloads anywhere, anytime.</p>
                        </div>
                      </div>

                      <div className="flex flex-col items-start gap-3 p-5 rounded-2xl bg-gradient-to-b from-purple-500/5 to-transparent border border-purple-500/15 hover:border-purple-500/30 transition-all group/card">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-500/15 shrink-0 ring-1 ring-purple-500/20 group-hover/card:ring-purple-500/40 transition-all">
                          <Wand className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-display font-semibold text-white mb-1">One-of-a-Kind AI</h4>
                          <p className="text-[12px] text-zinc-400 leading-relaxed">No two StateMind instances are alike — SkyWalker adapts, learns, and sculpts environments to your creative fingerprint.</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-4 pt-1">
                      <button className="px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white rounded-xl font-mono text-xs transition-all tracking-wide cursor-pointer flex items-center gap-2 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50">
                        <span>Explore SkyWalker</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <span className="text-[10px] font-mono text-violet-400/60">// SOVEREIGN AI BACKBONE ACTIVE</span>
                    </div>
                  </div>

                  {/* Visual / Telemetry Column */}
                  <div className="lg:col-span-5">
                    <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-violet-500/20 p-6 rounded-2xl space-y-5 shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
                        <Brain className="w-40 h-40 text-white" />
                      </div>

                      <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
                        <Sparkles className="w-4 h-4 text-violet-400" />
                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">SkyWalker Core Telemetry</span>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <span className="text-[9px] font-mono text-zinc-500 block uppercase">Active Agents</span>
                            <span className="text-base font-mono font-bold text-white mt-0.5">{(stats.activeBuilders * 0.87).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                          </div>
                          <div>
                            <span className="text-[9px] font-mono text-zinc-500 block uppercase">StateMind Instances</span>
                            <span className="text-base font-mono font-bold text-white mt-0.5">{(stats.runningPipelines * 1.42).toFixed(0)}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <span className="text-[9px] font-mono text-zinc-500 block uppercase">Avg Response</span>
                            <span className="text-base font-mono font-bold text-emerald-400 mt-0.5">{(stats.latencyMs * 0.65).toFixed(2)}ms</span>
                          </div>
                          <div>
                            <span className="text-[9px] font-mono text-zinc-500 block uppercase">Environment Types</span>
                            <span className="text-base font-mono font-bold text-cyan-400 mt-0.5">27+</span>
                          </div>
                        </div>

                        <div className="p-3 bg-zinc-950/80 rounded-xl border border-zinc-800 space-y-1">
                          <div className="flex justify-between items-center text-[10px] font-mono">
                            <span className="text-zinc-500">Backbone Uptime SLA</span>
                            <span className="text-emerald-400 font-semibold">99.999%</span>
                          </div>
                          <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden mt-1.5">
                            <div className="bg-gradient-to-r from-violet-500 to-emerald-500 h-full transition-all duration-300 w-[99.999%]" />
                          </div>
                        </div>

                        <div className="flex items-center gap-2 pt-1">
                          <RefreshCw className="w-3.5 h-3.5 text-zinc-600 animate-spin-slow" />
                          <span className="text-[9px] font-mono text-zinc-500">StateMind orchestration engine v3.2 live</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations / Product Cards */}
        <section id="solutions-access-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
          <div className="border-b border-zinc-900 pb-3 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-zinc-400 tracking-wider uppercase">Blurr Integrations & Products</span>
            </div>
            <span className="text-[9px] font-mono text-zinc-600">4 active services</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {directLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.domain}
                  id={`card-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={`https://${link.domain}`}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="group relative bg-zinc-950/80 hover:bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-5 transition-all flex flex-col gap-4 overflow-hidden"
                >
                  {/* Ambient glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" style={{ background: `radial-gradient(400px circle at 50% 0%, ${link.glow}, transparent 70%)` }} />
                  
                  {/* Icon placeholder */}
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 shrink-0 transition-all group-hover:scale-105">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
                    <Icon className="w-6 h-6 text-zinc-500 group-hover:text-zinc-200 relative z-10 transition-colors" />
                  </div>
                  
                  <div className="relative flex-1">
                    <h5 className="font-display font-medium text-sm text-white group-hover:text-violet-300 transition-colors flex items-center justify-between">
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 text-zinc-700 group-hover:text-violet-400 transition-colors shrink-0 ml-1" />
                    </h5>
                    <p className="text-[11px] text-zinc-500 font-light mt-1.5 leading-snug">{link.desc}</p>
                  </div>

                  <div className="relative flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-3 border-t border-zinc-900 group-hover:border-zinc-800 transition-colors">
                    <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors truncate mr-2">{link.domain}</span>
                    <span className="text-emerald-600 shrink-0">ONLINE</span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

      </main>

      {/* Persistent Footer */}
      <footer id="footer" className="bg-[#09090b] border-t border-zinc-900/90 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-2.5">
              <div className="relative flex items-center justify-center w-7 h-7 rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-blue-500/20 blur-sm" />
                <Cloud className="w-3.5 h-3.5 text-zinc-300 relative z-10" />
              </div>
              <span className="font-display font-bold text-sm text-white">
                Blurr<span className="text-violet-400">.cloud</span>
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-[11px] font-mono text-zinc-500">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-zinc-200 cursor-pointer">
                Back to Summit
              </button>
              <span>// UPTIME: 99.999% SLA ENVELOPE</span>
              <span>EST. 2026</span>
            </div>

          </div>

          <div className="border-t border-zinc-900/80 mt-8 pt-8 text-center sm:text-left text-[11px] text-zinc-655 font-mono text-zinc-600 leading-relaxed">
            &copy; {new Date().getFullYear()} Blurr.cloud. Focused on elevated cloud creativity and versatile digital experiences. Powered by custom extreme-performance micro-pipelines.
          </div>
        </div>
      </footer>

    </div>
  );
}
