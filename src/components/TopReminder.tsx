import { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';

const TopReminder = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const wasClosed = sessionStorage.getItem('topReminderClosed');
    if (wasClosed) return;
    const timer = setTimeout(() => setIsVisible(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('topReminderClosed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-40 pointer-events-none w-[92%] max-w-md animate-fade-in">
      <div className="pointer-events-auto bg-card/95 backdrop-blur-md border border-primary/20 shadow-card rounded-full pl-4 pr-2 py-2 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
          <Sparkles className="w-4 h-4 text-primary" />
        </div>
        <a
          href="https://wa.me/5531984101104?text=Olá"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          Problema no eletrodoméstico? <span className="text-primary font-bold">Chama a SERVIBEL!</span>
        </a>
        <button
          onClick={handleClose}
          className="w-7 h-7 rounded-full hover:bg-muted flex items-center justify-center text-muted-foreground shrink-0"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TopReminder;