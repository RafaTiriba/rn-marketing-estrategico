import Reveal from "./Reveal";

const STEPS = [
  { number: "01", title: "Você solicita o diagnóstico" },
  { number: "02", title: "Eu analiso sua presença digital" },
  { number: "03", title: "Você recebe os principais problemas e oportunidades" },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-surface py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-teal">
            O processo
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-paper sm:text-4xl">
            Como funciona
          </h2>
        </Reveal>

        <div className="relative mt-14 grid gap-10 sm:grid-cols-3 sm:gap-6">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-hairline sm:block"
            aria-hidden="true"
          />
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1} className="relative flex flex-col items-center text-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-surface font-mono text-base font-semibold text-gold">
                {step.number}
              </span>
              <p className="mt-4 max-w-[15rem] font-body text-base leading-snug text-paper">
                {step.title}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
