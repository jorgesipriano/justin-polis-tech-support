import heroImg from '@/assets/dicas/freezer-gelo-excessivo.jpg';
import ArticleLayout, { CTAWhats } from './ArticleLayout';

const Page = () => (
  <ArticleLayout
    category="Manutenção Preventiva"
    metaTitle="Freezer criando gelo demais? A causa que ninguém percebe | SERVIBEL"
    title="Freezer virando bloco de gelo: o pequeno detalhe que faz sua conta de luz disparar"
    description="Camada grossa de gelo no freezer não é normal — é sinal de entrada de ar úmido ou degelo com defeito. Veja como identificar e o que fazer."
    image={heroImg}
    imageAlt="Freezer com camada grossa de gelo acumulado"
  >
    <p>
      Cada <strong>1 cm de gelo</strong> acumulado no freezer faz o aparelho consumir até
      <strong> 30% mais energia</strong>. E gelo demais nunca é "coisa normal da máquina" —
      é sintoma de defeito.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Por que o gelo se forma</h2>
    <ul className="space-y-3">
      <li>• <strong>Borracha da porta ressecada</strong> — entra ar quente e úmido o tempo todo</li>
      <li>• <strong>Porta aberta demais</strong> ou mal encostada por uma gaveta empenada</li>
      <li>• <strong>Resistência de degelo queimada</strong> (nos frost free)</li>
      <li>• <strong>Timer ou sensor de degelo com defeito</strong></li>
      <li>• Guardar <strong>comida quente</strong> ou sem tampa dentro</li>
    </ul>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Teste da folha de papel</h2>
    <p>
      Prenda uma folha na porta e feche. Se você puxar e a folha sair fácil, a vedação está
      vencida — trocar a borracha resolve e se paga sozinho na conta de luz.
    </p>

    <div className="my-10 flex justify-center"><CTAWhats label="Quero resolver o gelo do meu freezer" /></div>

    <p>
      Em frost free, gelo acumulado quase sempre significa <strong>degelo com defeito</strong> —
      e continuar usando assim queima a ventoinha. Fazemos o diagnóstico em domicílio.
    </p>
  </ArticleLayout>
);

export default Page;
