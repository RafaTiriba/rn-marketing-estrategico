import { MessageCircle, Camera, Mail } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative bg-void pb-32 pt-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center sm:px-8">
        <Logo />
        <p className="max-w-sm font-body text-sm leading-relaxed text-paper-dim">
          Marketing digital para negócios locais em Bauru/SP e região.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.1em] text-paper-dim">
          <a
            href="https://wa.me/5514996526792"
            className="inline-flex items-center gap-1.5 hover:text-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={13} className="text-good" strokeWidth={2} aria-hidden="true" />
            (14) 99652-6792
          </a>
          <a
            href="https://instagram.com/orafa.nogueira"
            className="inline-flex items-center gap-1.5 hover:text-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Camera size={13} className="text-teal" strokeWidth={2} aria-hidden="true" />
            @orafa.nogueira
          </a>
          <a
            href="mailto:orafa.nogueira@gmail.com"
            className="inline-flex items-center gap-1.5 hover:text-gold"
          >
            <Mail size={13} className="text-gold" strokeWidth={2} aria-hidden="true" />
            orafa.nogueira@gmail.com
          </a>
        </div>
        <p className="font-mono text-[11px] text-paper-dim/60">
          © {new Date().getFullYear()} RN Marketing Estratégico
        </p>
      </div>
    </footer>
  );
}
