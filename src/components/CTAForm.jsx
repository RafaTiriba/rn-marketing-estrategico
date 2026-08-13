import { useState } from "react";
import Reveal from "./Reveal";

const WHATSAPP_NUMBER = "5514996526792";

const initialState = {
  nome: "",
  negocio: "",
  cidade: "",
  instagram: "",
  whatsapp: "",
  temFichaGoogle: "",
};

function buildWhatsappMessage(data) {
  const lines = [
    "Olá! Vim pela landing page e quero receber meu diagnóstico digital gratuito.",
    "",
    `Nome: ${data.nome}`,
    `Negócio: ${data.negocio}`,
    `Cidade: ${data.cidade}`,
    `Instagram: ${data.instagram}`,
    `WhatsApp: ${data.whatsapp}`,
    `Tem ficha do Google? ${data.temFichaGoogle}`,
  ];
  return encodeURIComponent(lines.join("\n"));
}

export default function CTAForm() {
  const [data, setData] = useState(initialState);
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => setData((d) => ({ ...d, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = buildWhatsappMessage(data);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section id="diagnostico" className="relative bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <Reveal className="text-center">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-gold">
            Vamos começar
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-paper sm:text-4xl">
            Quero Receber meu Diagnóstico agora
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-body text-base leading-relaxed text-paper-dim">
            Preencha os dados abaixo e eu preparo, sem custo, a análise completa do seu
            Instagram, Google Meu Negócio e Meta Ads.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          {sent ? (
            <div className="rounded-3xl border border-hairline bg-void p-10 text-center">
              <p className="font-display text-xl font-semibold text-paper">
                Prontinho, quase lá!
              </p>
              <p className="mt-2 font-body text-sm leading-relaxed text-paper-dim">
                Abrimos o WhatsApp com seus dados preenchidos — é só confirmar o envio da
                mensagem por lá.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid gap-5 rounded-3xl border border-hairline bg-void p-6 sm:grid-cols-2 sm:p-9"
            >
              <Field label="Seu nome" htmlFor="nome">
                <input
                  id="nome"
                  required
                  value={data.nome}
                  onChange={update("nome")}
                  placeholder="Como você se chama"
                  className={inputClass}
                />
              </Field>

              <Field label="Nome do seu negócio" htmlFor="negocio">
                <input
                  id="negocio"
                  required
                  value={data.negocio}
                  onChange={update("negocio")}
                  placeholder="Ex: Casa Horne"
                  className={inputClass}
                />
              </Field>

              <Field label="Cidade" htmlFor="cidade">
                <input
                  id="cidade"
                  required
                  value={data.cidade}
                  onChange={update("cidade")}
                  placeholder="Ex: Bauru/SP"
                  className={inputClass}
                />
              </Field>

              <Field label="Página do Instagram" htmlFor="instagram">
                <input
                  id="instagram"
                  required
                  value={data.instagram}
                  onChange={update("instagram")}
                  placeholder="@seu.negocio"
                  className={inputClass}
                />
              </Field>

              <Field label="WhatsApp" htmlFor="whatsapp">
                <input
                  id="whatsapp"
                  required
                  type="tel"
                  value={data.whatsapp}
                  onChange={update("whatsapp")}
                  placeholder="(14) 90000-0000"
                  className={inputClass}
                />
              </Field>

              <Field label="Tem ficha do Google?" htmlFor="temFichaGoogle">
                <div className="flex gap-3 pt-1">
                  {["Sim", "Não"].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setData((d) => ({ ...d, temFichaGoogle: option }))}
                      aria-pressed={data.temFichaGoogle === option}
                      className={`flex-1 rounded-xl border px-4 py-3 font-body text-sm font-semibold transition-colors ${
                        data.temFichaGoogle === option
                          ? "border-gold bg-gold/12 text-gold"
                          : "border-hairline bg-surface-2 text-paper-dim"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </Field>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 font-body text-[15px] font-bold text-void shadow-[0_8px_30px_-8px_rgba(201,162,78,0.6)] transition-transform hover:scale-[1.02] active:scale-[0.98] sm:col-span-2"
              >
                Enviar e receber meu diagnóstico
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-xl border border-hairline bg-surface-2 px-4 py-3 font-body text-[15px] text-paper placeholder:text-paper-dim/50 outline-none transition-colors focus:border-gold";

function Field({ label, htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-paper-dim">
        {label}
      </span>
      {children}
    </label>
  );
}
