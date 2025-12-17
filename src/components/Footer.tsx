import { Phone, MapPin, Mail } from 'lucide-react';
import logo from '@/assets/logo-servibel.jpeg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="SERVIBEL" 
                className="h-12 w-12 rounded-lg object-cover"
              />
              <div>
                <span className="font-display font-bold text-xl">SERVIBEL</span>
                <p className="text-xs text-primary-foreground/70">Assistência Técnica e Peças</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Sua assistência técnica de confiança em Ribeirão das Neves e região. 
              Atendimento profissional com qualidade e garantia.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#cobertura" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Área de Cobertura
                </a>
              </li>
              <li>
                <a href="#contato" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">(31) 98410-1104</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Rua Pedro Moreira do Nasc. 120, Bairro Kátia - Ribeirão das Neves, MG
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} SERVIBEL - Assistência Técnica e Peças. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
