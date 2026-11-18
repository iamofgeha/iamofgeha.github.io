import { createContext, useContext, type ReactNode } from 'react';
import type { FigureKind } from '../../content/site';

/**
 * Schematic figures for the featured projects. They describe the architecture and the change
 * that was made. They are diagrams, not measurements: no figure implies a benchmark result.
 */

const Ns = createContext('fig');

const Label = ({ x, y, children, anchor = 'start', strong = false }: { x: number; y: number; children: ReactNode; anchor?: 'start' | 'middle' | 'end'; strong?: boolean }) => (
  <text x={x} y={y} textAnchor={anchor} className={`font-mono text-[10px] tracking-wide ${strong ? 'fill-fg' : 'fill-muted'}`}>
    {children}
  </text>
);

const Box = ({ x, y, w, label, accent = false, muted = false }: { x: number; y: number; w: number; label: string; accent?: boolean; muted?: boolean }) => (
  <g>
    <rect
      x={x}
      y={y}
      width={w}
      height={30}
      rx={8}
      className={
        accent
          ? 'fill-accent/10 stroke-accent transition-colors duration-500 group-hover:fill-accent/20'
          : muted
            ? 'fill-transparent stroke-fg/20'
            : 'fill-fg/[0.04] stroke-fg/25'
      }
      strokeDasharray={muted ? '3 3' : undefined}
    />
    <Label x={x + w / 2} y={y + 19} anchor="middle" strong={!muted}>
      {label}
    </Label>
  </g>
);

const Arrow = ({ d, accent = false, dashed = false }: { d: string; accent?: boolean; dashed?: boolean }) => {
  const ns = useContext(Ns);
  return (
  <path
    d={d}
    fill="none"
    markerEnd={accent ? `url(#${ns}-arrow-accent)` : `url(#${ns}-arrow)`}
    strokeDasharray={dashed ? '3 3' : undefined}
    className={accent ? 'stroke-accent' : 'stroke-fg/30'}
    strokeWidth={accent ? 1.4 : 1}
  />
  );
};

const Defs = () => {
  const ns = useContext(Ns);
  return (
  <defs>
    <marker id={`${ns}-arrow`} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0L8 4L0 8z" className="fill-fg/40" />
    </marker>
    <marker id={`${ns}-arrow-accent`} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0L8 4L0 8z" className="fill-accent" />
    </marker>
  </defs>
  );
};

function Hypothesis() {
  return (
    <>
      <Box x={20} y={30} w={120} label="gwas study" />
      <Box x={20} y={95} w={120} label="credible sets" />
      <Box x={20} y={160} w={120} label="enrichment" />
      <Box x={20} y={225} w={120} label="knowledge base" />
      <Arrow d="M80 60V93" />
      <Arrow d="M80 125V158" />

      <Box x={176} y={160} w={130} label="co-expression" accent />
      <Label x={241} y={152} anchor="middle">cached per tissue</Label>
      <Arrow d="M140 175H174" accent />

      {[45, 110, 175, 240].map((y) => (
        <path key={y} d={`M140 ${y} C 300 ${y}, 300 128, 344 128`} fill="none" className="stroke-fg/15" />
      ))}
      <path d="M306 175 C 326 175, 326 128, 344 128" fill="none" className="stroke-accent" strokeWidth={1.4} />

      <rect x={344} y={98} width={136} height={60} rx={12} className="fill-fg/[0.04] stroke-fg/30" />
      <Label x={412} y={124} anchor="middle" strong>llm summary</Label>
      <Label x={412} y={142} anchor="middle">evidence → text</Label>
      <Arrow d="M412 158V214" />
      <rect x={350} y={216} width={124} height={34} rx={17} className="fill-fg" />
      <text x={412} y={237} textAnchor="middle" className="fill-bg font-mono text-[10.5px] font-medium">
        hypothesis
      </text>
    </>
  );
}

function OpenTargets() {
  return (
    <>
      <Box x={20} y={30} w={110} label="gwas study" />
      <Arrow d="M130 45H168" />
      <path d="M220 18 L270 45 L220 72 L170 45 Z" className="fill-fg/[0.04] stroke-fg/30" />
      <Label x={220} y={42} anchor="middle" strong>in open</Label>
      <Label x={220} y={55} anchor="middle" strong>targets?</Label>

      <Arrow d="M270 45H318" accent />
      <Label x={294} y={36} anchor="middle">yes</Label>
      <Box x={320} y={30} w={160} label="reuse credible set" accent />

      <Arrow d="M220 72V118" dashed />
      <Label x={230} y={100}>no</Label>
      <Box x={160} y={120} w={120} label="harmonise" muted />
      <Arrow d="M220 150V178" dashed />
      <Box x={160} y={180} w={120} label="susie fine-map" muted />

      <path d="M400 60 V 240 H 282" fill="none" markerEnd="url(#opentargets-arrow-accent)" className="stroke-accent" strokeWidth={1.4} />
      <path d="M220 210 V 228" fill="none" className="stroke-fg/30" strokeDasharray="3 3" />
      <Box x={160} y={228} w={120} label="ldsc · genes" />

      <rect x={20} y={226} width={120} height={36} rx={6} className="fill-transparent stroke-fg/20" />
      <Label x={30} y={241}>provenance</Label>
      <Label x={30} y={254} strong>ot_release pinned</Label>
      <path d="M140 244 H 158" className="stroke-fg/25" strokeDasharray="2 3" />
    </>
  );
}

function Harmonise() {
  const chroms = Array.from({ length: 22 }, (_, i) => i);
  return (
    <>
      <Label x={20} y={30} strong>before</Label>
      <Label x={70} y={30}>one sequential run</Label>
      {chroms.map((i) => (
        <rect key={`a${i}`} x={20 + i * 20.5} y={42} width={18} height={10} rx={2} className="fill-fg/20" />
      ))}

      <Label x={20} y={92} strong>after</Label>
      <Label x={70} y={92}>one job per chromosome</Label>
      {chroms.map((i) => (
        <g key={`b${i}`}>
          <rect
            x={20 + (i % 11) * 41}
            y={104 + Math.floor(i / 11) * 18}
            width={36}
            height={10}
            rx={2}
            className="fill-accent/70 transition-opacity duration-500 group-hover:opacity-100"
            opacity={0.85}
          />
        </g>
      ))}

      <Box x={20} y={186} w={100} label="sumstats" />
      <Arrow d="M120 201H146" />
      <Box x={148} y={186} w={90} label="liftover" />
      <Arrow d="M238 201H264" />
      <Box x={266} y={186} w={80} label="rsid" />
      <Arrow d="M346 201H372" accent />
      <Box x={374} y={186} w={106} label="hg38 aligned" accent />
      <Label x={20} y={250}>strand · allele orientation · build checked against reference</Label>
    </>
  );
}

const titles: Record<FigureKind, string> = {
  hypothesis: 'Pipeline schematic: evidence sources feed an LLM summary that produces a hypothesis; co-expression is cached per tissue.',
  opentargets: 'Decision flow: if a study is in Open Targets its credible set is reused, otherwise it is harmonised and fine-mapped with SuSiE.',
  harmonise: 'Harmonisation: chromosomes processed as parallel jobs, then liftover and rsID assignment to an hg38-aligned output.',
};

export function ProjectFigure({ kind }: { kind: FigureKind }) {
  return (
    <Ns.Provider value={kind}>
      <svg viewBox="0 0 500 280" className="h-auto w-full" role="img" aria-label={titles[kind]}>
        <Defs />
        {kind === 'hypothesis' && <Hypothesis />}
        {kind === 'opentargets' && <OpenTargets />}
        {kind === 'harmonise' && <Harmonise />}
      </svg>
    </Ns.Provider>
  );
}
