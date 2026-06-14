import heroImg from '@/assets/dicas/lava-seca-consumo-energia.jpg';
import ArticleLayout, { CTAWhats } from './ArticleLayout';

const Page = () => (
  <ArticleLayout
    category="Economia"
    metaTitle="Lava e Seca disparou na conta de luz? Veja o real motivo | SERVIBEL"
    title="Sua Lava e Seca pode estar somando R$ 180 por mês na conta de luz (e você nem percebe)"
    description="A função secadora é a maior vilã de consumo doméstico. Entenda o cálculo real e o ajuste de uso que corta até 40% da conta."
    image={heroImg}
    imageAlt="Calculadora ao lado de lava e seca mostrando consumo de energia"
  >
    <p>
      Uma lava e seca usada em modo <strong>secagem total 4 vezes por semana</strong> consome em média
      <strong> 96 kWh/mês</strong> — isso são cerca de <strong>R$ 90 a R$ 180</strong> dependendo da
      bandeira tarifária. É o equivalente a deixar 3 geladeiras ligadas.
    </p>
    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Por que o consumo cresce com o tempo</h2>
    <ul className="space-y-3">
      <li>• <strong>Resistência com calcário</strong> demora mais para aquecer (consumo +20%)</li>
      <li>• <strong>Filtro de fiapos sujo</strong> obriga o ciclo a se estender</li>
      <li>• <strong>Sensor de umidade descalibrado</strong> faz a máquina secar além do necessário</li>
      <li>• <strong>Vedação da porta ressecada</strong> deixa o calor escapar</li>
    </ul>
    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">3 ajustes que cortam até 40%</h2>
    <ol className="space-y-3 list-decimal pl-6">
      <li>Use <strong>centrifugação extra</strong> antes de secar (tira mais água que o calor consegue)</li>
      <li>Seque cargas <strong>iguais</strong> juntas — toalhas com toalhas, sintéticos com sintéticos</li>
      <li>Faça <strong>manutenção preventiva anual</strong> da resistência e do sensor</li>
    </ol>
    <div className="my-10 flex justify-center"><CTAWhats label="Quero diagnóstico de consumo da minha máquina" /></div>
  </ArticleLayout>
);

export default Page;