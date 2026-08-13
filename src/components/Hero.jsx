import { Camera, MapPin, Megaphone, Search } from "lucide-react";
import Logo from "./Logo";
import GaugeArc from "./GaugeArc";
import Reveal from "./Reveal";

const CHANNELS = [
  { icon: Camera, label: "Instagram" },
  { icon: MapPin, label: "Google Meu Negócio" },
  { icon: Megaphone, label: "Meta Ads" },
  { icon: Search, label: "Google Ads" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-void bg-grain">
      <div
        className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full opacity-25 blur-[110px]"
        style={{ background: "var(--color-gold)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-[360px] w-[360px] rounded-full opacity-15 blur-[100px]"
        style={{ background: "var(--color-teal)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col px-6 pb-16 pt-8 sm:px-8 md:pb-24 md:pt-10">
        <Logo />

        <div className="mt-14 grid gap-14 md:mt-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-8">
          <Reveal>
            <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-gold">
              Diagnóstico digital gratuito
            </span>
            <h1 className="mt-5 font-display text-[2.5rem] font-semibold leading-[1.08] text-paper sm:text-5xl md:text-[3.4rem]">
              Sua empresa está sendo encontrada{" "}
              <span className="text-terracotta">menos do que deveria</span>.
            </h1>
            <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-paper-dim">
              Descubra exatamente onde, com um diagnóstico completo e gratuito.
            </p>

            <a
              href="#diagnostico"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 font-body text-[15px] font-bold uppercase tracking-wide text-void shadow-[0_8px_30px_-8px_rgba(201,162,78,0.6)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Quero Receber meu Diagnóstico agora
            </a>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {CHANNELS.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-paper-dim"
                >
                  <Icon size={14} className="text-teal" strokeWidth={2} />
                  {label}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="flex justify-center md:justify-end">
            <div className="relative flex flex-col items-center rounded-3xl border border-hairline bg-surface/60 px-10 py-10 backdrop-blur-sm">
              <GaugeArc value={7.2} size="lg" label="Nota média das empresas locais" />
              <span className="mt-5 inline-flex items-center rounded-full bg-surface-2 px-4 py-1.5 font-body text-xs font-semibold text-paper-dim">
                a sua pode estar diferente ☝
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
