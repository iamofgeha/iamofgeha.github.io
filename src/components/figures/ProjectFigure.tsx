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

function Fraud() {
  // Illustrative feature-contribution bars: shape only, no real values.
  const bars = [62, -34, 48, -20, 30, -12];
  return (
    <>
      <Box x={20} y={30} w={110} label="transactions" />
      <Arrow d="M130 45H158" />
      <Box x={160} y={30} w={130} label="feature eng." />
      <Label x={225} y={78} anchor="middle">geolocation · time · amount</Label>
      <Arrow d="M290 45H318" />
      <Box x={320} y={30} w={160} label="classifier" />
      <Arrow d="M400 60V118" accent />
      <Box x={320} y={120} w={160} label="shap · lime" accent />
      <Arrow d="M320 135H292" accent />
      <Box x={160} y={120} w={130} label="flask api" />
      <Label x={225} y={168} anchor="middle">docker · logging</Label>
      <Arrow d="M160 135H132" />
      <Box x={20} y={120} w={110} label="dash dashboard" />

      <Label x={20} y={206}>per-prediction feature contributions</Label>
      <line x1={250} y1={218} x2={250} y2={266} className="stroke-fg/25" />
      {bars.map((v, i) => (
        <rect
          key={i}
          x={v > 0 ? 250 : 250 + v * 2.6}
          y={220 + i * 7.6}
          width={Math.abs(v) * 2.6}
          height={5}
          rx={1.5}
          className={v > 0 ? 'fill-accent/75' : 'fill-fg/25'}
        />
      ))}
    </>
  );
}

function Memory() {
  return (
    <>
      <Box x={20} y={30} w={100} label="user query" />
      <Arrow d="M120 45H158" />
      <path d="M210 18 L262 45 L210 72 L158 45 Z" className="fill-fg/[0.04] stroke-fg/30" />
      <Label x={210} y={42} anchor="middle" strong>seen</Label>
      <Label x={210} y={55} anchor="middle" strong>before?</Label>
      <Arrow d="M262 45H318" accent />
      <Label x={290} y={36} anchor="middle">yes</Label>
      <Box x={320} y={30} w={160} label="reuse past answer" accent />
      <Label x={400} y={78} anchor="middle">no model call</Label>

      <Arrow d="M210 72V118" />
      <Label x={218} y={100}>no</Label>
      <Box x={20} y={100} w={110} label="redis · session" />
      <Box x={20} y={150} w={110} label="chroma · vectors" />
      <path d="M130 115 C 142 115, 140 128, 148 130" fill="none" className="stroke-fg/30" />
      <path d="M130 165 C 142 165, 140 142, 148 140" fill="none" className="stroke-fg/30" />
      <Box x={150} y={120} w={120} label="build context" />
      <Arrow d="M270 135H318" />
      <Box x={320} y={120} w={160} label="gemini + context" />
      <Arrow d="M400 150V198" />

      <path d="M480 45 H492 V217 H484" fill="none" markerEnd="url(#memory-arrow-accent)" className="stroke-accent" strokeWidth={1.4} />
      <rect x={320} y={200} width={160} height={34} rx={17} className="fill-fg" />
      <text x={400} y={221} textAnchor="middle" className="fill-bg font-mono text-[10.5px] font-medium">
        response
      </text>
      <path d="M320 217 H75 V182" fill="none" markerEnd="url(#memory-arrow)" strokeDasharray="3 3" className="stroke-fg/30" />
      <Label x={170} y={210}>store turn</Label>
    </>
  );
}

const titles: Record<FigureKind, string> = {
  opentargets: 'Decision flow: if a study is in Open Targets its credible set is reused, otherwise it is harmonised and fine-mapped with SuSiE.',
  fraud: 'Fraud detection pipeline: engineered transaction features feed a classifier; SHAP and LIME explain each prediction, served by a Dockerised Flask API and a Dash dashboard.',
  memory: 'LLM memory flow: if a similar question was answered before, reuse it without a model call; otherwise build context from Redis session history and Chroma vector search, then call Gemini.',
};

export function ProjectFigure({ kind }: { kind: FigureKind }) {
  return (
    <Ns.Provider value={kind}>
      <svg viewBox="0 0 500 280" className="h-auto w-full" role="img" aria-label={titles[kind]}>
        <Defs />
        {kind === 'opentargets' && <OpenTargets />}
        {kind === 'fraud' && <Fraud />}
        {kind === 'memory' && <Memory />}
      </svg>
    </Ns.Provider>
  );
}
