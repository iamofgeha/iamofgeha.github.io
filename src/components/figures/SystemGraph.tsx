import { motion, useReducedMotion } from 'framer-motion';

/**
 * Hero figure: the machine-learning lifecycle as a system, from data to production and back.
 * The accent route is the main path; the dashed loop is retraining from monitoring.
 * Draws in once and then stays still.
 */

type Node = { id: string; x: number; y: number; label: string; side?: 'left' | 'right'; accent?: boolean };

const nodes: Node[] = [
  { id: 'data', x: 200, y: 44, label: 'data · etl', side: 'right', accent: true },
  { id: 'features', x: 200, y: 118, label: 'feature pipeline', side: 'right', accent: true },
  { id: 'train', x: 120, y: 196, label: 'train', side: 'left', accent: true },
  { id: 'eval', x: 280, y: 196, label: 'evaluate', side: 'right', accent: true },
  { id: 'serve', x: 200, y: 276, label: 'serve · api', side: 'left', accent: true },
  { id: 'llm', x: 300, y: 276, label: 'llm · rag', side: 'right' },
  { id: 'monitor', x: 200, y: 352, label: 'monitor', side: 'right', accent: true },
];

const at = (id: string) => nodes.find((n) => n.id === id)!;

const curve = (a: string, b: string) => {
  const p = at(a);
  const q = at(b);
  const my = (p.y + q.y) / 2;
  return `M${p.x} ${p.y} C${p.x} ${my}, ${q.x} ${my}, ${q.x} ${q.y}`;
};

const line = (a: string, b: string) => `M${at(a).x} ${at(a).y} L${at(b).x} ${at(b).y}`;

const edges: { d: string; accent?: boolean; dashed?: boolean; step: number }[] = [
  { d: line('data', 'features'), accent: true, step: 0 },
  { d: curve('features', 'train'), accent: true, step: 1 },
  { d: line('train', 'eval'), accent: true, step: 2 },
  { d: curve('eval', 'serve'), accent: true, step: 3 },
  { d: line('serve', 'llm'), step: 3 },
  { d: line('serve', 'monitor'), accent: true, step: 4 },
  { d: 'M200 352 V404', accent: true, step: 5 },
  // Retraining loop: monitoring feeds new data back into the system.
  { d: 'M188 352 C 28 352, 28 44, 188 44', dashed: true, step: 5 },
];

export function SystemGraph() {
  const reduce = useReducedMotion();
  const t = (step: number) => ({
    duration: reduce ? 0 : 0.7,
    delay: reduce ? 0 : 0.35 + step * 0.26,
    ease: [0.65, 0, 0.35, 1] as const,
  });

  return (
    <svg viewBox="0 0 400 452" className="h-auto w-full" role="img" aria-labelledby="system-title system-desc">
      <title id="system-title">A machine-learning system, from data to production</title>
      <desc id="system-desc">
        Schematic lifecycle: data and ETL feed a feature pipeline; models are trained and evaluated, then served
        through an API alongside an LLM and retrieval service, and monitored in production. A dashed loop shows
        monitoring feeding new data back for retraining.
      </desc>

      {edges.map((e, i) => (
        <motion.path
          key={i}
          d={e.d}
          fill="none"
          strokeWidth={e.accent ? 1.5 : 1}
          strokeDasharray={e.dashed ? '3 5' : undefined}
          className={e.accent ? 'stroke-accent' : 'stroke-fg/30'}
          initial={{ pathLength: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={t(e.step)}
        />
      ))}

      <motion.text
        x={44}
        y={202}
        className="fill-subtle font-mono text-[10px] tracking-wide"
        initial={{ opacity: reduce ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 1.8 }}
        transform="rotate(-90 44 202)"
        textAnchor="middle"
      >
        retrain
      </motion.text>

      {nodes.map((n, i) => (
        <motion.g
          key={n.id}
          initial={{ opacity: reduce ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.25 + i * 0.12 }}
        >
          <circle cx={n.x} cy={n.y} r={n.accent ? 9 : 7} className={n.accent ? 'fill-accent/15' : 'fill-fg/[0.06]'} />
          <circle cx={n.x} cy={n.y} r={3.25} className={n.accent ? 'fill-accent' : 'fill-fg/70'} />
          <text
            x={n.side === 'left' ? n.x - 14 : n.x + 14}
            y={n.y + 3.5}
            textAnchor={n.side === 'left' ? 'end' : 'start'}
            className={`font-mono text-[10.5px] tracking-wide ${n.accent ? 'fill-fg' : 'fill-muted'}`}
          >
            {n.label}
          </text>
        </motion.g>
      ))}

      <motion.g
        initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 1.8 }}
      >
        <rect x={128} y={404} width={144} height={34} rx={17} className="fill-fg" />
        <text x={200} y={425.5} textAnchor="middle" className="fill-bg font-mono text-[11px] font-medium tracking-wide">
          production
        </text>
      </motion.g>
    </svg>
  );
}
