import heroImg from '@/assets/dicas/geladeira-borracha.jpg';
import ArticleLayout, { CTAWhats } from './ArticleLayout';

const Page = () => (
  <ArticleLayout
    category="Economia de Energia"
    metaTitle="Conta de luz alta? O segredo está na borracha da geladeira | SERVIBEL"
    title="Sua conta de luz subiu? O segredo pode estar na borracha da sua geladeira."
    description="Borracha gasta faz o compressor trabalhar dobrado e dispara a conta de luz. Faça o Teste do Papel e descubra agora. Atendimento no mesmo dia em Justinópolis."
    image={heroImg}
    imageAlt="Geladeira moderna com porta aberta mostrando a borracha de vedação"
  >
    <p>
      Se a sua <strong>conta de luz</strong> aumentou de um mês para o outro sem você ter mudado nada
      em casa, o vilão pode estar bem na sua frente: a <strong>borracha de vedação da geladeira</strong>.
      Quando ela perde a elasticidade, o ar frio escapa por pequenas frestas e o compressor passa a
      trabalhar quase sem parar para manter a temperatura interna.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Por que isso pesa tanto na conta?</h2>
    <p>
      O compressor é o componente que mais consome energia na sua geladeira. Com a vedação ruim, ele
      pode ficar ligado <strong>até 40% mais tempo</strong> por dia. Resultado: gasto extra todo mês,
      desgaste prematuro do motor e risco real de queima da placa.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Faça o Teste do Papel (leva 10 segundos)</h2>
    <ol className="list-decimal pl-6 space-y-3">
      <li>Pegue uma <strong>folha de papel sulfite</strong>.</li>
      <li>Coloque entre a porta e a geladeira e feche a porta normalmente.</li>
      <li>Tente puxar a folha. Se ela <strong>sair com facilidade</strong>, a borracha já não está vedando.</li>
      <li>Repita em 4 pontos diferentes da porta (em cima, embaixo e nas laterais).</li>
    </ol>

    <div className="my-10 flex justify-center"><CTAWhats label="Economizar Energia Agora" /></div>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Troca de borracha e carga de gás em Justinópolis e região — atendimento no mesmo dia</h2>
    <p>
      A SERVIBEL atende <strong>Justinópolis, Ribeirão das Neves, Venda Nova e região de BH</strong>
      com agenda no mesmo dia para troca de borracha de vedação, carga de gás refrigerante,
      avaliação de compressor e diagnóstico completo da sua geladeira. Peças originais, garantia
      por escrito e técnico do dono — não terceirizamos.
    </p>

    <p>
      Quanto mais tempo a vedação fica ruim, mais o motor sofre. <strong>Resolver hoje é mais barato
      do que trocar a geladeira amanhã.</strong>
    </p>

    <div className="my-10 flex justify-center"><CTAWhats label="Economizar Energia Agora" /></div>
  </ArticleLayout>
);

export default Page;