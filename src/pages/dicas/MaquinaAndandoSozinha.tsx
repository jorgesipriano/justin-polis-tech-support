import heroImg from '@/assets/dicas/maquina-andando.jpg';
import ArticleLayout, { CTAWhats } from './ArticleLayout';

const Page = () => (
  <ArticleLayout
    category="Segurança"
    metaTitle="Máquina de lavar 'anda' sozinha? O risco que ninguém te conta | SERVIBEL"
    title="Por que sua máquina de lavar 'anda' sozinha — e o risco escondido para a estrutura da sua casa"
    description="Máquina que se mexe na centrifugação não é frescura: pode quebrar o piso, o motor e até a tubulação de esgoto. Veja as causas e como resolver hoje."
    image={heroImg}
    imageAlt="Máquina de lavar em alta centrifugação com leve vibração"
  >
    <p>
      É mais comum do que parece: você liga a centrifugação e a máquina <strong>vibra,
      pula e literalmente “caminha” pela área de serviço</strong>. Muita gente acha que é normal —
      mas não é, e o estrago pode ir muito além do aparelho.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">As 4 causas reais</h2>
    <ol className="list-decimal pl-6 space-y-3">
      <li><strong>Pés desnivelados:</strong> 70% dos casos. A máquina precisa estar 100% no esquadro.</li>
      <li><strong>Excesso de carga:</strong> roupa pesada (cobertor, edredom) desbalanceia o tambor.</li>
      <li><strong>Amortecedores gastos:</strong> peça interna que segura o tanque — vida útil de 6 a 8 anos.</li>
      <li><strong>Contrapesos soltos:</strong> blocos de concreto fixados ao tanque. Quando soltam, a máquina vira “liquidificador”.</li>
    </ol>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">O risco escondido</h2>
    <p>
      Uma máquina “andando” na centrifugação pode:
    </p>
    <ul className="space-y-3">
      <li>• Rachar o piso cerâmico da área de serviço</li>
      <li>• Romper a <strong>mangueira de entrada de água</strong> e alagar a casa</li>
      <li>• Forçar a tubulação de esgoto e provocar vazamento na parede</li>
      <li>• Quebrar o eixo do motor (conserto = 40% do valor de uma máquina nova)</li>
    </ul>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Como testar agora</h2>
    <p>
      Coloque uma moeda em pé sobre a tampa durante a centrifugação. Se ela cair em menos de 10
      segundos, sua máquina está fora de nível ou com amortecedor comprometido.
    </p>

    <div className="my-10 flex justify-center">
      <CTAWhats label="Minha máquina está vibrando — chamar técnico" />
    </div>

    <p>
      A SERVIBEL nivela, troca amortecedores e contrapesos no mesmo dia em Justinópolis,
      Ribeirão das Neves e Belo Horizonte. Garantia por escrito.
    </p>
  </ArticleLayout>
);

export default Page;