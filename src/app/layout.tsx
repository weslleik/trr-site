import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diamante Diesel | Fornecimento de Combustível",
  description:
    "Fornecimento de diesel com agilidade, segurança e qualidade. Atendemos empresas, frotas e agro em toda a região.",
  openGraph: {
    title: "Diamante Diesel",
    description: "Seu parceiro em combustível.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
