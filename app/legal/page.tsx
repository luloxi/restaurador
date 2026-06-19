import React from 'react';
import Link from 'next/link';
import Logo from '../../components/Logo';
import { ArrowLeft, ArrowRight, AlertTriangle, FileText, Building2, Scale, Shield } from 'lucide-react';

export const metadata = {
  title: "Marco Legal en Argentina | Tokenización | Restaurador",
  description: "Explicación del marco regulatorio argentino para la tokenización de activos reales (RWA) según las resoluciones de la CNV (1069, 1081, 1087 y actualizaciones).",
};

export default function LegalPage() {
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
              <Link href="/tecnica" className="hover:text-[#0F3D2E]">Técnica</Link>
              <Link href="/legal" className="hover:text-[#0F3D2E] font-medium">Legal</Link>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-3 text-sm">
            <Link href="/mercado" className="btn-primary px-4 py-1.5 rounded-xl text-xs font-semibold">Mercado</Link>
            <Link href="/" className="btn-copper px-4 py-1.5 rounded-xl text-xs font-semibold">Tokenizar</Link>
          </div>
        </div>
      </nav>

      <div className="pt-20 max-w-4xl mx-auto px-6 pb-24">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B87333] text-white text-xs tracking-widest mb-4">
            ARGENTINA
          </div>
          <h1 className="text-5xl md:text-6xl tracking-[-1.8px] serif text-[#0F3D2E] leading-none mb-4">
            Marco Legal para la Tokenización en Argentina
          </h1>
          <p className="text-xl text-[#6B665F]">
            Cómo encaja Restaurador en el régimen regulatorio de la Comisión Nacional de Valores (CNV).
          </p>
        </div>

        {/* Disclaimer fuerte */}
        <div className="bg-[#FEF3E2] border border-[#B87333]/30 text-[#8B5E2B] rounded-2xl p-6 mb-12 flex gap-4">
          <AlertTriangle className="w-6 h-6 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <strong>Importante:</strong> Esta página tiene carácter meramente informativo y educativo. 
            No constituye asesoramiento legal, financiero ni fiscal. Las regulaciones pueden cambiar. 
            Cualquier decisión de inversión o estructuración debe realizarse con asesoramiento profesional 
            calificado y con los órganos competentes.
          </div>
        </div>

        {/* Contexto */}
        <section className="mb-14">
          <h2 className="flex items-center gap-3 text-3xl serif tracking-tight text-[#0F3D2E] mb-4">
            <Scale className="w-7 h-7" /> Contexto regulatorio
          </h2>
          <div className="text-[#6B665F] space-y-4 text-[15px]">
            <p>
              En 2025 la Comisión Nacional de Valores (CNV) de Argentina aprobó un marco pionero en Latinoamérica 
              para la <strong>representación digital de valores negociables</strong> utilizando tecnologías de registro distribuido 
              (blockchain / DLT). Este régimen se fue ampliando a lo largo de 2025 y 2026 mediante varias resoluciones.
            </p>
            <p>
              Las principales resoluciones que conforman el régimen actual son:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>RG 1069/2025</strong> — Primera etapa: tokenización de fideicomisos financieros y fondos cerrados con subyacentes de activos reales (RWA).</li>
              <li><strong>RG 1081 y 1087/2025</strong> — Ampliación a acciones, obligaciones negociables, certificados de participación y otros instrumentos.</li>
              <li>Extensiones posteriores del sandbox regulatorio (hasta fines de 2027 en algunas versiones).</li>
            </ul>
          </div>
        </section>

        {/* Estructura típica para inmuebles */}
        <section className="mb-14">
          <h2 className="text-3xl serif tracking-tight text-[#0F3D2E] mb-4">Cómo se estructura normalmente la tokenización inmobiliaria</h2>
          
          <div className="bg-white rounded-3xl border border-[#D4CBBF] p-8 mb-6">
            <div className="uppercase text-xs tracking-widest text-[#0F3D2E] mb-2">Vehículo principal</div>
            <h3 className="font-semibold text-2xl mb-3">Fideicomiso Financiero</h3>
            <p className="text-[#6B665F]">
              El inmueble (o los derechos sobre él) se aporta a un <strong>Fideicomiso Financiero</strong> regulado por la Ley 24.441 
              y autorizado por la CNV. El fideicomiso emite <strong>Certificados de Participación</strong> o valores representativos de deuda.
            </p>
            <div className="mt-6 text-sm">
              <strong>Importante:</strong> Los tokens <span className="font-medium">no representan directamente el inmueble</span> 
              (derechos reales sobre el bien), sino los <span className="font-medium">derechos personales</span> sobre los certificados 
              del fideicomiso.
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            {[
              { title: "1. Constitución", text: "Se constituye el fideicomiso y se transfiere el activo inmobiliario (o derechos) al fiduciario." },
              { title: "2. Autorización CNV", text: "Se solicita la autorización de oferta pública del fideicomiso y sus valores." },
              { title: "3. Representación digital", text: "Se solicita la representación digital adicional de los certificados según el régimen de tokenización." },
            ].map((step, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-[#D4CBBF]">
                <div className="font-medium mb-1">{step.title}</div>
                <div className="text-[#6B665F]">{step.text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Requisitos clave */}
        <section className="mb-14">
          <h2 className="text-3xl serif tracking-tight text-[#0F3D2E] mb-6">Requisitos clave según la CNV</h2>
          
          <div className="space-y-4">
            {[
              { icon: <FileText />, title: "Oferta pública autorizada", text: "Los valores que se tokenizan deben contar con autorización de oferta pública de la CNV." },
              { icon: <Building2 />, title: "Depósito en ADCVN", text: "Los valores originales deben depositarse en un Agente Depositario Central de Valores Negociables." },
              { icon: <Scale />, title: "PSAV (si corresponde)", text: "Las plataformas que ofrezcan o negocien los tokens suelen requerir registro como Proveedor de Servicios de Activos Virtuales (Ley 27.739)." },
              { icon: <Shield />, title: "Segregación patrimonial", text: "Los activos de los inversores deben estar claramente segregados del patrimonio de la plataforma o emisor." },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 bg-white border border-[#D4CBBF] p-6 rounded-2xl">
                <div className="text-[#0F3D2E] flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-[#6B665F] mt-1 text-sm">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ventajas del marco argentino */}
        <section className="mb-14">
          <h2 className="text-2xl serif tracking-tight text-[#0F3D2E] mb-4">¿Qué aporta el marco actual?</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-[#6B665F]">
            <li>• Claridad regulatoria (antes de 2025 era más gris)</li>
            <li>• Posibilidad de realizar oferta pública de tokens</li>
            <li>• Protección al inversor mediante supervisión de la CNV</li>
            <li>• Sandbox regulatorio que permite innovación controlada</li>
            <li>• Equivalencia funcional entre representación tradicional y digital</li>
            <li>• Posibilidad de fraccionar inversiones en inmuebles de forma regulada</li>
          </ul>
        </section>

        {/* Riesgos y recomendaciones */}
        <section className="mb-12 bg-white border border-[#D4CBBF] rounded-3xl p-8">
          <h2 className="text-xl font-semibold mb-3">Riesgos y recomendaciones</h2>
          <div className="text-[#6B665F] text-sm space-y-2">
            <p>• La tokenización de inmuebles en Argentina se realiza principalmente sobre <strong>derechos en fideicomisos</strong>, no sobre el título de propiedad directo.</p>
            <p>• La liquidez secundaria depende del desarrollo del mercado y de las reglas específicas de cada emisión.</p>
            <p>• Existen obligaciones de información, compliance y posibles requisitos de idoneidad del inversor.</p>
            <p>• El régimen todavía está en proceso de maduración. Siempre verificá la versión más actual de las Normas de la CNV.</p>
          </div>
          <div className="mt-6 text-xs text-[#B87333]">
            Recomendamos fuertemente consultar con un estudio jurídico especializado en mercado de capitales y con un contador.
          </div>
        </section>

        {/* Fuentes */}
        <div className="text-xs text-[#6B665F]">
          Fuentes principales: Resoluciones Generales de la CNV (1069/2025, 1081/2025, 1087/2025 y actualizaciones), 
          sitio oficial de la CNV y comunicados públicos.
          <br /><br />
          Esta información no reemplaza el análisis legal personalizado.
        </div>
      </div>

      <footer className="border-t border-[#D4CBBF] py-8 text-center text-xs text-[#6B665F]">
        <Link href="/" className="hover:text-[#0F3D2E]">← Volver a Restaurador</Link>
      </footer>
    </div>
  );
}
