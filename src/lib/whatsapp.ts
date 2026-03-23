const WHATSAPP_NUMBER = "49999463791"; 

export function getWhatsAppLink(message?: string): string {
  const text = message ?? "Olá! Vim pelo site e gostaria de uma cotação de diesel.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
