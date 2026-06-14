import heroImg from '@/assets/dicas/lava-seca-barulho.jpg';
import ArticleLayout, { CTAWhats } from './ArticleLayout';

const Page = () => (
  <ArticleLayout
    category="Diagnóstico"
    metaTitle="Lava e Seca fazendo barulho de avião? 5 causas e o risco real | SERVIBEL"
    title="Lava e Seca fazendo barulho de avião na centrifugação: o que está prestes a quebrar"
    description="Aquele zumbido alto na centrifugação não é normal. É a peça mais cara da máquina avisando que está no fim."
    image={heroImg}
    imageAlt="Pessoa assustada com barulho alto vindo de lava e seca"
  >
    <p>
      Quando sua lava e seca começa a fazer um <strong>zumbido grave, tipo turbina de avião</strong>,
      na hora da centrifugação, ela está pedindo socorro. Existe uma peça específica responsável por
      99% desses casos: o <strong>rolamento do tambor</strong>.
    </p>
    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">As 5 causas mais comuns (em ordem de gravidade)</h2>
    <ol className="space-y-3 list-decimal pl-6">
      <li><strong>Rolamento gasto</strong> — barulho grave, contínuo, piora a cada uso</li>
      <li><strong>Amortecedor vencido</strong> — pancadas secas, ritmadas</li>
      <li><strong>Polia frouxa ou correia esticada</strong> — chiado agudo</li>
      <li><strong>Objeto preso entre tambor e cesto</strong> — moeda, sutiã com aro, botão</li>
      <li><strong>Contrapeso solto</strong> — máquina “anda” pelo chão</li>
    </ol>
    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Por que NÃO dá para esperar</h2>
    <p>
      Rolamento gasto trabalhando força o <strong>eixo do tambor</strong>. Quando o eixo empena, o
      conserto deixa de ser R$ 350 (troca de rolamento) e vira <strong>R$ 1.200+</strong> (cesto
      completo + eixo). Em casos extremos, compensa mais comprar outra máquina.
    </p>
    <div className="my-10 flex justify-center"><CTAWhats label="Diagnosticar o barulho da minha máquina" /></div>
    <p>
      Regra prática: se você consegue ouvir a máquina centrifugando do <strong>outro cômodo da casa</strong>,
      é hora de chamar especialista. Quanto antes, mais barato.
    </p>
  </ArticleLayout>
);

export default Page;