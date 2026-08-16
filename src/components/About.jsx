import Reveal from "./Reveal";
import rafaelPhoto from "../assets/rafael.jpg";

const BADGES = ["Certificado Google", "Meta Ads", "SEO Local", "IA aplicada"];

export default function About() {
  return (
    <section className="relative bg-void py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal className="grid gap-10 md:grid-cols-[auto_1fr] md:items-center md:gap-12">
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div
                className="absolute -inset-2 rounded-full opacity-40 blur-xl"
                style={{ background: "var(--color-gold)" }}
                aria-hidden="true"
              />
              <img
                src={rafaelPhoto}
                alt="Rafael Nogueira"
                className="relative h-32 w-32 rounded-full border-2 border-gold-soft object-cover sm:h-40 sm:w-40"
              />
            </div>
          </div>

          <div>
            <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-teal">
              Sobre mim
            </span>
            <h2 className="mt-3 font-display text-2xl font-semibold text-paper sm:text-3xl">
              Rafael Nogueira
            </h2>
            <p className="mt-4 max-w-xl font-body text-lg leading-relaxed text-paper">
              Marketing não é sobre postar por postar. É sobre entender onde sua empresa
              está, onde quer chegar e construir uma estratégia para chegar até lá.
            </p>
            <p className="mt-3 max-w-xl font-body text-[15px] leading-relaxed text-paper-dim">
              Gestor de tráfego pago, especialista em marketing digital para negócios locais,
              certificado pelo Google e especialista em Inteligência Artificial aplicada a
              marketing.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {BADGES.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-hairline px-4 py-1.5 font-body text-xs font-semibold text-paper-dim"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
