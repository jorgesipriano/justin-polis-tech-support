import { ArrowLeft, Phone, Clock, MapPin, Wrench, Shield, Award, Users, CheckCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo-servibel.jpeg';

const steps = [
  {
    number: '01',
    title: 'Entre em Contato',
    description: 'Fale conosco pelo WhatsApp ou telefone e descreva o problema do seu eletrodoméstico.',
    icon: Phone,
  },
  {
    number: '02',
    title: 'Agendamos a Visita',
    description: 'Combinamos o melhor dia e horário para ir até você, sem complicação.',
    icon: Clock,
  },
  {
    number: '03',
    title: 'Diagnóstico no Local',
    description: 'Nosso técnico especializado avalia o equipamento e identifica o problema.',
    icon: Wrench,
  },
  {
    number: '04',
    title: 'Reparo Garantido',
    description: 'Realizamos o conserto com peças de qualidade e garantia de serviço.',
    icon: Shield,
  },
];

const differentials = [
  {
    icon: Award,
    title: '35 Anos de Experiência',
    description: 'Mais de três décadas de expertise no mercado de assistência técnica.',
  },
  {
    icon: Users,
    title: 'Equipe Especializada',
    description: 'Técnicos treinados e capacitados para todas as marcas e modelos.',
  },
  {
    icon: Shield,
    title: 'Garantia de Serviço',
    description: 'Todos os nossos reparos possuem garantia para sua total segurança.',
  },
  {
    icon: MapPin,
    title: 'Atendimento em BH e Região',
    description: 'Cobrimos Belo Horizonte e toda a região metropolitana.',
  },
];

const appliances = [
  'Lava e Seca',
  'Máquinas de Lavar',
  'Geladeiras',
  'Freezers',
  'Micro-ondas',
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <ArrowLeft className="w-5 h-5" />
            <img src={logo} alt="SERVIBEL" className="h-10 w-10 rounded-lg object-cover" />
            <span className="font-display font-bold text-lg">SERVIBEL</span>
          </Link>
          <a
            href="https://wa.me/5531984101104?text=Olá"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary-foreground text-primary px-4 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Fale Conosco
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-hero text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Como Funciona a<br />
            <span className="text-accent">SERVIBEL?</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
            Somos especialistas em assistência técnica de eletrodomésticos há mais de 35 anos.
            Conheça nosso processo simples, rápido e confiável.
          </p>
        </div>
      </section>

      {/* How it works - Steps */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Passo a Passo
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
            Do primeiro contato ao reparo finalizado, tudo de forma prática e transparente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-shadow duration-300 text-center group"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm">
                  {step.number}
                </div>
                <div className="mt-4 mb-4 flex justify-center">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <step.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <a
              href="https://wa.me/5531984101104?text=Olá"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:bg-green-700 transition-all duration-300 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Clique Aqui e Chame no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* What we fix */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              O Que Consertamos?
            </h2>
            <p className="text-muted-foreground mb-10">
              Trabalhamos com todas as marcas e modelos dos principais eletrodomésticos.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {appliances.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 bg-card px-6 py-3 rounded-full shadow-sm font-semibold text-foreground"
                >
                  <CheckCircle className="w-5 h-5 text-accent" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Por Que Escolher a SERVIBEL?
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
            Nossos diferenciais que fazem a diferença para você.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {differentials.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Seu Eletrodoméstico Precisa de Reparo?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Não perca tempo! Fale com a gente agora mesmo pelo WhatsApp e agende sua visita técnica.
          </p>
          <a
            href="https://wa.me/5531984101104?text=Olá, gostaria de agendar uma visita técnica!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Chamar Agora no WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} SERVIBEL - Assistência Técnica e Peças. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
