import heroImg from '@/assets/dicas/geladeira-nao-gela.jpg';
import ArticleLayout, { CTAWhats } from './ArticleLayout';

const Page = () => (
  <ArticleLayout
    category="Refrigeração"
    metaTitle="Freezer congela mas a geladeira não gela? Entenda a causa | SERVIBEL"
    title="Freezer congelando e geladeira não gela: o defeito que 7 em cada 10 pessoas confundem com falta de gás"
    description="Se o congelador está gelando normal e a parte de baixo não, o problema quase nunca é gás. Entenda a causa real antes de gastar com recarga desnecessária."
    image={heroImg}
    imageAlt="Geladeira aberta com alimentos na parte de baixo e freezer congelado"
  >
    <p>
      Esse é o chamado mais comum da nossa oficina — e também o que mais gera
      <strong> conserto errado</strong>. Quando o freezer gela e a geladeira não, o gás está lá.
      O problema é a <strong>circulação do ar frio</strong>.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">As 3 causas reais</h2>
    <ol className="list-decimal pl-6 space-y-3">
      <li><strong>Ventoinha (fan) do freezer parada</strong> — sem ela o frio não desce</li>
      <li><strong>Degelo travado</strong> — o evaporador vira um bloco de gelo e bloqueia a passagem de ar</li>
      <li><strong>Damper / duto de ar obstruído</strong> por embalagem encostada no fundo do freezer</li>
    </ol>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">O que fazer antes de chamar técnico</h2>
    <p>
      Desligue a geladeira da tomada por <strong>8 horas com as portas abertas</strong> (degelo
      manual). Se voltar a gelar depois disso, confirmado: o sistema de degelo está com defeito e
      vai travar de novo em poucos dias.
    </p>

    <div className="my-10 flex justify-center"><CTAWhats label="Minha geladeira não gela — quero diagnóstico" /></div>

    <p>
      Recarga de gás nesse caso é <strong>dinheiro jogado fora</strong>. Atendemos em domicílio em
      Justinópolis, Ribeirão das Neves e região de BH.
    </p>
  </ArticleLayout>
);

export default Page;
