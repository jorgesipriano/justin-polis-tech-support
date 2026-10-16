import heroImg from '@/assets/dicas/lava-seca-midea-reparo.jpg';
import ArticleLayout, { CTAWhats } from './ArticleLayout';

const Page = () => (
  <ArticleLayout
    category="Lava e Seca Midea"
    metaTitle="Reparo de Lava e Seca Midea em Justinópolis e Ribeirão das Neves | SERVIBEL"
    title="Lava e Seca Midea quebrada? Não descarte antes de ler isso"
    description="Erros E30, E10, porta travada, não seca: os defeitos mais comuns da lava e seca Midea têm conserto — e custam muito menos que uma máquina nova."
    image={heroImg}
    imageAlt="Técnico apontando código de erro no display de lava e seca"
  >
    <p>
      Sua lava e seca <strong>Midea</strong> parou, travou a porta ou apareceu um código estranho no
      display? Antes de pensar em comprar outra máquina, saiba: <strong>a grande maioria dos defeitos
      da Midea tem conserto rápido e com garantia</strong> — por uma fração do preço de um aparelho novo.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Os defeitos que mais consertamos em lava e seca Midea</h2>
    <ul className="space-y-3">
      <li>• <strong>E30 / porta travada</strong> — falha na trava da porta; a máquina não inicia nenhum ciclo</li>
      <li>• <strong>E10</strong> — a máquina não enche de água: válvula, filtro de entrada ou pressostato</li>
      <li>• <strong>Lava mas não seca</strong> — resistência de secagem ou duto de ar entupido de fiapos</li>
      <li>• <strong>Barulho alto na centrifugação</strong> — rolamento ou amortecedor desgastado</li>
      <li>• <strong>Não liga / display apagado</strong> — placa eletrônica, o defeito mais temido (e que muitas vezes é reparável, não precisa trocar a placa inteira)</li>
    </ul>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">O erro que donos de Midea cometem</h2>
    <p>
      Resetar a máquina repetidamente ou forçar a porta travada. Na Midea, a trava da porta é ligada
      à placa eletrônica — <strong>forçar a abertura pode queimar a placa</strong>, transformando um
      reparo simples em um conserto caro. Se a porta não abre, desligue da tomada, aguarde 10 minutos
      e, se continuar travada, chame um técnico.
    </p>

    <div className="my-10 flex justify-center"><CTAWhats label="Consertar minha lava e seca Midea agora" /></div>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Por que chamar a SERVIBEL?</h2>
    <p>
      São <strong>35 anos de experiência</strong> em máquinas de lavar e lava e seca, com atendimento
      em domicílio em <strong>Justinópolis, Ribeirão das Neves e região</strong>. Diagnóstico honesto:
      se o conserto não vale a pena, a gente fala. Se vale, resolvemos no mesmo dia na maioria dos casos.
    </p>
    <p>
      Não espere o defeito piorar — uma máquina que "ainda funciona mais ou menos" costuma parar de
      vez no pior momento. Chame agora e fale direto com o especialista.
    </p>

    <div className="my-10 flex justify-center"><CTAWhats label="Falar com o técnico no WhatsApp" /></div>
  </ArticleLayout>
);

export default Page;
