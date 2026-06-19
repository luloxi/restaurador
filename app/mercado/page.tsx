"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../../components/Logo';
import { 
  ArrowRight, Building2, MapPin, Wallet, X, Check, Search, ChevronDown 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { projects, Project } from '../../data/projects';

interface Holding {
  projectId: string;
  projectTitle: string;
  tokens: number;
  pricePaid: number;
  totalInvested: number;
}

interface WalletOption {
  name: string;
  icon: React.ReactNode;
}

const mockWallets: WalletOption[] = [
  { name: "Lace", icon: <Wallet className="w-4 h-4" /> },
  { name: "Eternl", icon: <Wallet className="w-4 h-4" /> },
  { name: "Nami", icon: <Wallet className="w-4 h-4" /> },
  { name: "Typhon", icon: <Wallet className="w-4 h-4" /> },
];

const formatEUR = (amount: number) => 
  new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(amount);

const formatPercent = (value: number) => `${value.toFixed(1)}%`;

export default function Mercado() {
  // State
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  // Buy flow
  const [buyAmount, setBuyAmount] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  // Wallet & Portfolio
  const [connectedWallet, setConnectedWallet] = useState<string | null>(null);
  const [holdings, setHoldings] = useState<Holding[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('restaurador_holdings');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // Persist holdings
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('restaurador_holdings', JSON.stringify(holdings));
    }
  }, [holdings]);

  // Live projects for demo updates
  const [liveProjects, setLiveProjects] = useState<Project[]>(
    JSON.parse(JSON.stringify(projects))
  );

  const projectTypes = Array.from(new Set(liveProjects.map(p => p.type)));

  const filteredProjects = useMemo(() => {
    return liveProjects.filter(project => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = typeFilter === 'all' || project.type === typeFilter;
      const matchesStatus = statusFilter === 'all' || project.status === statusFilter;

      return matchesSearch && matchesType && matchesStatus;
    });
  }, [searchTerm, typeFilter, statusFilter, liveProjects]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Wallet
  const connectWallet = (walletName: string) => {
    setConnectedWallet(walletName);
    toast.success(`Conectado a ${walletName}`);
  };

  const disconnectWallet = () => {
    setConnectedWallet(null);
    setShowPortfolio(false);
  };

  // Project
  const openProject = (project: Project) => {
    setSelectedProject(project);
    setBuyAmount(1);
    setShowBuyModal(false);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setShowBuyModal(false);
  };

  const openBuy = (project: Project) => {
    setSelectedProject(project);
    setBuyAmount(1);
    setShowBuyModal(true);
  };

  // Buy
  const handleBuyTokens = async () => {
    if (!selectedProject || !connectedWallet) {
      toast.error("Conecta una wallet primero");
      return;
    }

    const project = selectedProject;
    const tokens = buyAmount;
    const totalCost = Math.round(tokens * project.tokenPrice);

    if (tokens < 1) return;

    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 1200));

    // Update raised
    const updatedRaised = Math.min(project.targetAmount, project.raised + totalCost);
    setLiveProjects(prev =>
      prev.map(p => p.id === project.id ? { ...p, raised: updatedRaised } : p)
    );

    // Holdings
    const existing = holdings.findIndex(h => h.projectId === project.id);
    const newHolding: Holding = {
      projectId: project.id,
      projectTitle: project.title,
      tokens: existing !== -1 ? holdings[existing].tokens + tokens : tokens,
      pricePaid: project.tokenPrice,
      totalInvested: existing !== -1 
        ? holdings[existing].totalInvested + totalCost 
        : totalCost,
    };

    let newHoldings = [...holdings];
    if (existing !== -1) newHoldings[existing] = newHolding;
    else newHoldings.push(newHolding);

    setHoldings(newHoldings);
    setIsProcessing(false);
    setShowBuyModal(false);

    toast.success("¡Tokens adquiridos!", {
      description: `${tokens} tokens de ${project.title} por ${formatEUR(totalCost)}`,
    });

    setTimeout(() => {
      setSelectedProject(null);
      setShowPortfolio(true);
    }, 500);
  };

  const currentRaisedPct = (p: Project) => Math.min(100, Math.round((p.raised / p.targetAmount) * 100));

  const totalValue = holdings.reduce((s, h) => s + h.totalInvested, 0);

  return (
    <div className="min-h-screen bg-[#F5F1E9] text-[#2C2C2C]">
      {/* Header for Mercado */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F1E9]/95 backdrop-blur-md border-b border-[#D4CBBF]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            <Link href="/" className="hover:text-[#0F3D2E]">Inicio</Link>
            <Link href="/#proyectos" className="hover:text-[#0F3D2E]">Proyectos</Link>
            <Link href="/tecnica" className="hover:text-[#0F3D2E]">Técnica</Link>
            <Link href="/legal" className="hover:text-[#0F3D2E]">Legal (AR)</Link>
          </div>

          <div className="flex items-center gap-3">
            {connectedWallet ? (
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setShowPortfolio(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#0F3D2E] text-sm font-medium hover:bg-white"
                >
                  <Wallet className="w-4 h-4" /> {connectedWallet}
                </button>
                <button onClick={disconnectWallet} className="text-[#6B665F] hover:text-[#0F3D2E]"><X className="w-4 h-4" /></button>
              </div>
            ) : (
              <div className="relative group">
                <button className="btn-secondary px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <Wallet className="w-4 h-4" /> Conectar Wallet
                  <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute right-0 mt-2 w-44 bg-white border border-[#D4CBBF] rounded-xl shadow-xl py-1 hidden group-hover:block z-50">
                  {mockWallets.map((w) => (
                    <button key={w.name} onClick={() => connectWallet(w.name)} className="wallet-option w-full px-4 py-2.5 text-left flex items-center gap-3 text-sm hover:bg-[#F8F4ED]">
                      {w.icon} {w.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-8">
            <div>
              <div className="uppercase text-xs tracking-[2px] text-[#0F3D2E]">MERCADO DE TOKENS</div>
              <h1 className="text-5xl tracking-[-1.5px] serif text-[#0F3D2E]">Explorar Propiedades</h1>
              <p className="text-[#6B665F] mt-1">Adquiere tokens de proyectos de restauración en Cardano.</p>
            </div>
            <Link href="/" className="text-sm hover:underline">Volver al sitio principal</Link>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-3.5 w-4 h-4 text-[#6B665F]" />
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar proyectos..."
                className="input w-full pl-11 py-3 rounded-2xl text-sm"
              />
            </div>
            <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)} className="input px-4 py-3 rounded-2xl text-sm min-w-[170px]">
              <option value="all">Todos los tipos</option>
              {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="input px-4 py-3 rounded-2xl text-sm min-w-[150px]">
              <option value="all">Cualquier estado</option>
              <option value="open">Abiertos</option>
              <option value="funded">Completados</option>
            </select>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => {
              const progress = currentRaisedPct(project);
              return (
                <div key={project.id} className="project-card rounded-3xl overflow-hidden border border-[#D4CBBF] flex flex-col bg-white">
                  <div className="h-52 relative flex items-center justify-center overflow-hidden" style={{background: `linear-gradient(135deg, #0F3D2E 0%, #1A5C47 100%)`}}>
                    <div className="text-center text-white/80">
                      <Building2 className="w-12 h-12 mx-auto mb-2.5" />
                      <div className="text-xs uppercase tracking-[2.5px]">{project.type}</div>
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/95 text-xs font-medium text-[#0F3D2E]">
                      {project.year}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div>
                      <div className="font-semibold text-xl">{project.title}</div>
                      <div className="text-sm text-[#6B665F] flex items-center gap-1 mt-1"><MapPin className="w-3.5 h-3.5" />{project.location}</div>
                      <p className="mt-3 text-sm text-[#6B665F] line-clamp-2">{project.shortDesc}</p>
                    </div>

                    <div className="mt-auto pt-6">
                      <div className="flex justify-between mb-1 text-sm">
                        <span>{formatEUR(project.raised)} / {formatEUR(project.targetAmount)}</span>
                        <span className="font-medium">{progress}%</span>
                      </div>
                      <div className="h-1.5 bg-[#EDE6D9] rounded-full mb-4 overflow-hidden">
                        <div className="h-1.5 bg-[#0F3D2E] rounded-full progress-bar" style={{width: `${progress}%`}} />
                      </div>

                      <div className="flex justify-between text-sm mb-4">
                        <div>Precio: <span className="font-semibold">{formatEUR(project.tokenPrice)}</span></div>
                        <div>Yield: <span className="font-semibold text-[#0F3D2E]">{formatPercent(project.expectedYield)}</span></div>
                      </div>

                      <div className="flex gap-3">
                        <button onClick={() => openProject(project)} className="flex-1 btn-secondary py-3 rounded-2xl text-sm">Ver detalles</button>
                        <button 
                          onClick={() => openBuy(project)} 
                          disabled={project.status !== 'open'}
                          className="flex-1 btn-primary py-3 rounded-2xl text-sm disabled:opacity-50"
                        >
                          Comprar tokens
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modals - same as before but simplified for this page */}
      <AnimatePresence>
        {selectedProject && !showBuyModal && (
          <div className="fixed inset-0 bg-black/60 z-[70] flex items-center justify-center p-4" onClick={closeProject}>
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.985 }}
              onClick={e => e.stopPropagation()}
              className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden modal shadow-2xl"
            >
              <div className="p-8">
                <div className="flex justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[#0F3D2E]">{selectedProject.type}</div>
                    <h3 className="text-3xl serif tracking-tight text-[#0F3D2E] mt-1">{selectedProject.title}</h3>
                  </div>
                  <button onClick={closeProject}><X /></button>
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[#6B665F]">{selectedProject.longDesc}</p>
                    <div className="mt-4">
                      <div className="font-medium mb-2">Plan de restauración</div>
                      <ul className="text-sm text-[#6B665F] space-y-1">
                        {selectedProject.restorationPlan.map((s,i) => <li key={i}>• {s}</li>)}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div>Progreso: <span className="font-semibold">{currentRaisedPct(selectedProject)}%</span></div>
                    <div className="h-2 bg-[#EDE6D9] rounded mt-1 mb-4"><div className="h-2 bg-[#0F3D2E] rounded" style={{width: `${currentRaisedPct(selectedProject)}%`}} /></div>

                    <div className="text-sm space-y-1">
                      <div>Precio token: <strong>{formatEUR(selectedProject.tokenPrice)}</strong></div>
                      <div>Yield estimado: <strong>{formatPercent(selectedProject.expectedYield)}</strong></div>
                    </div>

                    <button onClick={() => openBuy(selectedProject)} disabled={selectedProject.status !== 'open'} className="mt-6 w-full btn-primary py-3 rounded-2xl disabled:opacity-50">
                      Comprar tokens
                    </button>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t text-xs text-[#6B665F]">
                  Reglas CIP-0113: {selectedProject.cipRules.join(" • ")}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Buy Modal */}
      <AnimatePresence>
        {showBuyModal && selectedProject && (
          <div className="fixed inset-0 bg-black/70 z-[80] flex items-center justify-center p-4" onClick={() => setShowBuyModal(false)}>
            <motion.div onClick={e=>e.stopPropagation()} className="bg-white w-full max-w-md rounded-3xl p-8">
              <div className="flex justify-between mb-4">
                <div className="font-semibold text-xl">{selectedProject.title}</div>
                <button onClick={() => setShowBuyModal(false)}><X/></button>
              </div>

              <div className="text-sm mb-1">Cantidad de tokens</div>
              <input type="range" min="1" max="50" value={buyAmount} onChange={e=>setBuyAmount(parseInt(e.target.value))} className="w-full accent-[#0F3D2E]" />
              <div className="text-right font-mono text-xl mb-6">{buyAmount}</div>

              <div className="bg-[#F5F1E9] p-4 rounded-2xl mb-4 text-sm">
                Total: <strong>{formatEUR(buyAmount * selectedProject.tokenPrice)}</strong>
              </div>

              <button 
                onClick={handleBuyTokens} 
                disabled={!connectedWallet || isProcessing}
                className="w-full py-3.5 rounded-2xl bg-[#0F3D2E] text-white font-semibold disabled:opacity-60"
              >
                {isProcessing ? "Procesando..." : connectedWallet ? `Confirmar en ${connectedWallet}` : "Conecta una wallet primero"}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Portfolio */}
      <AnimatePresence>
        {showPortfolio && (
          <div className="fixed inset-0 z-[90] bg-black/50" onClick={() => setShowPortfolio(false)}>
            <div onClick={e=>e.stopPropagation()} className="absolute right-0 top-0 h-full w-full max-w-md bg-white p-8 overflow-auto">
              <div className="flex justify-between mb-6">
                <div className="text-2xl font-semibold">Mi Portfolio</div>
                <button onClick={() => setShowPortfolio(false)}><X /></button>
              </div>

              {holdings.length === 0 ? (
                <p className="text-[#6B665F]">No tienes tokens todavía.</p>
              ) : (
                <>
                  {holdings.map((h, i) => (
                    <div key={i} className="border p-4 rounded-2xl mb-3">
                      <div className="font-medium">{h.projectTitle}</div>
                      <div>{h.tokens} tokens • {formatEUR(h.totalInvested)}</div>
                    </div>
                  ))}
                  <div className="font-semibold text-lg mt-4">Total invertido: {formatEUR(totalValue)}</div>
                </>
              )}
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
