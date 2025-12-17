import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fale <span className="text-primary">conosco</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Entre em contato agora mesmo e solicite seu orçamento sem compromisso.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5531984101104?text=Olá"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:border-accent/50 hover:shadow-lg transition-all duration-300 text-center"
          >
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
              <MessageCircle className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
            </div>
            <h3 className="font-display font-bold text-foreground mb-2">WhatsApp</h3>
            <p className="text-muted-foreground text-sm">(31) 98410-1104</p>
          </a>

          {/* Telefone */}
          <a
            href="tel:+5531984101104"
            className="group bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 text-center"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <Phone className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-display font-bold text-foreground mb-2">Telefone</h3>
            <p className="text-muted-foreground text-sm">(31) 98410-1104</p>
          </a>

          {/* Endereço */}
          <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display font-bold text-foreground mb-2">Endereço</h3>
            <p className="text-muted-foreground text-sm">
              Rua Pedro Moreira do Nasc. 120
              <br />
              Bairro Kátia, Ribeirão das Neves
            </p>
          </div>

          {/* Horário */}
          <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display font-bold text-foreground mb-2">Horário</h3>
            <p className="text-muted-foreground text-sm">
              Segunda a Sábado
              <br />
              08:00 - 18:00
            </p>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.3!2d-44.1!3d-19.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDQ4JzAwLjAiUyA0NMKwMDYnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização SERVIBEL"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
