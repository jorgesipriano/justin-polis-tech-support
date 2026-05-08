import heroImg from '@/assets/dicas/microondas-faiscas.jpg';
import ArticleLayout, { CTAWhats } from './ArticleLayout';

const Page = () => (
  <ArticleLayout
    category="Segurança em Casa"
    metaTitle="Faíscas no micro-ondas? O perigo da placa de mica suja | SERVIBEL"
    title="Faíscas no Micro-ondas? O perigo que uma placa de mica suja pode causar na sua cozinha."
    description="Restos de comida na placa de mica geram curto-circuito, faíscas e risco de incêndio. Conserto rápido evita a troca do aparelho. Atendimento em Justinópolis, Ribeirão das Neves e Venda Nova."
    image={heroImg}
    imageAlt="Interior de micro-ondas com faíscas próximas à placa de mica"
  >
    <p>
      Aquela <strong>faísca dentro do micro-ondas</strong>, com estalo seco e cheiro de queimado,
      não é frescura do aparelho — é um aviso sério. Na maioria dos casos, o culpado é uma peça
      pequena, barata e quase invisível: a <strong>placa de mica</strong>.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">O que é a placa de mica?</h2>
    <p>
      É aquela <strong>plaquinha bege ou marrom</strong> fixada na parede lateral interna do
      micro-ondas. Ela cobre a saída das micro-ondas geradas pelo magnetron e protege o circuito
      contra gordura e umidade. Sem ela funcionando, as ondas batem direto em pontos errados do
      aparelho.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Por que ela causa curto-circuito</h2>
    <ul className="list-disc pl-6 space-y-3">
      <li><strong>Gordura e restos de comida</strong> grudam na mica e queimam a cada uso.</li>
      <li>O acúmulo carboniza a peça, criando <strong>pontos condutivos</strong> onde não deveria haver.</li>
      <li>As micro-ondas encontram esses pontos e geram <strong>arcos elétricos visíveis</strong> — as famosas faíscas.</li>
      <li>Se ignorado, o problema sobe para o <strong>magnetron</strong>, peça cara que praticamente inviabiliza o conserto.</li>
    </ul>

    <div className="my-10 flex justify-center"><CTAWhats label="Quero consertar antes que piore" /></div>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">A boa notícia: o conserto é rápido e barato</h2>
    <p>
      A troca da placa de mica é um dos serviços <strong>mais rápidos da nossa oficina</strong>:
      feito no mesmo dia, com peça original, e <strong>evita a troca do aparelho inteiro</strong>.
      Quanto antes você chamar, menor o risco de o magnetron queimar junto.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Atendimento rápido em Ribeirão das Neves, Venda Nova e Justinópolis</h2>
    <p>
      A SERVIBEL atende toda a região com agenda no mesmo dia para conserto de micro-ondas,
      fornos elétricos e cooktops. <strong>Não use o aparelho enquanto ele estiver soltando
      faísca</strong> — desligue da tomada e fale com a gente.
    </p>

    <div className="my-10 flex justify-center"><CTAWhats label="Quero consertar antes que piore" /></div>
  </ArticleLayout>
);

export default Page;