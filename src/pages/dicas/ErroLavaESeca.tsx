import heroImg from '@/assets/dicas/lava-seca.jpg';
import ArticleLayout, { CTAWhats } from './ArticleLayout';

const Page = () => (
  <ArticleLayout
    category="Diagnóstico Técnico"
    metaTitle="Lava e Seca parou no meio do ciclo? Leia antes de mexer no painel | SERVIBEL"
    title="Lava e Seca parou no meio do ciclo? Não force o painel antes de ler isso."
    description="Erros de drenagem, placa eletrônica e sensores: por que tentar resetar várias vezes pode queimar de vez a sua máquina. Diagnóstico técnico especializado SERVIBEL."
    image={heroImg}
    imageAlt="Painel de Lava e Seca com código de erro piscando"
  >
    <p>
      Sua <strong>Lava e Seca travou</strong> no meio do ciclo, com um código piscando no painel,
      e o primeiro impulso é apertar todos os botões para "resetar"? <strong>Pare.</strong> Cada
      reset forçado pode estar empurrando a máquina para o conserto mais caro de todos: a troca da
      placa eletrônica.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Os erros mais comuns (e o que eles realmente significam)</h2>
    <ul className="list-disc pl-6 space-y-3">
      <li><strong>Erro de drenagem (E/dE/5E):</strong> bomba obstruída, mangueira dobrada ou filtro entupido.</li>
      <li><strong>Erro de aquecimento:</strong> resistência queimada ou sensor NTC com leitura errada.</li>
      <li><strong>Erro de porta (dC):</strong> trava eletrônica desgastada — não é só "fechar mais forte".</li>
      <li><strong>Erro de placa (PE/UE):</strong> falha na CPU, geralmente por surtos de energia.</li>
    </ul>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Por que resetar toda hora queima a máquina</h2>
    <p>
      Quando você desliga e religa repetidamente uma máquina com erro ativo, a placa tenta executar
      o ciclo de novo <strong>sem corrigir a falha de origem</strong>. Isso sobrecarrega componentes
      como o motor, a resistência e a própria CPU. É comum o que começou como um simples filtro
      entupido virar uma <strong>troca de placa de R$ 800 a R$ 1.500</strong>.
    </p>

    <div className="my-10 flex justify-center"><CTAWhats label="Pedir Diagnóstico Técnico Especializado" /></div>

    <aside className="my-10 p-6 rounded-xl border-2 border-primary/30 bg-primary/5">
      <p className="text-sm uppercase tracking-wide text-primary font-bold mb-3">A palavra do dono</p>
      <p className="text-lg text-foreground font-semibold mb-2">
        Jorge Sipriano explica: por que aparelhos modernos exigem manutenção técnica especializada
      </p>
      <p className="text-muted-foreground">
        "As Lava e Seca de hoje têm sensores, placas e firmwares próprios de cada marca. Um técnico
        sem o equipamento certo só consegue chutar a peça. Em 35 anos de oficina, aprendi que o
        diagnóstico correto na primeira visita é o que separa um conserto barato de um prejuízo
        grande para o cliente." — <strong>Jorge Sipriano, dono da SERVIBEL</strong>
      </p>
    </aside>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">O que fazer agora</h2>
    <ol className="list-decimal pl-6 space-y-3">
      <li><strong>Desligue da tomada</strong> e não tente novos ciclos.</li>
      <li>Anote o <strong>código de erro</strong> que apareceu.</li>
      <li>Chame um técnico com equipamento de leitura da placa antes que a falha se espalhe.</li>
    </ol>

    <div className="my-10 flex justify-center"><CTAWhats label="Pedir Diagnóstico Técnico Especializado" /></div>
  </ArticleLayout>
);

export default Page;