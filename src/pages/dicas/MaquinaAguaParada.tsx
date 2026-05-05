import heroImg from '@/assets/dicas/agua-parada.jpg';
import ArticleLayout, { CTAWhats } from './ArticleLayout';

const Page = () => (
  <ArticleLayout
    category="Utilidade"
    metaTitle="Água parada na máquina de lavar? Guia rápido de drenagem | SERVIBEL"
    title="Água parada na máquina de lavar? O guia rápido para resolver problemas de drenagem antes de chamar o técnico."
    description="Máquina não escoa a água? Veja o passo a passo simples para destravar a drenagem em casa antes de gastar com técnico."
    image={heroImg}
    imageAlt="Máquina de lavar com água parada no tambor"
  >
    <p>
      Abriu a máquina e ela está cheia de água? Calma — em <strong>70% dos casos</strong> dá pra
      resolver sozinho em 10 minutos. Veja o passo a passo.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Checklist rápido</h2>
    <ol className="list-decimal pl-6 space-y-3">
      <li><strong>Verifique a mangueira de saída:</strong> ela não pode estar dobrada nem acima de 1m do chão.</li>
      <li><strong>Limpe o filtro:</strong> fica na parte de baixo da máquina (atrás de uma tampinha).</li>
      <li><strong>Cheque o ralo:</strong> se a casa tem ralo entupido, a água volta.</li>
      <li><strong>Reset:</strong> tire da tomada por 5 minutos e ligue de novo.</li>
    </ol>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Quando chamar o técnico</h2>
    <p>
      Se nenhum dos passos acima funcionou, o problema é mais sério: <strong>bomba de drenagem queimada,
      pressostato com defeito ou placa eletrônica</strong>. Aí vale chamar um especialista.
    </p>

    <div className="my-10 flex justify-center"><CTAWhats label="Não resolveu? Chamar técnico agora" /></div>
  </ArticleLayout>
);

export default Page;