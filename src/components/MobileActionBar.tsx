import { Phone, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5531984101104?text=Olá';
const TEL_URL = 'tel:+5531984101104';

const MobileActionBar = () => {
  const handleWhats = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.gtag_report_conversion) {
      e.preventDefault();
      window.gtag_report_conversion(WHATSAPP_URL);
    }
  };

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2 border-t border-border shadow-2xl"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a
        href={TEL_URL}
        className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-bold text-base"
        aria-label="Ligar agora para SERVIBEL"
      >
        <Phone className="w-5 h-5" />
        Ligar Agora
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhats}
        className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 font-bold text-base"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp
      </a>
    </div>
  );
};

export default MobileActionBar;