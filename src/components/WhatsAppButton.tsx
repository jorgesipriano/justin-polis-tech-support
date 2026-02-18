import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5531984101104?text=Olá"
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        if (window.gtag_report_conversion) {
          e.preventDefault();
          window.gtag_report_conversion("https://wa.me/5531984101104?text=Olá");
        }
      }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 animate-pulse-slow"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
