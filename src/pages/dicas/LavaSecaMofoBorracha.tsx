import heroImg from '@/assets/dicas/lava-seca-mofo-borracha.jpg';
import ArticleLayout, { CTAWhats } from './ArticleLayout';

const Page = () => (
  <ArticleLayout
    category="Saúde e Higiene"
    metaTitle="Mofo na borracha da Lava e Seca: risco real à saúde | SERVIBEL"
    title="Mofo preto na borracha da Lava e Seca: por que ele volta e o que ele faz com sua roupa"
    description="Aquela mancha preta na borracha da lava e seca não é sujeira — é fungo. Entenda o risco respiratório e como eliminar de vez."
    image={heroImg}
    imageAlt="Mãos abrindo lava e seca com mofo na borracha de vedação"
  >
    <p>
      Se a borracha de vedação da sua lava e seca tem manchas pretas que voltam mesmo depois de
      limpar com água sanitária, você não está lidando com sujeira: é <strong>colônia de fungos
      (Aspergillus e Cladosporium)</strong> que se aloja nas dobras da borracha e libera esporos
      dentro da máquina — e nas suas roupas.
    </p>
    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Por que ele insiste em voltar</h2>
    <p>
      A lava e seca trabalha quente, úmida e fechada — o ambiente perfeito para fungo. Quando você
      passa pano com cloro, mata só a superfície; <strong>as raízes ficam intactas na parte interna
      da borracha</strong> e em 7 a 10 dias o mofo reaparece.
    </p>
    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">O que isso causa em casa</h2>
    <ul className="space-y-3">
      <li>• Rinite, tosse e crises de bronquite (principalmente em crianças)</li>
      <li>• Roupas com cheiro de “pano úmido” mesmo limpas</li>
      <li>• Manchas escuras em camisas brancas</li>
      <li>• Alergia de pele em quem tem sensibilidade</li>
    </ul>
    <div className="my-10 flex justify-center"><CTAWhats label="Higienização profissional da minha lava e seca" /></div>
    <p>
      A solução real é <strong>higienização técnica com desmontagem</strong> da borracha e tratamento
      do tambor interno — único processo que elimina as raízes do fungo.
    </p>
  </ArticleLayout>
);

export default Page;