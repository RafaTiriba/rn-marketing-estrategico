export default function StickyCTA() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-4"
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href="#diagnostico"
        className="animate-glow-pulse pointer-events-auto inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 font-body text-sm font-bold uppercase tracking-wide text-void transition-transform hover:scale-[1.03] active:scale-[0.97]"
      >
        Quero meu Diagnóstico
      </a>
    </div>
  );
}
