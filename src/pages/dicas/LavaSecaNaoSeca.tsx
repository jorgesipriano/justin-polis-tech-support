import ArticleLayout, { CTAWhats } from './ArticleLayout';

const Page = () => (
  <ArticleLayout
    category="Tecnologia"
    metaTitle="Lava e Seca parou de secar? Cuidado com a resistência | SERVIBEL"
    title="Por que sua Lava e Seca parou de secar? O erro comum que pode queimar a resistência do seu aparelho."
    description="Roupa saindo úmida da lava e seca? Existe um erro de uso simples que queima a resistência. Entenda antes que o conserto fique caro."
    image="/placeholder.svg"
    imageAlt="Lava e Seca aberta com roupas dentro"
  >
    <p>
      Se sua Lava e Seca está terminando o ciclo com a roupa <strong>úmida, pesada ou morna</strong>,
      o problema raramente é a máquina “velha”. Quase sempre é um detalhe técnico que o usuário não percebe.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">O erro mais comum</h2>
    <p>
      <strong>Excesso de roupa no tambor.</strong> A Lava e Seca precisa de espaço para o ar quente
      circular. Quando você enche demais, a resistência elétrica esquenta sem dissipar calor — e
      <strong> pode queimar</strong>.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Outros culpados frequentes</h2>
    <ul className="space-y-3">
      <li>• Filtro de fiapos entupido (limpe a cada 5 ciclos)</li>
      <li>• Sensor de umidade sujo de calcário</li>
      <li>• Mangueira de saída de ar dobrada ou suja</li>
      <li>• Resistência já queimada (precisa de técnico)</li>
    </ul>

    <div className="my-10 flex justify-center"><CTAWhats label="Diagnóstico da minha Lava e Seca" /></div>

    <p>
      A troca de uma resistência queimada custa muito mais do que uma manutenção preventiva.
      Se sua máquina já dá sinais, não espere: chame um especialista.
    </p>
  </ArticleLayout>
);

export default Page;