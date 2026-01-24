import { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';

const WhatsAppPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Verifica se já foi fechado nesta sessão
      const wasClosed = sessionStorage.getItem('whatsappPopupClosed');
      if (!wasClosed) {
        setIsVisible(true);
      }
    }, 40000); // 40 segundos

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('whatsappPopupClosed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-fade-in">
      <div className="relative bg-card rounded-3xl shadow-2xl max-w-md w-full p-8 animate-scale-in">
        {/* Botão Fechar */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fechar"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Conteúdo */}
        <div className="text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>

          <h3 className="font-display text-2xl font-bold text-foreground mb-3">
            Precisa de ajuda?
          </h3>

          <p className="text-muted-foreground mb-2">
            <span className="font-bold text-primary">35 anos de experiência</span> em conserto de Lava e Seca e Geladeiras.
          </p>

          <p className="text-muted-foreground mb-6">
            Fale agora com um especialista!
          </p>

          <a
            href="https://wa.me/5531984101104?text=Olá"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors w-full"
            onClick={handleClose}
          >
            <MessageCircle className="w-6 h-6" />
            Chamar no WhatsApp
          </a>

          <button
            onClick={handleClose}
            className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Agora não, obrigado
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppPopup;
