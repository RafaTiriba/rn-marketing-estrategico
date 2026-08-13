export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="font-display text-2xl font-semibold leading-none text-paper">RN</span>
      <span className="flex flex-col leading-tight">
        <span className="font-body text-[13px] font-bold tracking-[0.02em] text-paper">
          RAFAEL NOGUEIRA
        </span>
        <span className="font-mono text-[9px] font-medium tracking-[0.2em] text-gold-soft">
          MARKETING ESTRATÉGICO
        </span>
      </span>
    </div>
  );
}
