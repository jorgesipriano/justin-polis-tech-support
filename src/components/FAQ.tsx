import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Com que frequência devo fazer a limpeza da minha máquina de lavar?',
    a: 'O ideal é realizar a limpeza preventiva da máquina de lavar a cada 6 meses. Isso evita mau cheiro, acúmulo de resíduos, mofo e prolonga a vida útil do equipamento, garantindo roupas mais limpas.'
  },
  {
    q: 'Quanto custa o conserto de uma geladeira em Justinópolis?',
    a: 'O orçamento do conserto de geladeira é gratuito. O valor final depende do defeito identificado (gás, compressor, termostato, placa). A SERVIBEL atende em Justinópolis e em toda Ribeirão das Neves com garantia total no serviço.'
  },
  {
    q: 'A limpeza da máquina de lavar evita problemas futuros?',
    a: 'Sim. A limpeza preventiva remove resíduos de sabão, mofo e calcário que causam falhas mecânicas, vazamentos e queima de componentes. É um dos serviços mais econômicos para evitar conserto caro depois.'
  },
  {
    q: 'Vocês oferecem garantia no conserto de geladeira e máquina de lavar?',
    a: 'Sim. Todos os serviços de conserto e limpeza realizados pela SERVIBEL têm garantia por escrito, cobrindo peças e mão de obra. Mais de 35 anos de tradição em Justinópolis e Ribeirão das Neves.'
  },
  {
    q: 'Vocês atendem em domicílio em Ribeirão das Neves?',
    a: 'Sim, atendemos em domicílio em todos os bairros de Ribeirão das Neves e Justinópolis, incluindo Bairro Kátia, Rosaneves, Veneza, Sevilha, Liberdade e Pampulinha.'
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4 font-semibold text-sm">
            <HelpCircle className="w-4 h-4" />
            Perguntas Frequentes
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Dúvidas sobre Limpeza de Máquina de Lavar e Conserto de Geladeiras
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Respostas dos especialistas da SERVIBEL para os moradores de Justinópolis e Ribeirão das Neves.
          </p>
        </div>

        <Accordion type="single" collapsible className="bg-card rounded-2xl border border-border shadow-sm">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="px-4 md:px-6">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;