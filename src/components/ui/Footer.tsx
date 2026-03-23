"use client";

import { getWhatsAppLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer id="contato" className="bg-black border-t border-diesel-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <img src="/logo.png" alt="Diamante Diesel" className="h-12 w-auto mb-4" />
            <p className="text-gray-500 text-sm leading-relaxed">
              Fornecimento de diesel com agilidade, segurança e tecnologia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wider uppercase text-sm">Navegação</h4>
            <ul className="space-y-2">
              {["#hero","#sobre","#produtos","#video"].map((href, i) => (
                <li key={href}>
                  <a href={href} className="text-gray-500 hover:text-diesel-orange transition-colors text-sm">
                    {["Início","Sobre","Produtos","Vídeo"][i]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wider uppercase text-sm">Contato</h4>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm"
            >
              WhatsApp
            </a>
            <p className="text-gray-600 text-sm mt-2">contato@diamantediesel.com.br</p>
            <p className="text-gray-600 text-sm mt-1">(49) 99810-1516</p>
          </div>
        </div>

        <div className="border-t border-diesel-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-700 text-xs">
            © {new Date().getFullYear()} Diamante Diesel. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-xs">CNPJ: 27.373.838/0001-87</p>
        </div>
      </div>
    </footer>
  );
}
