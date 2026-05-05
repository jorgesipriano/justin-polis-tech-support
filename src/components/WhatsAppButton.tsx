import { MessageCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import tecnicoAvatar from '@/assets/tecnico-avatar.png';

const WHATS_URL = 'https://wa.me/5531984101104?text=Olá';

const WhatsAppButton = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      if (!dismissed) setShowBubble(true);
    }, 6000);
    return () => clearTimeout(t);
  }, [dismissed]);

  const handleClick = (e: React.MouseEvent) => {
    if (window.gtag_report_conversion) {
      e.preventDefault();
      window.gtag_report_conversion(WHATS_URL);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {showBubble && !dismissed && (
        <a
          href={WHATS_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="relative flex items-center gap-3 bg-white rounded-2xl shadow-2xl pl-2 pr-4 py-2 max-w-[260px] animate-in fade-in slide-in-from-bottom-2 duration-500 border border-border hover:shadow-xl transition-shadow"
          aria-label="Mensagem do técnico SERVIBEL"
        >
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setDismissed(true);
              setShowBubble(false);
            }}
            aria-label="Fechar mensagem"
            className="absolute -top-2 -left-2 bg-muted hover:bg-border rounded-full p-1 shadow"
          >
            <X className="w-3 h-3 text-foreground" />
          </button>
          <img
            src={tecnicoAvatar}
            alt="Técnico SERVIBEL"
            width={48}
            height={48}
            loading="lazy"
            className="w-12 h-12 rounded-full object-cover bg-secondary shrink-0"
          />
          <div className="text-left">
            <p className="text-xs font-semibold text-foreground leading-tight">Técnico SERVIBEL</p>
            <p className="text-sm text-foreground leading-snug">Olá 👋 Posso ajudar?</p>
          </div>
          <span className="absolute -bottom-1 right-8 w-3 h-3 bg-white border-r border-b border-border rotate-45"></span>
        </a>
      )}
      <a
        href={WHATS_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 animate-pulse-slow"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
