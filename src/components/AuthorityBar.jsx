import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const CHANNELS = ["Meta Ads", "Google Ads", "Instagram", "Google Meu Negócio", "Estratégia Digital"];

const STATS = [
  { value: "+20M", label: "visualizações geradas" },
  { value: "+12mil", label: "seguidores em 1 mês" },
];

export default function AuthorityBar() {
  return (
    <section className="border-y border-hairline bg-surface py-8">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5">
          {CHANNELS.map((channel, i) => (
            <span key={channel} className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper-dim">
                {channel}
              </span>
              {i < CHANNELS.length - 1 ? (
                <span className="text-gold" aria-hidden="true">
                  •
                </span>
              ) : null}
            </span>
          ))}
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-8 grid grid-cols-1 divide-y divide-hairline sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 py-4 sm:py-0">
              <span className="font-mono text-2xl font-semibold text-gold sm:text-3xl">
                {stat.value}
              </span>
              <span className="font-body text-xs text-paper-dim">{stat.label}</span>
            </div>
          ))}
          <div className="flex flex-col items-center gap-1 py-4 sm:py-0">
            <CheckCircle2 className="text-gold" size={28} strokeWidth={2} />
            <span className="font-body text-xs text-paper-dim">Ficha no topo do Google</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
