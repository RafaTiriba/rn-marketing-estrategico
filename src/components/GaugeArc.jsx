import { useEffect, useRef, useState } from "react";
import { useReveal } from "../hooks/useReveal";

const RADII = { sm: 58, md: 78, lg: 108 };
const DURATION = 1200;

function scoreColor(value) {
  if (value >= 7) return "var(--color-good)";
  if (value >= 4) return "var(--color-gold)";
  return "var(--color-terracotta)";
}

function useCountUp(target, active, delay) {
  const [displayValue, setDisplayValue] = useState(0);
  const frameRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!active) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplayValue(target);
      return undefined;
    }

    timeoutRef.current = setTimeout(() => {
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / DURATION, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplayValue(target * eased);
        if (t < 1) frameRef.current = requestAnimationFrame(tick);
      };
      frameRef.current = requestAnimationFrame(tick);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutRef.current);
      cancelAnimationFrame(frameRef.current);
    };
  }, [active, target, delay]);

  return displayValue;
}

export default function GaugeArc({
  value,
  max = 10,
  label,
  size = "md",
  delay = 0,
  className = "",
}) {
  const { ref, visible } = useReveal(0.4);
  const displayValue = useCountUp(value, visible, delay);
  const R = RADII[size] ?? RADII.md;
  const strokeWidth = R * 0.22;
  const width = 2 * R + strokeWidth;
  const height = R + strokeWidth;
  const cx = R + strokeWidth / 2;
  const cy = R + strokeWidth / 2;
  const startX = strokeWidth / 2;
  const endX = width - strokeWidth / 2;
  const circumference = Math.PI * R;
  const pct = Math.min(Math.max(value / max, 0), 1);
  const color = scoreColor(value);
  const stageReserve = R * 0.62;

  return (
    <div ref={ref} className={`inline-flex flex-col items-center ${className}`}>
      <div className="relative" style={{ width, height: height + stageReserve }}>
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
          <path
            d={`M ${startX} ${cy} A ${R} ${R} 0 0 1 ${endX} ${cy}`}
            fill="none"
            stroke="var(--color-surface-2)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d={`M ${startX} ${cy} A ${R} ${R} 0 0 1 ${endX} ${cy}`}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={visible ? circumference * (1 - pct) : circumference}
            style={{
              transition: `stroke-dashoffset 1.2s cubic-bezier(.16,1,.3,1) ${delay}s`,
            }}
          />
        </svg>
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center leading-none">
          <span className="font-mono font-semibold text-paper" style={{ fontSize: R * 0.34 }}>
            {displayValue.toFixed(1).replace(".", ",")}
          </span>
          <span className="font-mono text-paper-dim" style={{ fontSize: R * 0.13 }}>
            de {max}
          </span>
        </div>
      </div>
      {label ? (
        <span className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-dim text-center">
          {label}
        </span>
      ) : null}
    </div>
  );
}
