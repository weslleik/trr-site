"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/whatsapp";

const links = [
  { label: "Início",   href: "#hero" },
  { label: "Sobre",    href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Vídeo",    href: "#video" },
  { label: "Contato",  href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-diesel-border" : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero">
        <img src="/logo.png" alt="Diamante Diesel" className="h-10 w-auto" />
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm tracking-wider text-gray-400 hover:text-diesel-orange transition-colors uppercase"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 border border-diesel-orange text-diesel-orange hover:bg-diesel-orange hover:text-black px-5 py-2 rounded-full text-sm font-semibold transition-all"
        >
          Pedir cotação
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className={`w-6 h-0.5 bg-white transition-all mb-1 ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all mb-1 ${open ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          className="md:hidden bg-black/95 border-t border-diesel-border px-6 py-6 flex flex-col gap-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-300 hover:text-diesel-orange transition-colors uppercase tracking-widest text-sm"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center border border-diesel-orange text-diesel-orange px-5 py-2 rounded-full text-sm font-semibold"
          >
            Pedir cotação
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
