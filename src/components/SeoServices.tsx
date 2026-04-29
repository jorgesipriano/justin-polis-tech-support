import { Link } from 'react-router-dom';
import { Wrench, Search } from 'lucide-react';

const serviceLinks = [
  {
    title: 'Conserto de Máquina de Lavar',
    description: 'Reparo e manutenção de lavadoras de todas as marcas em BH e região.',
    keywords: ['conserto', 'reparo', 'arrumar', 'máquina de lavar'],
    href: '/conserto-maquina-lavar',
  },
  {
    title: 'Reparo de Máquina de Lavar em BH',
    description: 'Assistência técnica especializada em máquinas de lavar em Belo Horizonte.',
    keywords: ['reparo', 'máquina de lavar', 'Belo Horizonte'],
    href: '/reparo-maquina-lavar-belo-horizonte',
  },
  {
    title: 'Conserto de Geladeira',
    description: 'Geladeira não gela? Técnicos especializados em Justinópolis e região.',
    keywords: ['conserto', 'reparo', 'arrumar', 'geladeira'],
    href: '/reparo-geladeira-justinopolis',
  },
  {
    title: 'Conserto de Freezer',
    description: 'Atendimento urgente para freezers residenciais e comerciais em BH.',
    keywords: ['conserto', 'reparo', 'arrumar', 'freezer'],
    href: '/conserto-freezer-bh',
  },
  {
    title: 'Reparo de Lava e Seca',
    description: 'Especialistas em lava e seca de todas as marcas. Diagnóstico preciso.',
    keywords: ['conserto', 'reparo', 'arrumar', 'lava e seca'],
    href: '/reparo-lava-e-seca',
  },
  {
    title: 'Conserto de Microondas',
    description: 'Microondas não aquece? Consertamos todas as marcas com garantia.',
    keywords: ['conserto', 'reparo', 'arrumar', 'microondas'],
    href: '/conserto-microondas-bh',
  },
  {
    title: 'Limpeza de Lava e Seca',
    description: 'Higienização profissional para eliminar mau cheiro e prolongar a vida útil.',
    keywords: ['limpeza', 'higienização', 'manutenção preventiva', 'lava e seca'],
    href: '/limpa-lava-e-seca',
  },
  {
    title: 'Conserto de Geladeira em Justinópolis',
    description: 'Geladeira parou de gelar em Justinópolis? Técnico na sua porta hoje mesmo.',
    keywords: ['geladeira', 'Justinópolis', 'urgente'],
    href: '/conserto-geladeira-justinopolis',
  },
  {
    title: 'Conserto de Máquina de Lavar em Justinópolis',
    description: 'Lavadora travada ou vazando em Justinópolis? Reparo no mesmo dia, na sua casa.',
    keywords: ['máquina de lavar', 'Justinópolis', 'reparo'],
    href: '/conserto-maquina-lavar-justinopolis',
  },
  {
    title: 'Conserto de Lava e Seca em Justinópolis',
    description: 'Especialistas certificados em lava e seca em Justinópolis. Todas as marcas.',
    keywords: ['lava e seca', 'Justinópolis', 'especialista'],
    href: '/conserto-lava-e-seca-justinopolis',
  },
  {
    title: 'Conserto de Microondas em Justinópolis',
    description: 'Microondas com defeito em Justinópolis? Reparo seguro e com garantia.',
    keywords: ['microondas', 'Justinópolis', 'seguro'],
    href: '/conserto-microondas-justinopolis',
  },
  {
    title: 'Conserto de Freezer em Justinópolis',
    description: 'Freezer parado em Justinópolis? Atendimento de emergência hoje mesmo.',
    keywords: ['freezer', 'Justinópolis', 'emergência'],
    href: '/conserto-freezer-justinopolis',
  },
];

const SeoServices = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Search className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Encontre o serviço que você precisa</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conserto, Reparo e Manutenção de Eletrodomésticos
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Precisa <strong className="text-foreground">consertar</strong>, <strong className="text-foreground">reparar</strong> ou <strong className="text-foreground">arrumar</strong> seu eletrodoméstico? 
            A SERVIBEL é especialista em <strong className="text-foreground">geladeiras</strong>, <strong className="text-foreground">freezers</strong>, <strong className="text-foreground">máquinas de lavar</strong>, <strong className="text-foreground">lava e seca</strong> e <strong className="text-foreground">microondas</strong> em BH e região metropolitana.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-10">
          {serviceLinks.map((service) => (
            <Link
              key={service.href}
              to={service.href}
              className="group bg-card rounded-2xl p-6 shadow-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Wrench className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {service.keywords.map((kw) => (
                      <span key={kw} className="bg-secondary text-muted-foreground px-2 py-0.5 rounded text-xs">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Hidden SEO text for crawlers */}
        <div className="max-w-3xl mx-auto text-muted-foreground text-sm leading-relaxed space-y-3">
          <p>
            A <strong>SERVIBEL</strong> oferece serviço completo de <strong>conserto</strong>, <strong>reparo</strong> e <strong>manutenção</strong> de eletrodomésticos em <strong>Belo Horizonte</strong>, <strong>Contagem</strong>, <strong>Betim</strong>, <strong>Ribeirão das Neves</strong>, <strong>Justinópolis</strong>, <strong>Santa Luzia</strong> e <strong>Vespasiano</strong>. 
            Com mais de <strong>35 anos de experiência</strong>, somos referência em assistência técnica para <strong>geladeiras</strong>, <strong>freezers</strong>, <strong>máquinas de lavar</strong>, <strong>lava e seca</strong> e <strong>microondas</strong>.
          </p>
          <p>
            Se você está procurando <strong>arrumar geladeira</strong>, <strong>consertar máquina de lavar</strong>, <strong>reparar lava e seca</strong>, <strong>arrumar freezer</strong> ou <strong>consertar microondas</strong> em BH, 
            a SERVIBEL é a escolha certa. Atendemos todas as marcas: <strong>Brastemp</strong>, <strong>Electrolux</strong>, <strong>LG</strong>, <strong>Samsung</strong>, <strong>Consul</strong>, <strong>Panasonic</strong>, <strong>Metalfrio</strong> e muito mais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SeoServices;
