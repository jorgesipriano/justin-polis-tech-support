import heroImg from '@/assets/dicas/lava-seca-erro-e1.jpg';
import ArticleLayout, { CTAWhats } from './ArticleLayout';

const Page = () => (
  <ArticleLayout
    category="Códigos de Erro"
    metaTitle="Erro E1 na Lava e Seca? O que significa e como resolver | SERVIBEL"
    title="Erro E1 na Lava e Seca: o que significa e por que NÃO ignorar"
    description="O código E1 aparece no display da sua lava e seca? Saiba o que está acontecendo por dentro do aparelho e quando o conserto vira urgência."
    image={heroImg}
    imageAlt="Display de lava e seca exibindo código de erro E1"
  >
    <p>
      Quando o display da sua lava e seca pisca <strong>E1</strong>, o aparelho está avisando que
      <strong> não conseguiu encher de água no tempo esperado</strong>. Parece simples — mas ignorar pode
      queimar a bomba e a placa eletrônica em poucos ciclos.
    </p>
    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">As 4 causas reais do E1</h2>
    <ul className="space-y-3">
      <li>• <strong>Registro de água fechado</strong> ou pressão baixa na rua</li>
      <li>• <strong>Mangueira de entrada dobrada</strong> ou filtro de entrada entupido por areia</li>
      <li>• <strong>Válvula solenoide queimada</strong> (não abre mais para a água passar)</li>
      <li>• <strong>Pressostato com defeito</strong> — a máquina não “sente” a água que entrou</li>
    </ul>
    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">O teste de 30 segundos antes de chamar técnico</h2>
    <p>
      Desligue a máquina da tomada por 5 minutos, confira se o registro está totalmente aberto e
      desconecte a mangueira para limpar o filtrinho da entrada de água. Em 40% dos casos, o E1 some.
      Se voltar no próximo ciclo, é hora de chamar especialista.
    </p>
    <div className="my-10 flex justify-center"><CTAWhats label="Resolver o erro E1 agora" /></div>
    <p>
      Continuar usando a máquina dando E1 força a bomba a trabalhar a seco — e bomba queimada custa
      bem mais que um diagnóstico preventivo.
    </p>
  </ArticleLayout>
);

export default Page;