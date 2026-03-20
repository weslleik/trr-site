"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "6+",  label: "Anos de mercado" },
  { value: "500+", label: "Clientes ativos" },
  { value: "24h",  label: "Atendimento" },
  { value: "99%",  label: "Satisfação" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-32 bg-diesel-gray" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-diesel-orange text-sm tracking-[0.4em] uppercase mb-4">Sobre nós</p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
              SUA PARCEIRA EM<br />
              <span className="text-diesel-orange">COMBUSTÍVEL</span>
            </h2>
            <div className="divider" />
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              A TRR nasceu com um propósito claro: entregar diesel com a agilidade que o agronegócio e as frotas precisam.
              Operamos com frota própria, tecnologia de rastreamento e um time dedicado a garantir que sua operação nunca pare.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Com mais de 6 anos de experiência no setor, somos referência em fornecimento de combustível para
              empresas de transporte, construtoras, cooperativas e produtores rurais.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="bg-diesel-muted border border-diesel-border rounded-xl p-6 hover:border-diesel-orange/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <div className="font-heading font-bold text-4xl text-diesel-orange mb-1">
                  {s.value}
                </div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
