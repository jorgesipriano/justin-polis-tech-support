import heroImg from '@/assets/dicas/sinais-quebra-maquina.jpg';
import ArticleLayout, { CTAWhats } from './ArticleLayout';

const Page = () => (
  <ArticleLayout
    category="Sinais de alerta"
    metaTitle="5 sinais de que sua máquina de lavar vai quebrar em 30 dias | SERVIBEL"
    title="5 sinais silenciosos de que sua máquina de lavar vai quebrar nos próximos 30 dias"
    description="A maioria das máquinas dá avisos antes de parar de funcionar. Veja os 5 sinais que técnicos com 35 anos de experiência identificam — e como agir antes que o conserto fique caro."
    image={heroImg}
    imageAlt="Máquina de lavar moderna em lavanderia iluminada"
  >
    <p>
      Quase nenhuma máquina de lavar quebra do nada. Antes de parar, ela <strong>dá sinais</strong> —
      e quem aprende a ler esses avisos economiza centenas de reais em conserto emergencial.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">1. Barulho estranho na centrifugação</h2>
    <p>
      Som de “avião” ou batidas metálicas durante a centrifugação geralmente é o
      <strong> rolamento do tambor</strong> chegando ao fim. Ignorar custa caro: o eixo pode quebrar e
      danificar o tanque inteiro.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">2. Roupa saindo mais molhada que o normal</h2>
    <p>
      Indica perda de rotação na centrifugação — quase sempre <strong>correia frouxa, capacitor
      do motor</strong> ou desbalanceamento. Em lava e seca, o problema é ainda mais sério porque
      força a resistência.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">3. Cheiro de queimado leve após o ciclo</h2>
    <p>
      Pode ser correia patinando, motor superaquecendo ou fiação interna comprometida.
      <strong> Desligue da tomada</strong> e chame um técnico antes do próximo uso.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">4. Vazamento discreto embaixo da máquina</h2>
    <p>
      Mesmo poucas gotas indicam mangueira interna, bomba de drenagem ou vedação do tanque
      começando a falhar. Não espere o vazamento aumentar — o estrago na placa eletrônica é irreversível.
    </p>

    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">5. Ciclo travando ou reiniciando sozinho</h2>
    <p>
      Sintoma clássico de <strong>placa eletrônica com defeito</strong> ou sensor de nível
      (pressostato) sujo. É o sinal mais negligenciado — e o que mais leva à perda total da máquina.
    </p>

    <div className="my-10 flex justify-center">
      <CTAWhats label="Identifiquei um sinal — quero diagnóstico" />
    </div>

    <p>
      A SERVIBEL faz diagnóstico no local em Justinópolis, Ribeirão das Neves e BH. Em 35 anos,
      aprendemos que <strong>uma visita preventiva custa até 80% menos</strong> do que um conserto
      emergencial.
    </p>
  </ArticleLayout>
);

export default Page;