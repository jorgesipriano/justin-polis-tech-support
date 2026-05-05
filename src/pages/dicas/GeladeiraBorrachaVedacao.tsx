import heroImg from '@/assets/dicas/geladeira-borracha.jpg';
import ArticleLayout, { CTAWhats } from './ArticleLayout';

const Page = () => (
  <ArticleLayout
    category="Economia"
    metaTitle="Geladeira gastando muita luz? 3 sinais da borracha de vedação | SERVIBEL"
    title="Sua geladeira está gastando demais? 3 sinais de que a borracha de vedação precisa de troca urgente."
    description="A borracha gasta da geladeira pode aumentar sua conta de luz em até 30%. Veja os 3 sinais de alerta e como resolver rápido em Justinópolis."
    image={heroImg}
    imageAlt="Geladeira com borracha de vedação danificada"
  >
    <p>
      A conta de luz subiu sem explicação? Antes de culpar o ar-condicionado, olhe para a sua
      <strong> geladeira</strong>. A borracha de vedação da porta — aquela faixa preta — é uma das
      principais responsáveis por <strong>desperdício silencioso de energia</strong>.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Os 3 sinais de alerta</h2>
    <ol className="list-decimal pl-6 space-y-3">
      <li><strong>Água escorrendo nas laterais:</strong> ar quente entra, condensa e vira gotas.</li>
      <li><strong>Motor liga toda hora:</strong> o compressor trabalha o dobro para manter a temperatura.</li>
      <li><strong>Folha de papel cai:</strong> coloque uma folha entre a porta e a geladeira. Se ela escorrega, a vedação já era.</li>
    </ol>

    <div className="my-10 flex justify-center"><CTAWhats label="Quero trocar a borracha agora" /></div>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Quanto isso custa no seu bolso</h2>
    <p>
      Uma geladeira com vedação ruim pode consumir até <strong>30% a mais de energia</strong> por mês.
      A troca da borracha é rápida, barata e se paga em poucas semanas de economia.
    </p>

    <p>
      A SERVIBEL <strong>atende em Justinópolis</strong> e região com peças originais e garantia.
      Não deixe o problema crescer — quanto mais tempo a vedação fica ruim, mais o motor sofre.
    </p>
  </ArticleLayout>
);

export default Page;