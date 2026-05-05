import ArticleLayout, { CTAWhats } from './ArticleLayout';

const Page = () => (
  <ArticleLayout
    category="Segurança"
    metaTitle="Micro-ondas com faíscas e barulho? Risco real | SERVIBEL"
    title="O perigo escondido no seu Micro-ondas: por que faíscas e barulhos estranhos não podem ser ignorados."
    description="Faíscas dentro do micro-ondas são sinal de risco de incêndio e vazamento de radiação. Saiba o que fazer agora — atendemos em Justinópolis."
    image="/placeholder.svg"
    imageAlt="Micro-ondas com faíscas internas"
  >
    <p>
      Faíscas e barulhos no micro-ondas <strong>nunca são normais</strong>. Eles indicam que peças
      internas estão se deteriorando — e podem causar <strong>incêndio</strong> ou
      <strong> vazamento de micro-ondas</strong>, perigoso para a sua família.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">O que pode estar acontecendo</h2>
    <ul className="space-y-3">
      <li>• <strong>Mica queimada:</strong> a placa de proteção interna estourou.</li>
      <li>• <strong>Magnetron com defeito:</strong> peça que gera as micro-ondas (perigoso).</li>
      <li>• <strong>Prato ou suporte metálico esquecido</strong> dentro do aparelho.</li>
      <li>• <strong>Tinta interna descascando</strong> e expondo o metal.</li>
    </ul>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">O que fazer AGORA</h2>
    <ol className="list-decimal pl-6 space-y-3">
      <li>Desligue da tomada imediatamente.</li>
      <li>Não use mais até ser avaliado.</li>
      <li>Chame um técnico — não tente abrir, tem capacitor de alta tensão.</li>
    </ol>

    <div className="my-10 flex justify-center"><CTAWhats label="Quero avaliação urgente" /></div>

    <p>
      A SERVIBEL <strong>atende em Justinópolis</strong> e Ribeirão das Neves com técnicos certificados
      em micro-ondas. Sua segurança vem antes do conserto.
    </p>
  </ArticleLayout>
);

export default Page;