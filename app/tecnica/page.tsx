import React from 'react';
import Link from 'next/link';
import Logo from '../../components/Logo';
import { ArrowLeft, ArrowRight, Shield, Zap, Lock, Globe, Code2, Check } from 'lucide-react';

export const metadata = {
  title: "Explicación Técnica | CIP-0113 y Cardano | Restaurador",
  description: "Todo lo que necesitás saber sobre CIP-0113: tokens programables nativos de Cardano, cómo funcionan, ventajas para tokenización de activos reales (RWA) y por qué los elegimos para Restaurador.",
};

export default function TecnicaPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E9] text-[#2C2C2C]">
      {/* Consistent header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F1E9]/95 backdrop-blur-md border-b border-[#D4CBBF]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/mercado" 
              className="btn-primary px-6 py-2 rounded-2xl text-sm font-semibold flex items-center gap-2"
            >
              Ir al Mercado <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/" 
              className="btn-copper px-6 py-2 rounded-2xl text-sm font-semibold"
            >
              Tokenizar mi propiedad
            </Link>

            <div className="flex items-center gap-3 pl-4 border-l border-[#D4CBBF] text-xs tracking-wider text-[#6B665F]">
              <Link href="/tecnica" className="hover:text-[#0F3D2E] font-medium">Técnica</Link>
              <Link href="/legal" className="hover:text-[#0F3D2E]">Legal</Link>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-3 text-sm">
            <Link href="/mercado" className="btn-primary px-4 py-1.5 rounded-xl text-xs font-semibold">Mercado</Link>
            <Link href="/" className="btn-copper px-4 py-1.5 rounded-xl text-xs font-semibold">Tokenizar</Link>
          </div>
        </div>
      </nav>

      <div className="pt-20 max-w-4xl mx-auto px-6 pb-20">
        <div className="mb-12">
          <div className="uppercase tracking-[3px] text-xs text-[#0F3D2E] mb-3">TECNOLOGÍA</div>
          <h1 className="text-6xl tracking-[-2px] serif text-[#0F3D2E] leading-none mb-4">
            CIP-0113:<br />Tokens Programables en Cardano
          </h1>
          <p className="text-xl text-[#6B665F] max-w-2xl">
            La tecnología que permite que los tokens de Restaurador lleven reglas de cumplimiento integradas de forma nativa y segura.
          </p>
        </div>

        {/* Qué es Cardano */}
        <section className="mb-16">
          <h2 className="text-3xl serif tracking-tight text-[#0F3D2E] mb-4">Cardano y sus activos nativos</h2>
          <div className="prose prose-neutral max-w-none text-[#2C2C2C]">
            <p className="text-lg text-[#6B665F]">
              Cardano es una blockchain de tercera generación basada en investigación académica. 
              Una de sus mayores fortalezas es su modelo de <strong>activos nativos</strong>: cualquier token que se emite en la red 
              es tratado de la misma forma que el ADA. No necesita contratos inteligentes adicionales para existir ni para transferirse.
            </p>
            <p>
              Esto genera grandes ventajas: baja latencia, fees muy bajos, y compatibilidad nativa con wallets y exploradores.
              Sin embargo, hasta hace poco, los activos nativos eran “inalterables”: una vez emitidos, no se podían imponer reglas 
              de transferencia (como KYC, listas blancas, congelamiento por orden judicial, etc.).
            </p>
          </div>
        </section>

        {/* El problema que resuelve CIP-0113 */}
        <section className="mb-16 bg-white border border-[#D4CBBF] rounded-3xl p-9">
          <h2 className="text-3xl serif tracking-tight text-[#0F3D2E] mb-6">El problema que resuelve CIP-0113</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-sm uppercase tracking-widest text-[#6B665F] mb-2">ANTES</div>
              <ul className="space-y-2 text-[#6B665F]">
                <li>• Los tokens nativos no podían tener reglas de cumplimiento</li>
                <li>• Cada emisor debía crear soluciones custom (difícil de escalar)</li>
                <li>• Las wallets y exploradores no sabían cómo interpretar reglas</li>
                <li>• Las instituciones no confiaban en soluciones no estandarizadas</li>
              </ul>
            </div>
            <div>
              <div className="text-sm uppercase tracking-widest text-[#0F3D2E] mb-2">CON CIP-0113</div>
              <ul className="space-y-2">
                <li className="flex gap-2"><Check className="mt-1 w-4 h-4 text-[#0F3D2E]" /> Reglas embebidas que se ejecutan en cada transferencia</li>
                <li className="flex gap-2"><Check className="mt-1 w-4 h-4 text-[#0F3D2E]" /> Estándar abierto (no depende de un solo equipo)</li>
                <li className="flex gap-2"><Check className="mt-1 w-4 h-4 text-[#0F3D2E]" /> Funciona con la infraestructura existente de Cardano</li>
                <li className="flex gap-2"><Check className="mt-1 w-4 h-4 text-[#0F3D2E]" /> Modular y extensible</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="mb-16">
          <h2 className="text-3xl serif tracking-tight text-[#0F3D2E] mb-6">Cómo funciona CIP-0113</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-2xl bg-[#0F3D2E] text-white flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold text-xl">Tokens programables nativos</div>
                <p className="mt-1 text-[#6B665F]">
                  Los tokens siguen siendo activos nativos de Cardano, pero ahora pueden tener lógica de validación asociada. 
                  Las reglas viajan con el token y se ejecutan automáticamente en la red.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-2xl bg-[#0F3D2E] text-white flex items-center justify-center flex-shrink-0">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold text-xl">Modelo de custodia compartida + Registro en cadena</div>
                <p className="mt-1 text-[#6B665F]">
                  Todos los tokens programables se custodian en un script compartido. Un registro on-chain (lista enlazada ordenada) 
                  indica qué política de validación le corresponde a cada token. Esto permite que los validadores sepan exactamente 
                  qué reglas aplicar.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-2xl bg-[#0F3D2E] text-white flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold text-xl">Subestándares modulares</div>
                <p className="mt-1 text-[#6B665F]">
                  El estándar base es extensible. Cada proyecto puede elegir (o crear) un subestándar con las reglas específicas 
                  que necesita: KYC, listas blancas/denegadas, congelamiento, períodos de lock-up, etc.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Características clave */}
        <section className="mb-16">
          <h2 className="text-3xl serif tracking-tight text-[#0F3D2E] mb-6">Características clave para Restaurador</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: <Lock />, title: "Reglas de transferencia", text: "Solo permiten transferir entre wallets verificadas (KYC/AML)." },
              { icon: <Shield />, title: "Congelamiento y decomiso", text: "Posibilidad de congelar tokens por orden judicial o regulatoria (freeze & seize)." },
              { icon: <Zap />, title: "Lock-ups programados", text: "Períodos de bloqueo durante la fase de restauración para alinear incentivos." },
              { icon: <Globe />, title: "Compatibilidad nativa", text: "Los tokens aparecen en wallets y exploradores de Cardano sin integración especial." },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-[#D4CBBF] rounded-3xl p-6 flex gap-4">
                <div className="text-[#0F3D2E] mt-1">{item.icon}</div>
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-sm text-[#6B665F] mt-1">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ventajas frente a otras opciones */}
        <section className="mb-16 bg-white p-9 rounded-3xl border border-[#D4CBBF]">
          <h2 className="text-2xl serif tracking-tight text-[#0F3D2E] mb-4">¿Por qué no usar Ethereum u otras cadenas?</h2>
          <div className="space-y-4 text-[#6B665F]">
            <p>
              En Ethereum los security tokens suelen requerir contratos proxy complejos (ERC-1400, ERC-3643, etc.). 
              Esto introduce riesgo de smart contract, costos de gas elevados y necesidad de auditorías constantes.
            </p>
            <p>
              <strong>Cardano + CIP-0113</strong> resuelve esto de forma más elegante:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Los tokens son nativos (no envueltos en contratos)</li>
              <li>La lógica de cumplimiento vive en el propio token</li>
              <li>Menores costos y mayor predictibilidad de fees</li>
              <li>Arquitectura de investigación peer-reviewed</li>
              <li>El estándar es abierto y mantenido por la Fundación Cardano</li>
            </ul>
          </div>
        </section>

        {/* Recursos */}
        <section>
          <h2 className="text-2xl serif tracking-tight text-[#0F3D2E] mb-4">Recursos oficiales</h2>
          <div className="space-y-2 text-sm">
            <a href="https://cardanofoundation.org/blog/programmable-tokens-cardano" target="_blank" className="block hover:underline">→ Blog oficial: Programmable Tokens for Cardano (Cardano Foundation)</a>
            <a href="https://github.com/cardano-foundation/cip113-programmable-tokens" target="_blank" className="block hover:underline">→ Repositorio oficial del estándar CIP-0113</a>
            <a href="https://preview.programmabletokens.xyz/" target="_blank" className="block hover:underline">→ Entorno de pruebas (Preview Testnet)</a>
          </div>
          <p className="mt-8 text-xs text-[#6B665F]">
            Esta página tiene fines educativos. El estándar CIP-0113 continúa evolucionando.
          </p>
        </section>
      </div>

      <footer className="border-t border-[#D4CBBF] py-8 text-center text-xs text-[#6B665F]">
        <Link href="/" className="hover:text-[#0F3D2E]">← Volver a Restaurador</Link>
      </footer>
    </div>
  );
}
