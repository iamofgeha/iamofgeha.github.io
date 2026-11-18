import { motion, useReducedMotion } from 'framer-motion';

/**
 * Hero figure: a schematic of the variant-to-hypothesis pipeline Ofgeha works on.
 * The accent route is the Open Targets fast path. Draws in once and then stays still.
 */

type Node = { id: string; x: number; y: number; label: string; side?: 'left' | 'right'; accent?: boolean };

const nodes: Node[] = [
  { id: 'gwas', x: 200, y: 44, label: 'gwas sumstats', side: 'right', accent: true },
  { id: 'harm', x: 200, y: 118, label: 'harmonise', side: 'right' },
  { id: 'ot', x: 82, y: 196, label: 'open targets', side: 'right', accent: true },
  { id: 'fine', x: 200, y: 196, label: 'fine-map', side: 'right' },
  { id: 'ldsc', x: 318, y: 196, label: 'ldsc', side: 'right' },
  { id: 'gene', x: 140, y: 276, label: 'genes', side: 'left', accent: true },
  { id: 'tissue', x: 262, y: 276, label: 'tissues', side: 'right' },
  { id: 'llm', x: 200, y: 352, label: 'llm', side: 'right', accent: true },
];

const at = (id: string) => nodes.find((n) => n.id === id)!;

const curve = (a: string, b: string) => {
  const p = at(a);
  const q = at(b);
  const my = (p.y + q.y) / 2;
  return `M${p.x} ${p.y} C${p.x} ${my}, ${q.x} ${my}, ${q.x} ${q.y}`;
};

const edges: { d: string; accent?: boolean; dashed?: boolean; step: number }[] = [
  { d: curve('gwas', 'harm'), step: 0 },
  { d: curve('gwas', 'ot'), accent: true, step: 0 },
  { d: curve('harm', 'fine'), step: 1 },
  { d: curve('harm', 'ldsc'), step: 1 },
  { d: curve('ot', 'gene'), accent: true, step: 2 },
  { d: curve('fine', 'gene'), step: 2 },
  { d: curve('ldsc', 'tissue'), step: 2 },
  { d: `M${at('gene').x} ${at('gene').y} H${at('tissue').x}`, dashed: true, step: 3 },
  { d: curve('gene', 'llm'), accent: true, step: 3 },
  { d: curve('tissue', 'llm'), step: 3 },
  { d: `M200 352 V404`, accent: true, step: 4 },
];

export function SignalGraph() {
  const reduce = useReducedMotion();
  const t = (step: number) => ({ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : 0.35 + step * 0.28, ease: [0.65, 0, 0.35, 1] as const });

  return (
    <svg
      viewBox="0 0 400 452"
      className="h-auto w-full"
      role="img"
      aria-labelledby="signal-title signal-desc"
    >
      <title id="signal-title">From genetic variant to hypothesis</title>
      <desc id="signal-desc">
        Schematic pipeline: GWAS summary statistics are harmonised, fine-mapped and analysed with LDSC, then mapped
        to genes and tissues and summarised by a language model into a hypothesis. A highlighted fast path reuses
        Open Targets credible sets.
      </desc>

      {edges.map((e, i) => (
        <motion.path
          key={i}
          d={e.d}
          fill="none"
          strokeWidth={e.accent ? 1.5 : 1}
          strokeDasharray={e.dashed ? '2 4' : undefined}
          className={e.accent ? 'stroke-accent' : 'stroke-fg/25'}
          initial={{ pathLength: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={t(e.step)}
        />
      ))}

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
        transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 1.7 }}
      >
        <rect x={128} y={404} width={144} height={34} rx={17} className="fill-fg" />
        <text x={200} y={425.5} textAnchor="middle" className="fill-bg font-mono text-[11px] font-medium tracking-wide">
          hypothesis
        </text>
      </motion.g>
    </svg>
  );
}
