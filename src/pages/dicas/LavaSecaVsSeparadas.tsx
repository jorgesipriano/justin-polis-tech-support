import heroImg from '@/assets/dicas/lava-seca-vs-separadas.jpg';
import ArticleLayout, { CTAWhats } from './ArticleLayout';

const Page = () => (
  <ArticleLayout
    category="Comparativo"
    metaTitle="Lava e Seca x Máquina + Secadora: qual vale a pena em 2026? | SERVIBEL"
    title="Lava e Seca ou Máquina + Secadora separadas: qual vale realmente a pena em 2026?"
    description="Quem tem 35 anos consertando esses dois tipos de aparelho conta a verdade que as lojas não falam: o que dura mais, o que sai mais caro e o que cabe no seu dia a dia."
    image={heroImg}
    imageAlt="Comparativo entre lava e seca e máquina + secadora separadas"
  >
    <p>
      A pergunta chega quase toda semana na SERVIBEL: <em>“Vale mais a pena comprar uma lava e seca
      ou uma máquina de lavar e uma secadora separadas?”</em> Depois de 35 anos consertando
      os dois, podemos responder sem rodeio.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">O que ninguém te conta na loja</h2>
    <p>
      A lava e seca <strong>quebra mais cedo</strong> — não porque é ruim, mas porque concentra
      dois sistemas em um só motor, uma só placa e um só tambor. Estatística do nosso histórico
      de chamados: lava e seca dura em média <strong>7 anos</strong>; conjunto separado, <strong>11 anos</strong>.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Comparativo direto</h2>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-base">
        <thead>
          <tr className="bg-muted">
            <th className="border p-3 text-left">Critério</th>
            <th className="border p-3 text-left">Lava e Seca</th>
            <th className="border p-3 text-left">Separadas</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-3">Espaço</td><td className="border p-3">1 vaga</td><td className="border p-3">2 vagas</td></tr>
          <tr><td className="border p-3">Custo inicial</td><td className="border p-3">Maior</td><td className="border p-3">Menor (entrada)</td></tr>
          <tr><td className="border p-3">Conta de luz</td><td className="border p-3">Alta na secagem</td><td className="border p-3">Mais eficiente</td></tr>
          <tr><td className="border p-3">Conserto</td><td className="border p-3">Caro (peças integradas)</td><td className="border p-3">Mais barato</td></tr>
          <tr><td className="border p-3">Vida útil média</td><td className="border p-3">~7 anos</td><td className="border p-3">~11 anos</td></tr>
          <tr><td className="border p-3">Capacidade de secagem</td><td className="border p-3">Metade do lavado</td><td className="border p-3">Total</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Quando a lava e seca vale a pena</h2>
    <ul className="space-y-3">
      <li>• Apartamento pequeno sem espaço para dois aparelhos</li>
      <li>• Família de 1 a 3 pessoas</li>
      <li>• Roupas leves e do dia a dia (não cobertor toda semana)</li>
    </ul>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Quando o conjunto separado vence</h2>
    <ul className="space-y-3">
      <li>• Família com 4+ pessoas</li>
      <li>• Lavanderia com espaço para empilhar</li>
      <li>• Quem usa secadora todo dia (a separada aguenta mais)</li>
    </ul>

    <div className="my-10 flex justify-center">
      <CTAWhats label="Tenho dúvida sobre meu aparelho — quero conselho" />
    </div>

    <p>
      Antes de trocar, vale uma avaliação. Em muitos casos, o conserto recoloca a máquina por
      mais 3 a 5 anos de vida útil — e custa uma fração de uma compra nova.
    </p>
  </ArticleLayout>
);

export default Page;