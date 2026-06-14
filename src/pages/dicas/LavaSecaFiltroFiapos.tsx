import heroImg from '@/assets/dicas/lava-seca-filtro-fiapos.jpg';
import ArticleLayout, { CTAWhats } from './ArticleLayout';

const Page = () => (
  <ArticleLayout
    category="Manutenção Preventiva"
    metaTitle="Filtro de fiapos da Lava e Seca: o pequeno detalhe que queima a resistência | SERVIBEL"
    title="O filtro de fiapos que ninguém limpa — e por que ele queima a resistência da Lava e Seca"
    description="A maior causa de chamados técnicos em lava e seca não é defeito de fábrica: é um filtro de R$ 0 que ninguém abre."
    image={heroImg}
    imageAlt="Técnico mostrando filtro de fiapos entupido de lava e seca"
  >
    <p>
      Em <strong>35 anos atendendo lava e seca</strong> em Justinópolis e Ribeirão das Neves, descobrimos
      um padrão: <strong>8 a cada 10 resistências queimadas</strong> têm a mesma causa raiz —
      o filtro de fiapos nunca foi limpo.
    </p>
    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">O que acontece por dentro</h2>
    <p>
      Quando o filtro entope, o ar quente que deveria secar a roupa <strong>não tem por onde sair</strong>.
      A temperatura interna sobe acima do projetado, a resistência trabalha em sobrecarga e — em
      questão de meses — ela queima. O reparo passa de R$ 0 (limpar filtro) para R$ 600+.
    </p>
    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Onde fica e como limpar</h2>
    <ul className="space-y-3">
      <li>• Geralmente atrás de uma <strong>tampinha no canto inferior</strong> da porta</li>
      <li>• Gire no sentido anti-horário (tenha um pano embaixo — sai água)</li>
      <li>• Retire fiapos, moedas, clipes e pelos de animal</li>
      <li>• Lave em água corrente e recoloque firme</li>
    </ul>
    <p className="font-semibold">Frequência ideal: a cada 5 ciclos de secagem.</p>
    <div className="my-10 flex justify-center"><CTAWhats label="Minha máquina já está com sintomas" /></div>
    <p>
      Se a roupa já está saindo morna e úmida, o estrago provavelmente começou. Diagnóstico técnico
      identifica se ainda dá para salvar a resistência atual.
    </p>
  </ArticleLayout>
);

export default Page;