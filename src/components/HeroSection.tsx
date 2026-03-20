"use client";

import { motion } from "framer-motion";
import WhatsAppButton from "./ui/WhatsAppButton";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-diesel-dark"
    >
      {/* Grid de fundo futurista */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradiente central */}
      <div className="absolute inset-0 bg-gradient-radial from-diesel-orange/10 via-transparent to-transparent" />

      {/* Círculo de glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-diesel-orange/5 blur-3xl" />

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          className="text-diesel-orange text-sm tracking-[0.4em] uppercase mb-6 font-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Fornecimento de combustível
        </motion.p>

        <motion.h1
          className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-none tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          DIESEL QUE
          <br />
          <span className="text-diesel-orange">MOVE O BRASIL</span>
        </motion.h1>

        <motion.p
          className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-10 font-body font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Fornecimento ágil, seguro e confiável para frotas, agro e empresas.
          Entregamos onde você precisa.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <WhatsAppButton message="Olá! Quero uma cotação de diesel." label="Solicitar cotação" />
          <a
            href="#sobre"
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:border-diesel-orange hover:text-diesel-orange px-8 py-4 rounded-full transition-all text-lg font-body"
          >
            Conheça a TRR
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-0.5 h-8 bg-diesel-orange/50 rounded-full"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
