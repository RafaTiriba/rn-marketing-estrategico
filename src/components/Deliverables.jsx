import { Target, MessageCircle, MapPin, LayoutTemplate, Bot } from "lucide-react";
import Reveal from "./Reveal";

const ITEMS = [
  {
    icon: Target,
    accent: "gold",
    title: "Tráfego Pago",
    tag: "Meta Ads e Google Ads",
    description:
      "Gestão completa de campanhas com foco em atrair clientes prontos para comprar — segmentação por região, criativos testados e otimização contínua baseada em dados reais. Relatórios simples de acompanhar.",
  },
  {
    icon: MessageCircle,
    accent: "teal",
    title: "Social Media",
    tag: "Instagram e Facebook",
    description:
      "Gestão de conteúdo estratégico — planejamento editorial, produção de posts e stories, organização de destaques, ações para aumentar engajamento real (comentários, salvamentos, compartilhamentos).",
  },
  {
    icon: MapPin,
    accent: "gold",
    title: "Google Meu Negócio",
    tag: "SEO local",
    description:
      'Otimização completa da ficha para aparecer nas buscas locais ("perto de mim") — SEO local, fotos profissionais, gestão de avaliações, ativação de botão de contato direto, publicações recorrentes.',
  },
  {
    icon: LayoutTemplate,
    accent: "teal",
    title: "Criação de Landing Pages e Sites",
    tag: "Conversão",
    description:
      "Páginas de conversão focadas em objetivo único (capturar lead, agendar visita, gerar contato via WhatsApp) — mobile-first, copy estratégico.",
  },
  {
    icon: Bot,
    accent: "gold",
    title: "Automações com IA",
    tag: "Atendimento e qualificação",
    description:
      "Fluxos automatizados de atendimento e qualificação de leads (WhatsApp, formulários), reduzindo tempo de resposta e filtrando quem está pronto para comprar.",
  },
];

const ACCENTS = {
  gold: { bg: "bg-gold/12", text: "text-gold" },
  teal: { bg: "bg-teal/12", text: "text-teal" },
};

export default function Deliverables() {
  return (
    <section className="relative bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-gold">
            O que eu entrego
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-paper sm:text-4xl">
            Tudo que sua presença digital precisa, em um só lugar
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            const accent = ACCENTS[item.accent];
            return (
              <Reveal
                key={item.title}
                delay={(i % 2) * 0.08}
                className={`group rounded-3xl border border-hairline bg-void p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.5)] sm:p-8 ${
                  i === ITEMS.length - 1 ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${accent.bg}`}
                >
                  <Icon size={20} className={accent.text} strokeWidth={2} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-paper">
                  {item.title}
                </h3>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper-dim">
                  {item.tag}
                </span>
                <p className="mt-3 font-body text-[15px] leading-relaxed text-paper-dim">
                  {item.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
