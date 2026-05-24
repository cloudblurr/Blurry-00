import { useState, useEffect, DragEvent } from 'react';
import { 
  Upload, Sparkles, Database, Send, Terminal, Shield, ArrowUp, ArrowRight,
  ExternalLink, Copy, Check, CheckCircle, RefreshCw, Cpu, Download, HardDrive,
  Globe, Search, ChevronRight, Play, FileText, Lock, Eye, Code, Zap
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  tagline: string;
  domain: string;
  badge: string;
  status: 'operational' | 'expanding' | 'beta';
  color: string;
  glow: string;
  description: string;
  features: string[];
}

export default function ProductsHub() {
  const [activeProductId, setActiveProductId] = useState<string>('blnq-upload');
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  // Product registry definition
  const products: Product[] = [
    {
      id: 'blnq-upload',
      name: 'Blnq Upload',
      tagline: 'Instant micro-latent file distribution and assets sharing',
      domain: 'blnq.click',
      badge: 'SPEED CORE',
      status: 'operational',
      color: 'from-violet-500 to-indigo-500',
      glow: 'rgba(139, 92, 246, 0.15)',
      description: 'A high-speed assets portal designed for content delivery. Perfect for deploying web graphics, video shorts, and heavy developer archives in milliseconds with zero compression loss.',
      features: [
        'Secure tokenized file expirations',
        'Direct static edge distribution nodes',
        'One-click download experience'
      ]
    },
    {
      id: 'ace-agent',
      name: 'AceAgent',
      tagline: 'Autonomous AI agents and intelligent developer workflows',
      domain: 'ace.blurr.cloud',
      badge: 'INTELLIGENCE',
      status: 'beta',
      color: 'from-pink-500 to-rose-500',
      glow: 'rgba(236, 72, 153, 0.15)',
      description: 'Intelligent cognitive workers capable of autonomously analyzing code, executing continuous integration loops, managing staging instances, and executing heavy data extraction tasks.',
      features: [
        'Multi-LLM redundant routing',
        'Self-directed command shells in sandboxes',
        'Direct API web search grounding'
      ]
    },
    {
      id: 'blnq-harvest',
      name: 'Blnq Harvest',
      tagline: 'Distributed high-yield data extraction and media processing',
      domain: 'hvy.blnq.click',
      badge: 'HEAVY SCALE',
      status: 'operational',
      color: 'from-cyan-400 to-blue-500',
      glow: 'rgba(6, 182, 212, 0.15)',
      description: 'A heavy scraper and batch downloader designed for high-concurrency ingestion. Transform unstructured website parameters into cleanly formatted, actionable AI datasets instantly.',
      features: [
        'Render-heavy dynamic web scrapers',
        'Automatic optical cleanups & markdown formatting',
        'High compliance with strict rate limits'
      ]
    },
    {
      id: 'starlock-storage',
      name: 'Starlock Storage',
      tagline: 'Cryptographically secured decentralized file vaulting',
      domain: 'starlock.space',
      badge: 'SOVEREIGNTY',
      status: 'expanding',
      color: 'from-emerald-400 to-teal-500',
      glow: 'rgba(16, 185, 129, 0.15)',
      description: 'Ultra-secure, client-encrypted chunked storage networks. Files are split, rotated, and encoded across secure edge shards, making data fully invisible to anyone without your private keys.',
      features: [
        'End-to-end client-side SHA-384 encoding',
        'Zero-knowledge architecture standards',
        'Decentralized high resilience clusters'
      ]
    }
  ];

  const handleCopyLink = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  // State managers for interactive product simulators
  // 1. Blnq Upload simulator states
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  // 2. AceAgent simulator states
  const [agentObjective, setAgentObjective] = useState('Research current container standards');
  const [agentRunning, setAgentRunning] = useState(false);
  const [agentLogs, setAgentLogs] = useState<string[]>([]);
  const [agentStep, setAgentStep] = useState(0);

  // 3. Blnq Harvest simulator states
  const [harvestUrl, setHarvestUrl] = useState('https://news.ycombinator.com');
  const [harvesting, setHarvesting] = useState(false);
  const [harvestOutput, setHarvestOutput] = useState<any | null>(null);

  // 4. Starlock Storage simulator states
  const [secretText, setSecretText] = useState('CONFIDENTIAL_DEVEL_KEYS_2026_STABLE');
  const [vaultKey, setVaultKey] = useState('');
  const [sealed, setSealed] = useState(false);
  const [shards, setShards] = useState<string[]>([]);

  // Trigger simulated Upload
  const triggerSimulatedUpload = (fileName: string) => {
    setUploading(true);
    setUploadProgress(0);
    setUploadedUrl(null);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          const randId = Math.random().toString(36).substring(2, 8);
          setUploadedUrl(`https://blnq.click/f/${randId}`);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  const handleFileDrop = (e: DragEvent) => {
     e.preventDefault();
     setDragActive(false);
     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
       const file = e.dataTransfer.files[0];
       setUploadFile(file);
       triggerSimulatedUpload(file.name);
     }
  };

  // Trigger simulated Agent Runner
  const runAgentTask = () => {
    setAgentRunning(true);
    setAgentStep(0);
    setAgentLogs(['[AceAgent] Booting brain context...', '[AceAgent] Model route: Nova-V2 configured successfully']);
    
    const steps = [
      () => setAgentLogs(prev => [...prev, `[AceAgent] Objective set: "${agentObjective}"`]),
      () => setAgentLogs(prev => [...prev, `[AceAgent] Traversing index structures on world nodes...`]),
      () => setAgentLogs(prev => [...prev, `[AceAgent] Querying relevant cloud instances... Found 14 matching variables`]),
      () => setAgentLogs(prev => [...prev, `[AceAgent] Compiling telemetry report... done.`]),
      () => {
        setAgentLogs(prev => [...prev, `[AceAgent] Task finished. Status: SUCCESS`]);
        setAgentRunning(false);
      }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        steps[currentStep]();
        setAgentStep(currentStep + 1);
        currentStep++;
      } else {
        clearInterval(interval);
      }
    }, 1200);
  };

  // Trigger simulated Data scraper
  const runScrapeTask = () => {
    setHarvesting(true);
    setHarvestOutput(null);

    setTimeout(() => {
      setHarvestOutput({
        status: 200,
        source: harvestUrl,
        harvestTimeMs: 420,
        bytesScraped: 12480,
        extractedMetadata: {
          title: "Hacker News Mainframe",
          linksFound: 30,
          coreHeading: "Y Combinator Ambient Civilization Layer Releases",
        },
        payloadPreview: `{\n  "source": "${harvestUrl}",\n  "classification": "developer-news",\n  "ingested_utc": "2026-05-24T11:46:11Z",\n  "status": "ready_for_llm_training"\n}`
      });
      setHarvesting(false);
    }, 1500);
  };

  // Trigger simulated star storage sealer
  const triggerSealVault = () => {
    if (!secretText) return;
    setSealed(true);
    const key = 'STR-K-' + Math.random().toString(16).substring(2, 10).toUpperCase();
    setVaultKey(key);
    setShards([
      `Shard_Alpha::${Math.random().toString(36).substring(2, 6).toUpperCase()} => SF-Edge-01`,
      `Shard_Beta::${Math.random().toString(36).substring(2, 6).toUpperCase()} => Paris-Edge-02`,
      `Shard_Delta::${Math.random().toString(36).substring(2, 6).toUpperCase()} => Tokyo-Edge-01`
    ]);
  };

  const activeProduct = products.find(p => p.id === activeProductId) || products[0];

  return (
    <div id="blurr-products-showcase" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      {/* Segmented Controller Header */}
      <div className="border-b border-zinc-800/60 pb-8 mb-12 text-center md:text-left">
        <h2 className="font-display font-medium text-2xl sm:text-3xl text-white tracking-tight">
          Blurr's <span className="text-violet-400">Products & Solutions Hub</span>
        </h2>
        <p className="text-zinc-400 text-xs sm:text-sm mt-2 max-w-2xl font-light">
          A unified cockpit showcasing Blurr's active software portals. Interact with live simulators below to test file routing, agent orchestration, data ingestion, and cryptographic vaults.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column - Selectable products grid */}
        <div id="product-switcher-panel" className="lg:col-span-5 space-y-4">
          <div className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase mb-2 select-none">
            Ecosystem Directory
          </div>
          
          <div className="space-y-3">
            {products.map((prod) => {
              const isSelected = activeProductId === prod.id;
              return (
                <button
                  key={prod.id}
                  id={`prod-btn-${prod.id}`}
                  onClick={() => {
                    setActiveProductId(prod.id);
                  }}
                  className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden group ${
                    isSelected
                      ? 'bg-zinc-900/90 border-zinc-750 shadow-lg'
                      : 'bg-zinc-950/45 border-zinc-900/80 hover:bg-zinc-900/40 hover:border-zinc-800'
                  }`}
                >
                  {/* Outer gradient hover element */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 to-cyan-400" />
                  )}

                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono tracking-wider text-violet-400 font-bold uppercase">
                      {prod.badge}
                    </span>
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full uppercase ${
                      prod.status === 'operational' ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-900/30' :
                      prod.status === 'expanding' ? 'bg-blue-950/40 text-blue-400 border border-blue-900/30' :
                      'bg-amber-950/40 text-amber-500 border border-amber-900/30'
                    }`}>
                      {prod.status}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-base sm:text-lg text-white group-hover:text-zinc-200 transition-colors">
                    {prod.name}
                  </h3>
                  
                  <p className="text-zinc-400 text-xs mt-1.5 font-light line-clamp-2">
                    {prod.tagline}
                  </p>

                  <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-500 hover:text-zinc-300 mt-4 transition-colors pt-2 border-t border-zinc-900/50">
                    <Globe className="w-3.5 h-3.5 text-zinc-600" />
                    <span>{prod.domain}</span>
                    <ChevronRight className="w-3 h-3 ml-auto text-zinc-700 group-hover:text-zinc-400 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right column - Deep dive detail and Interactive Playground */}
        <div id="product-detail-view" className="lg:col-span-7 space-y-6">
          <div className="bg-zinc-900/40 border border-zinc-850 rounded-3xl p-6 sm:p-8 space-y-6">
            
            {/* Header copy details */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800">
                    {activeProduct.id === 'blnq-upload' && <Upload className="w-5 h-5 text-violet-400" />}
                    {activeProduct.id === 'ace-agent' && <Sparkles className="w-5 h-5 text-pink-400" />}
                    {activeProduct.id === 'blnq-harvest' && <Cpu className="w-5 h-5 text-cyan-400" />}
                    {activeProduct.id === 'starlock-storage' && <Database className="w-5 h-5 text-emerald-400" />}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg sm:text-xl text-white">
                      {activeProduct.name}
                    </h4>
                    <span className="text-[11px] font-mono text-zinc-500">Official Solution Core</span>
                  </div>
                </div>

                {/* Direct copy + jump anchors */}
                <div className="flex items-center gap-2">
                  <button
                    id={`btn-copy-domain-${activeProduct.id}`}
                    onClick={() => handleCopyLink(`https://${activeProduct.domain}`, activeProduct.id)}
                    className="px-3 py-1.5 bg-zinc-950 border border-zinc-850 hover:bg-zinc-900 rounded-xl text-[10px] font-mono text-zinc-400 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
                    title="Copy direct web link"
                  >
                    <span>{activeProduct.domain}</span>
                    {copiedStates[activeProduct.id] ? (
                      <Check className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                  </button>

                  <a
                    id={`link-jump-${activeProduct.id}`}
                    href={`https://${activeProduct.domain}`}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="p-1.5 bg-violet-600/10 border border-violet-500/25 hover:bg-violet-600/25 rounded-xl text-violet-400 transition-all flex items-center justify-center cursor-pointer"
                    title="Visit site dashboard"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <p className="text-zinc-400 text-xs sm:text-sm font-sans font-light leading-relaxed pt-2">
                {activeProduct.description}
              </p>
            </div>

            {/* Core features listing */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {activeProduct.features.map((fea, idx) => (
                <div key={idx} className="bg-zinc-950/40 border border-zinc-900 p-3 rounded-xl flex items-center gap-2 leading-tight">
                  <CheckCircle className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                  <span className="text-[11px] text-zinc-300 font-sans">{fea}</span>
                </div>
              ))}
            </div>

            {/* Interactive Simulator sandbox wrapper */}
            <div className="border-t border-zinc-900/80 pt-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase">
                  Hub Interface Simulator
                </span>
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* 1. Blnq Upload Interactive Block */}
              {activeProduct.id === 'blnq-upload' && (
                <div id="sim-blnq-upload" className="space-y-4">
                  <div
                    onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                    onDragLeave={() => setDragActive(false)}
                    onDrop={handleFileDrop}
                    className={`border-2 border-dashed rounded-2xl p-6 transition-all text-center relative ${
                      dragActive ? 'border-violet-400 bg-violet-500/5' : 'border-zinc-800 bg-zinc-950/30'
                    }`}
                  >
                    {!uploading && !uploadedUrl && (
                      <div className="space-y-2">
                        <Upload className="w-8 h-8 text-zinc-600 mx-auto" />
                        <div>
                          <p className="text-xs text-zinc-300 font-sans">
                            Drag & Drop file to test <span className="text-violet-400 font-semibold">blnq.click</span>
                          </p>
                          <p className="text-[10px] text-zinc-500 font-mono mt-1">Accepts images, code, archives (Max 250MB)</p>
                        </div>
                        <div className="pt-2">
                          <button
                            id="btn-upload-file-trigger"
                            onClick={() => triggerSimulatedUpload('creator_workspace_assets.zip')}
                            className="px-4 py-1.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white rounded-lg text-[11px] font-mono cursor-pointer transition-all"
                          >
                            Simulate File Drop
                          </button>
                        </div>
                      </div>
                    )}

                    {uploading && (
                      <div className="space-y-3 py-2">
                        <RefreshCw className="w-7 h-7 text-violet-400 mx-auto animate-spin" />
                        <div>
                          <p className="text-xs font-mono text-zinc-300">{uploadProgress}% uploaded</p>
                          <div className="w-48 bg-zinc-900 h-1.5 rounded-full mx-auto overflow-hidden mt-2">
                            <div 
                              className="bg-gradient-to-r from-violet-500 to-blue-400 h-full transition-all duration-300"
                              style={{ width: `${uploadProgress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {uploadedUrl && (
                      <div className="space-y-3 py-2">
                        <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
                        <div>
                          <p className="text-xs text-zinc-200">File distributed successfully!</p>
                          <span className="text-[10px] text-zinc-500 font-mono block mt-1">Propagated to 8 active edge nodes</span>
                        </div>
                        
                        <div className="flex items-center justify-center gap-2 max-w-sm mx-auto pt-2">
                          <input
                            type="text"
                            readOnly
                            value={uploadedUrl}
                            className="bg-zinc-950 text-[11px] font-mono text-zinc-300 px-3 py-1.5 rounded-lg border border-zinc-850 flex-grow text-center focus:outline-none"
                          />
                          <button
                            id="btn-copy-uploaded-url"
                            onClick={() => handleCopyLink(uploadedUrl, 'uploaded-file')}
                            className="p-1.5 bg-zinc-900 hover:bg-zinc-800 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white transition-all cursor-pointer"
                          >
                            {copiedStates['uploaded-file'] ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>

                        <div className="pt-2">
                          <button
                            id="btn-reset-uploader"
                            onClick={() => { setUploadedUrl(null); setUploadProgress(0); }}
                            className="text-[10px] font-mono text-zinc-500 hover:text-zinc-300 underline cursor-pointer"
                          >
                            Upload another asset
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 2. AceAgent Interactive Block */}
              {activeProduct.id === 'ace-agent' && (
                <div id="sim-ace-agent" className="space-y-4">
                  <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-5 space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-zinc-400 uppercase block">Set Agent Objective Command</label>
                      <div className="flex gap-2">
                        <input
                          id="agent-objective-input"
                          type="text"
                          value={agentObjective}
                          onChange={(e) => setAgentObjective(e.target.value)}
                          placeholder="e.g. Scrape dev news and build summary markdown"
                          className="flex-grow bg-zinc-900 border border-zinc-850 text-xs font-mono text-zinc-200 py-2 px-3 rounded-xl focus:border-pink-500 focus:outline-none placeholder-zinc-700"
                        />
                        <button
                          id="btn-trigger-agent"
                          onClick={runAgentTask}
                          disabled={agentRunning}
                          className="px-4 py-2 bg-pink-600 hover:bg-pink-500 disabled:opacity-50 text-white rounded-xl text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer"
                        >
                          {agentRunning ? (
                            <>
                              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                              <span>Running...</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-3.5 h-3.5 fill-current" />
                              <span>Deploy Agent</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="border border-zinc-900 bg-black/60 rounded-xl p-4 h-36 overflow-y-auto space-y-1 scrollbar-thin">
                      {agentLogs.length === 0 ? (
                        <div className="text-[11px] font-mono text-zinc-600 italic">No cognitive threads active. Define an objective above and trigger AceAgent.</div>
                      ) : (
                        agentLogs.map((log, idx) => (
                          <div key={idx} className="text-[10px] font-mono text-zinc-400">
                            <span className="text-zinc-650">[{new Date().toLocaleTimeString()}]</span> {log}
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* 3. Blnq Harvest Interactive Block */}
              {activeProduct.id === 'blnq-harvest' && (
                <div id="sim-blnq-harvest" className="space-y-4">
                  <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-5 space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-zinc-400 uppercase block">Target Source Domain & Ingestion Matrix</label>
                      <div className="flex gap-2">
                        <input
                          id="scrape-target-input"
                          type="text"
                          value={harvestUrl}
                          onChange={(e) => setHarvestUrl(e.target.value)}
                          placeholder="https://analytics-portal.cloud"
                          className="flex-grow bg-zinc-900 border border-zinc-850 text-xs font-mono text-zinc-200 py-2 px-3 rounded-xl focus:border-cyan-500 focus:outline-none placeholder-zinc-700"
                        />
                        <button
                          id="btn-trigger-harvest"
                          onClick={runScrapeTask}
                          disabled={harvesting}
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 disabled:opacity-50 text-white rounded-xl text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer font-semibold"
                        >
                          {harvesting ? (
                            <>
                              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                              <span>Harvesting...</span>
                            </>
                          ) : (
                            <>
                              <Search className="w-3.5 h-3.5" />
                              <span>Harvest Portal</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {harvestOutput && (
                      <div className="space-y-3 pt-1">
                        <div className="grid grid-cols-2 gap-3 text-[10px] font-mono">
                          <div className="bg-zinc-900 border border-zinc-850 p-2 rounded-lg">
                            <span className="text-zinc-500 block">HTTP Response</span>
                            <span className="text-emerald-400 block mt-0.5">{harvestOutput.status} OK</span>
                          </div>
                          <div className="bg-zinc-900 border border-zinc-850 p-2 rounded-lg">
                            <span className="text-zinc-500 block">Total Data Scraped</span>
                            <span className="text-cyan-400 block mt-0.5">{harvestOutput.bytesScraped} Bytes</span>
                          </div>
                        </div>

                        <div className="text-[10px] font-mono bg-zinc-950 p-3 rounded-xl border border-zinc-900 space-y-1 max-h-24 overflow-y-auto">
                          <div className="text-zinc-500">// Header Metadata Extracted:</div>
                          <div className="text-zinc-300">Title: "{harvestOutput.extractedMetadata.title}"</div>
                          <div className="text-zinc-300">Links: {harvestOutput.extractedMetadata.linksFound} outbound tags found</div>
                          <div className="text-zinc-400 mt-2 text-[9px] text-zinc-600">{harvestOutput.payloadPreview}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 4. Starlock Storage Interactive Block */}
              {activeProduct.id === 'starlock-storage' && (
                <div id="sim-starlock" className="space-y-4">
                  <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-5 space-y-4">
                    {!sealed ? (
                      <div className="space-y-3">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-mono text-zinc-400 uppercase block">Input Key/Value Secrets payload</label>
                          <textarea
                            id="star-secrets-input"
                            value={secretText}
                            onChange={(e) => setSecretText(e.target.value)}
                            rows={2}
                            placeholder="SECRET_DATABASE_ACCESS_KEY=123x-y-z"
                            className="w-full bg-zinc-905 border border-zinc-850 text-xs font-mono text-zinc-300 py-2 px-3 rounded-xl focus:border-emerald-500 focus:outline-none placeholder-zinc-700"
                          />
                        </div>
                        <button
                          id="btn-seal-starlock"
                          onClick={triggerSealVault}
                          className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                        >
                          <Lock className="w-3.5 h-3.5" />
                          <span>Generate Star Shards & Seal Vault</span>
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4 py-1">
                        <div className="flex items-center gap-2.5 p-3 bg-emerald-950/20 border border-emerald-900/30 rounded-xl">
                          <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                          <div>
                            <span className="text-[9px] font-mono text-emerald-400 block tracking-wide font-bold uppercase">ZERO KNOWLEDGE SECURED</span>
                            <span className="text-xs font-mono text-white tracking-wide mt-0.5">{vaultKey}</span>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <span className="text-[10px] font-mono text-zinc-500 block uppercase">Cryptographic Shard mapping</span>
                          <div className="space-y-1 text-[10px] font-mono text-zinc-400">
                            {shards.map((shard, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                <span>{shard}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2 border-t border-zinc-900">
                          <button
                            id="btn-reset-vault-sim"
                            onClick={() => { setSealed(false); setVaultKey(''); }}
                            className="text-[10px] font-mono text-zinc-500 hover:text-zinc-300 underline cursor-pointer"
                          >
                            Seal another vault item
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
