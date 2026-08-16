import { Camera, Search, TrendingDown } from "lucide-react";
import Reveal from "./Reveal";

const PROBLEMS = [
  {
    icon: Camera,
    title: "Instagram",
    text: "Seu conteúdo não alcança as pessoas certas.",
  },
  {
    icon: Search,
    title: "Google",
    text: "Seu concorrente aparece antes de você.",
  },
  {
    icon: TrendingDown,
    title: "Anúncios",
    text: "Você investe, mas não sabe onde está perdendo dinheiro.",
  },
];

export default function ProblemCards() {
  return (
    <section className="relative bg-void py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-teal">
            O problema real
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-paper sm:text-4xl">
            Talvez o problema não seja falta de clientes.
          </h2>
          <p className="mt-4 font-body text-lg text-paper-dim">
            Talvez eles simplesmente não estejam encontrando você.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {PROBLEMS.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={i * 0.1}
              className="rounded-3xl border border-hairline bg-surface p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-terracotta/12">
                <Icon size={20} className="text-terracotta" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-paper">{title}</h3>
              <p className="mt-2 font-body text-[15px] leading-relaxed text-paper-dim">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
