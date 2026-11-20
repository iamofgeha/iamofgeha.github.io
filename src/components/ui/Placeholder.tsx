/**
 * Marks content Ofgeha still has to supply (metrics, availability…). Rendered visibly,
 * in amber, so it is never mistaken for a real claim. Replace the text in site.ts;
 * search the codebase for "[ADD" to find every one.
 */
export function Placeholder({ children }: { children: string }) {
  return <span className="placeholder">{children}</span>;
}

/** Renders text, or a placeholder marker when it starts with "[ADD". */
export function MaybePlaceholder({ text }: { text: string }) {
  return text.startsWith('[ADD') ? <Placeholder>{text}</Placeholder> : <>{text}</>;
}
