import { Check, X } from "lucide-react";
import GaugeArc from "./GaugeArc";
import Reveal from "./Reveal";

const CHANNELS = [
  {
    label: "Instagram",
    value: 6.0,
    diagnosis: "Boa base de seguidores, mas engajamento e alcance travados.",
    strong: "Stories ativos quase todos os dias",
    weak: "Perfil difícil de achar nas pesquisas",
  },
  {
    label: "Google Meu Negócio",
    value: 5.5,
    diagnosis: "Ficha existe, mas pouco explorada e com baixa reputação social.",
    strong: "Ficha completa com dados principais",
    weak: "Sem botão de WhatsApp e poucas avaliações",
  },
  {
    label: "Meta Ads",
    value: 1.0,
    diagnosis: "Canal praticamente inexplorado, fora do radar de novos clientes.",
    strong: "Estrutura da conta pronta para escalar",
    weak: "Nenhum anúncio ativo hoje",
  },
];

export default function MethodProof() {
  return (
    <section className="relative bg-void py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-teal">
            Prova do método
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-paper sm:text-4xl">
            Assim é o raio-x que você recebe
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-paper-dim">
            Cada canal analisado recebe uma nota e um diagnóstico honesto, com pontos fortes,
            pontos fracos e o que fazer a respeito. Esta é uma amostra real da leitura que
            preparamos para o seu negócio.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CHANNELS.map((channel, i) => (
            <Reveal
              key={channel.label}
              delay={i * 0.1}
              className="flex flex-col items-center rounded-3xl border border-hairline bg-surface p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.5)]"
            >
              <GaugeArc value={channel.value} size="md" />
              <h3 className="mt-4 font-display text-lg font-semibold text-paper">
                {channel.label}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-paper-dim">
                {channel.diagnosis}
              </p>

              <div className="mt-5 w-full space-y-2.5 border-t border-hairline pt-5 text-left">
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-good/20">
                    <Check size={11} className="text-good" strokeWidth={3} />
                  </span>
                  <span className="font-body text-[13px] leading-snug text-paper-dim">
                    {channel.strong}
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-terracotta/20">
                    <X size={11} className="text-terracotta" strokeWidth={3} />
                  </span>
                  <span className="font-body text-[13px] leading-snug text-paper-dim">
                    {channel.weak}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-12 flex flex-col items-center text-center">
          <p className="max-w-md font-body text-lg text-paper">
            Você recebe uma análise prática, sem compromisso e sem enrolação.
          </p>
          <a
            href="#diagnostico"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 font-body text-[15px] font-bold uppercase tracking-wide text-void shadow-[0_8px_30px_-8px_rgba(201,162,78,0.6)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Quero meu diagnóstico
          </a>
        </Reveal>
      </div>
    </section>
  );
}
