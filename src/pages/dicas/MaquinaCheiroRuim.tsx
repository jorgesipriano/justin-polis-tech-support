import heroImg from '@/assets/dicas/maquina-cheiro-ruim.jpg';
import ArticleLayout, { CTAWhats } from './ArticleLayout';

const Page = () => (
  <ArticleLayout
    category="Saúde e Higiene"
    metaTitle="Roupa saindo com cheiro ruim da máquina? Descubra a causa | SERVIBEL"
    title="Sua roupa sai da máquina com cheiro de mofo? O que está escondido dentro do tambor"
    description="Roupa limpa não pode cheirar mal. Se isso acontece, existe biofilme acumulado onde você não enxerga — entenda o risco e a solução definitiva."
    image={heroImg}
    imageAlt="Homem sentindo cheiro ruim ao abrir a máquina de lavar"
  >
    <p>
      Se você lava a roupa e ela sai com <strong>cheiro de pano velho</strong>, o problema não é o
      sabão. É o <strong>biofilme</strong> — uma camada de gordura, resíduo de amaciante e bactérias
      grudada entre o tambor visível e o tambor externo.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Onde a sujeira se esconde</h2>
    <ul className="space-y-3">
      <li>• Entre o cesto interno e a cuba externa (você nunca vê)</li>
      <li>• Na gaveta de sabão e no duto que leva até o tambor</li>
      <li>• Na borracha de vedação e no filtro da bomba</li>
    </ul>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Por que amaciante piora</h2>
    <p>
      Amaciante em excesso é gordura. Ele <strong>alimenta as bactérias</strong> e deixa uma camada
      pegajosa que segura resíduo a cada lavagem. Use metade da dose recomendada.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">O que ajuda em casa (e o que não resolve)</h2>
    <p>
      Um ciclo vazio na água mais quente com vinagre ajuda na superfície, mas
      <strong> não alcança o tambor externo</strong>. Só a higienização técnica com desmontagem
      elimina o biofilme de verdade.
    </p>

    <div className="my-10 flex justify-center"><CTAWhats label="Quero higienização técnica da minha máquina" /></div>

    <p>
      Fazemos higienização completa em domicílio em Justinópolis, Ribeirão das Neves e BH —
      35 anos de experiência.
    </p>
  </ArticleLayout>
);

export default Page;
