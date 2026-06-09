import heroImg from '@/assets/dicas/ciclo-secreto-lava-seca.jpg';
import ArticleLayout, { CTAWhats } from './ArticleLayout';

const Page = () => (
  <ArticleLayout
    category="Economia de energia"
    metaTitle="O ciclo da Lava e Seca que ninguém usa (e economiza energia) | SERVIBEL"
    title="O ciclo secreto da Lava e Seca que quase ninguém usa — e que reduz sua conta de luz"
    description="A maioria dos donos de lava e seca só usa 2 ciclos dos 12 disponíveis. Conheça o ciclo que economiza energia, preserva a resistência e ainda entrega roupa quase seca."
    image={heroImg}
    imageAlt="Mão selecionando ciclo no painel da lava e seca"
  >
    <p>
      Sua lava e seca tem entre <strong>10 e 14 ciclos</strong> — mas 9 em cada 10 pessoas só usa
      “Normal” e “Rápido”. O resultado: conta de luz alta e resistência queimando antes da hora.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">O ciclo que ninguém percebe: “Centrifugação extra”</h2>
    <p>
      Quase toda lava e seca tem uma opção chamada <strong>“Centrifugação extra”, “Spin Plus” ou
      “Super Spin”</strong>. Ela aumenta as rotações da centrifugação para tirar o máximo de água
      antes da secagem.
    </p>
    <p>
      O ganho real: <strong>até 35% menos tempo de secagem</strong> — e como a secagem é a fase que
      mais consome energia, isso vira economia direta na conta de luz.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Por que isso protege sua máquina</h2>
    <ul className="space-y-3">
      <li>• Menos tempo de resistência ligada = menos desgaste térmico</li>
      <li>• Menos esforço da ventoinha de secagem</li>
      <li>• Filtro de fiapos acumula menos pelo (porque seca mais rápido)</li>
    </ul>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Como ativar</h2>
    <ol className="list-decimal pl-6 space-y-3">
      <li>Selecione o ciclo desejado (algodão, sintético etc.)</li>
      <li>Antes de apertar “Iniciar”, procure o botão de <strong>velocidade da centrifugação</strong></li>
      <li>Aumente para o máximo (geralmente 1.200 ou 1.400 rpm)</li>
      <li>Inicie normalmente</li>
    </ol>

    <div className="my-10 flex justify-center">
      <CTAWhats label="Minha lava e seca consome muito — quero ajuda" />
    </div>

    <p>
      Se mesmo com esse ajuste sua conta de luz não cair, a resistência ou o sensor de umidade
      podem estar comprometidos. A SERVIBEL faz diagnóstico em Justinópolis e Ribeirão das Neves.
    </p>
  </ArticleLayout>
);

export default Page;