"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '../components/Logo';
import { 
  ArrowRight, Building2, TrendingUp, Shield, Calendar, 
  MapPin, Check, X 
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'sonner';
import { projects, Project } from '../data/projects';

// Helper functions (used in landing teaser + owner form)
const formatEUR = (amount: number) => 
  new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(amount);

const formatPercent = (value: number) => `${value.toFixed(1)}%`;



export default function Restaurador() {
  // State for landing (simplified)
  const [showOwnerForm, setShowOwnerForm] = useState(false);

  // Owner application form (simple)
  const [ownerForm, setOwnerForm] = useState({
    name: '', email: '', phone: '', propertyType: '', location: '', description: '', estimatedValue: ''
  });
  const [isSubmittingOwner, setIsSubmittingOwner] = useState(false);

  const handleOwnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ownerForm.name || !ownerForm.email || !ownerForm.location) {
      toast.error("Completa los campos obligatorios");
      return;
    }

    setIsSubmittingOwner(true);
    await new Promise(r => setTimeout(r, 900));
    setIsSubmittingOwner(false);

    toast.success("Solicitud recibida", {
      description: "Nuestro equipo de tokenización te contactará en las próximas 48h. ¡Gracias por confiar en Restaurador!",
    });
    setShowOwnerForm(false);
    setOwnerForm({ name: '', email: '', phone: '', propertyType: '', location: '', description: '', estimatedValue: '' });
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const currentProjectRaisedPct = (project: Project) => 
    Math.min(100, Math.round((project.raised / project.targetAmount) * 100));

  // Render
  return (
    <div className="min-h-screen bg-[#F5F1E9] text-[#2C2C2C]">
      {/* NAVBAR - Landing (simplified, consistent) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F1E9]/95 backdrop-blur-md border-b border-[#D4CBBF]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo />

          {/* Desktop: Main CTAs + curious links */}
          <div className="hidden md:flex items-center gap-4">
            {/* Prominent CTAs - more eye-catching */}
            <Link 
              href="/mercado" 
              className="btn-primary px-7 py-3 rounded-2xl text-sm font-semibold flex items-center gap-2 shadow hover:shadow-lg transition-all active:scale-[0.985] ring-1 ring-[#0F3D2E]/10"
            >
              Ir al Mercado <ArrowRight className="w-4 h-4" />
            </Link>
            <button 
              onClick={() => setShowOwnerForm(true)}
              className="btn-copper px-7 py-3 rounded-2xl text-sm font-semibold flex items-center gap-2 shadow hover:shadow-lg transition-all active:scale-[0.985] ring-1 ring-[#B87333]/20"
            >
              Tokenizar mi propiedad
            </button>

            {/* Curious links - for the interested (subtle) */}
            <div className="flex items-center gap-3 pl-4 ml-1 border-l border-[#D4CBBF] text-xs tracking-wider text-[#6B665F]">
              <Link href="/tecnica" className="hover:text-[#0F3D2E] transition-colors">Técnica</Link>
              <Link href="/legal" className="hover:text-[#0F3D2E] transition-colors">Legal</Link>
            </div>
          </div>

          {/* Mobile: Compact prominent actions */}
          <div className="md:hidden flex items-center gap-3 text-sm">
            <Link 
              href="/mercado" 
              className="btn-primary px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1"
            >
              Mercado
            </Link>
            <button 
              onClick={() => setShowOwnerForm(true)}
              className="btn-copper px-4 py-2 rounded-xl text-xs font-semibold"
            >
              Tokenizar
            </button>
            <div className="flex gap-2 text-[10px] text-[#6B665F]">
              <Link href="/tecnica" className="hover:text-[#0F3D2E]">Técnica</Link>
              <Link href="/legal" className="hover:text-[#0F3D2E]">Legal</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-20 pb-20 border-b border-[#D4CBBF] bg-white">
        <div className="max-w-5xl mx-auto px-6 pt-16 pb-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#0F3D2E] text-white text-xs tracking-[2px] mb-6">
            TOKENIZACIÓN RWA EN CARDANO • CIP-0113
          </div>
          
          <h1 className="text-6xl md:text-7xl leading-[1.05] tracking-[-2.5px] font-semibold serif text-[#0F3D2E] mb-6">
            Restaurar el pasado.<br />Construir el futuro.
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-[#6B665F] mb-10">
            Tokenizamos propiedades antiguas, fábricas abandonadas y activos en desuso. 
            Los fondos recaudados financian su restauración. Tú obtienes retornos estables y cuasi asegurados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/mercado" 
              className="btn-primary px-10 py-4 rounded-2xl text-lg font-semibold flex items-center justify-center gap-3 group shadow-sm hover:shadow-md transition-all"
            >
              Explorar proyectos <ArrowRight className="group-hover:translate-x-0.5 transition" />
            </Link>
            <button 
              onClick={() => setShowOwnerForm(true)}
              className="btn-secondary px-10 py-4 rounded-2xl text-lg font-semibold"
            >
              Quiero tokenizar mi propiedad
            </button>
          </div>

          <div className="mt-8 text-xs uppercase tracking-widest text-[#6B665F]">
            Accesible desde 710 € • Cumplimiento nativo con CIP-0113
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-[#D4CBBF] bg-white py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-semibold text-[#0F3D2E] tracking-tighter">5</div>
            <div className="text-[#6B665F] mt-1 text-sm uppercase tracking-widest">Propiedades tokenizadas</div>
          </div>
          <div>
            <div className="text-4xl font-semibold text-[#0F3D2E] tracking-tighter">€8.7M</div>
            <div className="text-[#6B665F] mt-1 text-sm uppercase tracking-widest">Recaudado para restauración</div>
          </div>
          <div>
            <div className="text-4xl font-semibold text-[#0F3D2E] tracking-tighter">13.5%</div>
            <div className="text-[#6B665F] mt-1 text-sm uppercase tracking-widest">Yield promedio estimado</div>
          </div>
          <div>
            <div className="text-4xl font-semibold text-[#0F3D2E] tracking-tighter">1.1k+</div>
            <div className="text-[#6B665F] mt-1 text-sm uppercase tracking-widest">Inversores retail e institucionales</div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="text-center mb-12">
          <div className="text-[#0F3D2E] text-xs tracking-[3px] mb-3 font-medium">PROCESO TRANSPARENTE</div>
          <h2 className="text-5xl tracking-[-1.5px] serif text-[#0F3D2E]">Cómo funciona Restaurador</h2>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {[
            { step: "01", title: "Selección", text: "Evaluamos y seleccionamos propiedades con alto potencial de revalorización y generación de ingresos." },
            { step: "02", title: "Tokenización CIP-0113", text: "Emitimos tokens programables nativos en Cardano con reglas de cumplimiento (KYC, lock-ups, transferencias controladas)." },
            { step: "03", title: "Venta de tokens", text: "Inversores retail e institucionales adquieren participación fraccionada. Todo en cadena y transparente." },
            { step: "04", title: "Restauración", text: "Los fondos recaudados se destinan íntegramente a la rehabilitación y activación económica del activo." },
            { step: "05", title: "Retornos", text: "Los inversores reciben dividendos de operación (alquileres, eventos, etc.) + posible apreciación del patrimonio." },
          ].map((item, i) => (
            <div key={i} className="bg-white p-7 rounded-3xl border border-[#D4CBBF]">
              <div className="font-mono text-[#0F3D2E] text-sm mb-4 tracking-widest">{item.step}</div>
              <div className="font-semibold text-xl mb-3">{item.title}</div>
              <p className="text-[#6B665F] text-[15px] leading-snug">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-[#6B665F] mt-8 max-w-md mx-auto">
          La tecnología CIP-0113 permite que las reglas de cumplimiento viajen con el token. Sin smart contracts frágiles.
        </p>
      </section>

      {/* PROYECTOS TEASER */}
      <section id="proyectos" className="bg-white border-y border-[#D4CBBF] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <div className="uppercase tracking-[2px] text-xs text-[#0F3D2E] mb-1">MERCADO DE TOKENS</div>
              <h3 className="text-5xl tracking-[-1.5px] serif text-[#0F3D2E]">Propiedades tokenizadas</h3>
              <p className="mt-2 text-[#6B665F]">Explora los proyectos y adquiere tokens en nuestro mercado.</p>
            </div>
            <Link 
              href="/mercado" 
              className="btn-primary self-start md:self-auto px-8 py-3 rounded-2xl text-sm font-semibold inline-flex items-center gap-2"
            >
              Ir al Mercado completo <ArrowRight />
            </Link>
          </div>

          {/* Teaser Grid - 3 featured projects */}
          <div className="grid md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project) => {
              const progress = Math.min(100, Math.round((project.raised / project.targetAmount) * 100));
              return (
                <Link 
                  key={project.id} 
                  href="/mercado" 
                  className="project-card rounded-3xl overflow-hidden border border-[#D4CBBF] flex flex-col group"
                >
                  <div className="h-48 relative flex items-center justify-center overflow-hidden" style={{background: `linear-gradient(135deg, #0F3D2E 0%, #1A5C47 100%)`}}>
                    <div className="text-center text-white/80">
                      <Building2 className="w-11 h-11 mx-auto mb-2" />
                      <div className="text-xs uppercase tracking-widest">{project.type}</div>
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 text-xs font-medium text-[#0F3D2E]">
                      {project.year}
                    </div>
                  </div>
                  <div className="p-5 flex-1">
                    <div className="font-semibold text-xl tracking-tight group-hover:text-[#0F3D2E] transition-colors">{project.title}</div>
                    <div className="flex items-center gap-1.5 text-sm text-[#6B665F] mt-1">
                      <MapPin className="w-3.5 h-3.5" /> {project.location}
                    </div>

                    <div className="mt-5">
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-[#6B665F]">Recaudado</span>
                        <span className="font-medium">{progress}%</span>
                      </div>
                      <div className="h-1.5 bg-[#EDE6D9] rounded-full overflow-hidden mb-4">
                        <div className="progress-bar h-1.5 bg-[#0F3D2E] rounded-full" style={{ width: `${progress}%` }} />
                      </div>
                      <div className="flex justify-between text-sm">
                        <div>
                          <span className="font-semibold text-[#0F3D2E]">{formatEUR(project.tokenPrice)}</span>
                          <span className="text-[#6B665F] text-xs"> / token</span>
                        </div>
                        <div className="font-semibold text-[#0F3D2E]">{formatPercent(project.expectedYield)} yield</div>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <div className="text-xs text-[#0F3D2E] font-medium group-hover:underline">Ver en el Mercado →</div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link href="/mercado" className="text-sm text-[#0F3D2E] hover:underline">Explorar todos los proyectos en el Mercado →</Link>
          </div>
        </div>
      </section>

      {/* PARA INVERSORES */}
      <section id="inversores" className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-8 items-center">
          <div className="md:col-span-7">
            <div className="text-[#0F3D2E] uppercase tracking-widest text-xs mb-2">PARA INVERSORES</div>
            <h2 className="text-5xl tracking-[-1.5px] leading-[1.05] serif text-[#0F3D2E]">Accede a activos reales<br />con retornos predecibles</h2>
            <p className="mt-6 text-lg text-[#6B665F]">
              Ya no necesitas ser millonario para invertir en patrimonio. Compra desde un token. 
              Los retornos provienen de alquileres, eventos y revalorización — flujos de caja reales.
            </p>
          </div>
          <div className="md:col-span-5 bg-white rounded-3xl p-8 border border-[#D4CBBF]">
            <div className="space-y-6 text-sm">
              <div className="flex gap-4"><TrendingUp className="mt-0.5 w-5 h-5 text-[#0F3D2E] flex-shrink-0" /> <span><strong>Retail:</strong> Inversión desde 710 €. Diversifica en varios proyectos.</span></div>
              <div className="flex gap-4"><Shield className="mt-0.5 w-5 h-5 text-[#0F3D2E] flex-shrink-0" /> <span><strong>Institucionales:</strong> Cumplimiento CIP-0113: transferencias restringidas, listas blancas y controles automáticos.</span></div>
              <div className="flex gap-4"><Calendar className="mt-0.5 w-5 h-5 text-[#0F3D2E] flex-shrink-0" /> <span>Dividendos trimestrales una vez el activo opera. Liquidez futura en mercados secundarios.</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* PARA PROPIETARIOS */}
      <section id="propietarios" className="bg-white border-y border-[#D4CBBF] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-[#0F3D2E] tracking-[2px] text-xs mb-3">PARA PROPIETARIOS Y HEREDEROS</div>
          <h2 className="serif text-5xl tracking-[-1px] text-[#0F3D2E] mb-4">Financia la restauración sin vender ni endeudarte</h2>
          <p className="text-[#6B665F] text-lg max-w-lg mx-auto">
            Convierte tu propiedad en tokens. Recaudas capital inmediato para rehabilitarla y reactivarla. 
            Mantienes participación y generas ingresos futuros.
          </p>

          <button 
            onClick={() => setShowOwnerForm(true)} 
            className="mt-8 btn-copper px-10 py-4 text-base rounded-2xl font-semibold inline-flex items-center gap-3"
          >
            Solicitar análisis de mi propiedad <ArrowRight />
          </button>
          <div className="text-xs text-[#6B665F] mt-3">Respuesta en menos de 48 horas • Sin compromiso</div>
        </div>
      </section>

      {/* TECNOLOGÍA CIP-0113 */}
      <section id="tecnologia" className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <div className="inline-block bg-[#0F3D2E] text-white text-xs tracking-[3px] px-4 py-1 rounded-full mb-3">TECNOLOGÍA</div>
          <h2 className="serif text-[#0F3D2E] text-5xl tracking-[-1px]">Programmable Tokens con CIP-0113</h2>
          <p className="mt-3 text-[#6B665F]">La primera norma abierta de Cardano para activos regulados reales.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#D4CBBF] p-8 rounded-3xl">
            <h4 className="font-semibold text-lg mb-4">Por qué CIP-0113 es ideal para bienes raíces</h4>
            <ul className="space-y-3 text-[#6B665F]">
              <li className="flex gap-3"><Check className="text-[#0F3D2E] mt-1 flex-shrink-0 w-4 h-4" /> Cumplimiento (KYC, listas de sanciones, jurisdicciones) ejecutado directamente en cada transferencia.</li>
              <li className="flex gap-3"><Check className="text-[#0F3D2E] mt-1 flex-shrink-0 w-4 h-4" /> Tokens nativos de Cardano — sin contratos proxy frágiles ni riesgos de upgrade.</li>
              <li className="flex gap-3"><Check className="text-[#0F3D2E] mt-1 flex-shrink-0 w-4 h-4" /> Reglas modulares: lock-ups, congelaciones, denylists y governance según cada proyecto.</li>
            </ul>
            <Link href="/tecnica" className="inline-flex mt-6 text-sm font-medium text-[#0F3D2E] hover:underline items-center gap-1">
              Leer explicación técnica completa → 
            </Link>
          </div>
          <div className="bg-[#0F3D2E] text-white p-8 rounded-3xl flex flex-col">
            <div className="font-mono uppercase tracking-[3px] text-xs opacity-75 mb-2">OPEN SOURCE</div>
            <div className="text-2xl leading-tight mb-auto">Los tokens que emitimos son completamente programables y verificables.</div>
            <div className="text-sm mt-8 opacity-80 space-y-1">
              <a href="https://cardanofoundation.org/blog/programmable-tokens-cardano" target="_blank" className="underline">Blog oficial Cardano Foundation →</a><br />
              <a href="https://github.com/cardano-foundation/cip113-programmable-tokens" target="_blank" className="underline">Repositorio CIP-0113 →</a><br />
              <a href="https://preview.programmabletokens.xyz/" target="_blank" className="underline">Entorno preview (testnet) →</a>
            </div>
            <Link href="/legal" className="mt-auto pt-6 inline-block text-sm underline opacity-90 hover:opacity-100">
              Ver marco legal aplicable en Argentina →
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS + CTA FINAL */}
      <section className="bg-white py-16 border-t border-[#D4CBBF]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div className="border border-[#D4CBBF] p-8 rounded-3xl">
              “Invertí en la Fábrica El Vapor hace 9 meses. Ya recibí el primer dividendo y el proyecto va por buen camino. Transparencia total gracias a la cadena.”
              <div className="mt-5 text-[#6B665F] text-xs">— Laura M., inversora retail (Barcelona)</div>
            </div>
            <div className="border border-[#D4CBBF] p-8 rounded-3xl">
              “Como fondo institucional valoramos el estándar CIP-0113. Las restricciones de transferencia y la gobernanza programable nos dan la seguridad regulatoria que necesitábamos.”
              <div className="mt-5 text-[#6B665F] text-xs">— Javier R., Head of Alternatives en fondo de pensiones</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link href="/mercado" className="btn-primary px-9 py-4 rounded-2xl font-semibold text-lg inline-flex items-center gap-2 shadow-sm hover:shadow-md transition-all">
            Ver todos los proyectos <ArrowRight />
          </Link>
          <div className="mt-4 text-xs text-[#6B665F]">Plataforma de demostración • Los proyectos son conceptuales y los números simulados</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#D4CBBF] bg-[#F5F1E9] text-xs text-[#6B665F]">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-y-4 md:items-center justify-between">
          <div>© Restaurador 2026 — Demo conceptual de tokenización RWA sobre Cardano</div>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <Link href="/tecnica" className="hover:text-[#0F3D2E]">Explicación Técnica (CIP-0113)</Link>
            <Link href="/legal" className="hover:text-[#0F3D2E]">Marco Legal Argentina</Link>
            <span>Esto no constituye asesoramiento financiero ni oferta de valores.</span>
            <a href="https://github.com/cardano-foundation/cip113-programmable-tokens" target="_blank" className="hover:text-[#0F3D2E]">CIP-0113</a>
          </div>
        </div>
      </footer>

      {/* OWNER FORM MODAL */}
      <AnimatePresence>
        {showOwnerForm && (
          <div className="fixed inset-0 bg-black/60 z-[95] flex items-center justify-center p-4" onClick={() => setShowOwnerForm(false)}>
            <motion.div 
              onClick={e => e.stopPropagation()}
              initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0}}
              className="bg-white w-full max-w-lg rounded-3xl p-8 modal"
            >
              <div className="flex justify-between mb-1">
                <div className="font-semibold text-2xl">Tokeniza tu propiedad</div>
                <button onClick={() => setShowOwnerForm(false)}><X /></button>
              </div>
              <p className="text-[#6B665F] mb-7">Cuéntanos sobre tu activo. Te contactaremos para analizar la viabilidad de tokenización.</p>

              <form onSubmit={handleOwnerSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input className="input rounded-2xl px-4 py-3" placeholder="Nombre completo *" value={ownerForm.name} onChange={e=>setOwnerForm({...ownerForm, name:e.target.value})} />
                  <input className="input rounded-2xl px-4 py-3" placeholder="Email *" type="email" value={ownerForm.email} onChange={e=>setOwnerForm({...ownerForm, email:e.target.value})} />
                </div>
                <input className="input w-full rounded-2xl px-4 py-3" placeholder="Teléfono" value={ownerForm.phone} onChange={e=>setOwnerForm({...ownerForm, phone:e.target.value})} />
                <input className="input w-full rounded-2xl px-4 py-3" placeholder="Ubicación de la propiedad *" value={ownerForm.location} onChange={e=>setOwnerForm({...ownerForm, location:e.target.value})} />

                <select className="input w-full rounded-2xl px-4 py-3" value={ownerForm.propertyType} onChange={e=>setOwnerForm({...ownerForm, propertyType:e.target.value})}>
                  <option value="">Tipo de propiedad</option>
                  <option>Fábrica / Industrial</option>
                  <option>Inmueble histórico / Palacio</option>
                  <option>Teatro o equipamiento cultural</option>
                  <option>Molino / Patrimonio industrial</option>
                  <option>Otro en desuso</option>
                </select>

                <textarea className="input w-full rounded-2xl px-4 py-3 min-h-[92px]" placeholder="Breve descripción del estado y potencial" value={ownerForm.description} onChange={e=>setOwnerForm({...ownerForm, description:e.target.value})} />
                
                <input className="input w-full rounded-2xl px-4 py-3" placeholder="Valor estimado aproximado (€)" value={ownerForm.estimatedValue} onChange={e=>setOwnerForm({...ownerForm, estimatedValue:e.target.value})} />

                <button 
                  type="submit" 
                  disabled={isSubmittingOwner}
                  className="mt-2 w-full py-4 rounded-2xl bg-[#0F3D2E] text-white font-semibold disabled:opacity-70"
                >
                  {isSubmittingOwner ? "Enviando solicitud..." : "Enviar solicitud"}
                </button>
                <div className="text-center text-xs text-[#6B665F]">Tu información es confidencial. Te contactaremos personalmente.</div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
