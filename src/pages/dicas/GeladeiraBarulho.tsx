import heroImg from '@/assets/dicas/geladeira-barulho.jpg';
import ArticleLayout, { CTAWhats } from './ArticleLayout';

const Page = () => (
  <ArticleLayout
    category="Diagnóstico"
    metaTitle="Geladeira fazendo barulho estranho? O que cada som significa | SERVIBEL"
    title="Geladeira fazendo barulho estranho: o que cada som significa (e qual deles é urgente)"
    description="Estalo, zumbido, borbulha ou batida? Cada ruído da geladeira aponta uma peça diferente. Saiba qual é normal e qual indica compressor no fim."
    image={heroImg}
    imageAlt="Mulher preocupada ouvindo barulho vindo da geladeira na cozinha"
  >
    <p>
      Nem todo barulho de geladeira é defeito — mas alguns são o <strong>último aviso antes do
      compressor travar</strong>. Em 35 anos atendendo em Justinópolis e Ribeirão das Neves,
      aprendemos a identificar o problema só pelo som.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">O que cada som significa</h2>
    <ul className="space-y-3">
      <li>• <strong>Borbulha / água correndo</strong> — normal, é o gás circulando</li>
      <li>• <strong>Estalo curto de vez em quando</strong> — normal, dilatação do plástico</li>
      <li>• <strong>Zumbido alto e constante</strong> — compressor forçando (gás baixo ou sujeira no condensador)</li>
      <li>• <strong>Chiado agudo tipo apito</strong> — ventoinha do freezer com gelo travando a hélice</li>
      <li>• <strong>Batida metálica</strong> — compressor solto no coxim ou bomba interna gasta</li>
    </ul>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">O teste de 1 minuto</h2>
    <p>
      Abra a porta da geladeira. Se o barulho <strong>aumenta</strong> ao abrir, é a ventoinha
      interna. Se continua igual, o som vem de trás — compressor ou condensador.
    </p>

    <div className="my-10 flex justify-center"><CTAWhats label="Identificar o barulho da minha geladeira" /></div>

    <p>
      Zumbido forte por semanas quase sempre termina em <strong>compressor queimado</strong> — e aí
      o conserto passa de uma limpeza simples para a peça mais cara do aparelho.
    </p>
  </ArticleLayout>
);

export default Page;
