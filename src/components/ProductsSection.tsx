"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import WhatsAppButton from "./ui/WhatsAppButton";

const products = [
  {
    name: "Diesel S-10",
    tag: "Alta performance",
    description:
      "Combustível de baixo teor de enxofre, ideal para frotas modernas e máquinas agrícolas de última geração. Menos emissões, mais eficiência.",
    features: ["Teor de enxofre ≤ 10 ppm", "Motor mais limpo", "Norma Euro 6"],
    message: "Quero cotação de Diesel S-10.",
  },
  {
    name: "Diesel S-500",
    tag: "Uso geral",
    description:
      "Opção versátil para frotas convencionais e equipamentos de grande porte. Disponibilidade garantida para grandes volumes.",
    features: ["Teor de enxofre ≤ 500 ppm", "Ampla compatibilidade", "Grandes volumes"],
    message: "Quero cotação de Diesel S-500.",
  },
  {
    name: "Arla 32",
    tag: "Complementar",
    description:
      "Solução redutora de óxido de nitrogênio para veículos com sistema SCR. Entrega junto com o diesel, sem parar sua frota.",
    features: ["Norma ISO 22241", "Entrega combinada", "Reduz emissão de NOx"],
    message: "Quero cotação de Arla 32.",
  },
];

export default function ProductsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="produtos" className="py-32 bg-diesel-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-diesel-orange text-sm tracking-[0.4em] uppercase mb-4">Nossos produtos</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white">
            COMBUSTÍVEL PARA CADA<br />
            <span className="text-diesel-orange">NECESSIDADE</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              className="bg-diesel-muted border border-diesel-border rounded-2xl p-8 flex flex-col hover:border-diesel-orange/60 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="font-heading font-bold text-2xl text-white group-hover:text-diesel-orange transition-colors">
                  {p.name}
                </h3>
                <span className="text-xs border border-diesel-orange/40 text-diesel-orange px-2 py-1 rounded-full whitespace-nowrap ml-2">
                  {p.tag}
                </span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                {p.description}
              </p>

              <ul className="space-y-2 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-500 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-diesel-orange flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/5500000000000?text=${encodeURIComponent(p.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center border border-diesel-border text-gray-400 hover:border-diesel-orange hover:text-diesel-orange py-3 rounded-full text-sm transition-all"
              >
                Pedir cotação
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA  */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <WhatsAppButton label="Falar com um consultor" />
        </motion.div>
      </div>
    </section>
  );
}
