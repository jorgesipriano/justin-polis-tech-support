import heroImg from '@/assets/dicas/higienizacao.jpg';
import ArticleLayout, { CTAWhats } from './ArticleLayout';

const Page = () => (
  <ArticleLayout
    category="Higiene"
    metaTitle="Crosta oculta na máquina de lavar: o que acontece sem higienização | SERVIBEL"
    title="A crosta oculta: o que acontece com a sua máquina de lavar se você nunca fez uma higienização técnica."
    description="Atrás do tambor da sua máquina existe uma camada de borra que nenhum sabão alcança. Veja o que isso causa — e a solução técnica."
    image={heroImg}
    imageAlt="Crosta oculta dentro de máquina de lavar"
  >
    <p>
      Você nunca abriu a sua máquina de lavar “por dentro”. Mas ela já tem, com toda certeza, uma
      <strong> camada grossa e escura de sujeira</strong> entre o tambor interno e o externo.
      Essa borra é o motivo das manchas, do cheiro e das alergias.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Como ela se forma</h2>
    <p>
      Restos de sabão em pó, amaciante, gordura corporal e fiapos não são totalmente eliminados
      no enxágue. Eles ficam presos em locais que <strong>nenhum ciclo de lavagem alcança</strong>,
      mesmo com produtos de supermercado.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">O que ela causa</h2>
    <ul className="space-y-3">
      <li>• Manchas cinzas e pontos pretos nas roupas claras</li>
      <li>• Cheiro de mofo mesmo após lavagem</li>
      <li>• Alergias e coceira na pele (principalmente em crianças)</li>
      <li>• Desgaste do rolamento e do motor</li>
    </ul>

    <div className="my-10 flex justify-center"><CTAWhats label="Quero agendar a higienização" /></div>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">A solução técnica</h2>
    <p>
      A higienização profunda exige <strong>desmontar a máquina</strong>, remover a borra manualmente
      e aplicar produtos profissionais. É um serviço de manutenção preventiva recomendado a cada 12 meses.
    </p>
    <p>
      A SERVIBEL <strong>atende em Justinópolis</strong> com 35 anos de experiência e garantia no serviço.
    </p>
  </ArticleLayout>
);

export default Page;