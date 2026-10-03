// Handgezeichnete Rotstift-Formen als SVG-Pfade.
// Deterministisch (fester Seed), damit der Build immer gleich aussieht.

function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

const f = (n: number) => n.toFixed(1);

/** Kringel um eine Stelle: Ellipse, die etwas über ihren Anfang hinausläuft. */
export function loop(cx: number, cy: number, rx: number, ry: number, seed = 1): string {
  const r = rng(seed);
  const start = -0.35 + r() * 0.2;
  const sweep = Math.PI * 2 + 0.55;
  const steps = 28;
  const pts: [number, number][] = [];
  for (let i = 0; i <= steps; i++) {
    const t = start + (sweep * i) / steps;
    // Radius wächst minimal, damit sich der Strich nicht exakt schließt
    const grow = 1 + (i / steps) * 0.07;
    const jx = (r() - 0.5) * rx * 0.04;
    const jy = (r() - 0.5) * ry * 0.06;
    pts.push([cx + Math.cos(t) * rx * grow + jx, cy + Math.sin(t) * ry * grow + jy]);
  }
  let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const [x, y] = pts[i];
    const [nx, ny] = pts[i + 1];
    d += ` Q${f(x)} ${f(y)} ${f((x + nx) / 2)} ${f((y + ny) / 2)}`;
  }
  const last = pts[pts.length - 1];
  d += ` T${f(last[0])} ${f(last[1])}`;
  return d;
}

/** Leicht wellige Unterstreichung. */
export function underline(x1: number, x2: number, y: number, seed = 2): string {
  const r = rng(seed);
  const n = 6;
  let d = `M${f(x1)} ${f(y + (r() - 0.5) * 3)}`;
  for (let i = 1; i <= n; i++) {
    const x = x1 + ((x2 - x1) * i) / n;
    const cy = y + (r() - 0.5) * 7;
    d += ` Q${f(x - (x2 - x1) / n / 2)} ${f(cy)} ${f(x)} ${f(y + (r() - 0.5) * 3)}`;
  }
  return d;
}

/** Geschwungener Pfeil von (x1,y1) nach (x2,y2). Gibt [Schaft, Spitze] zurück. */
export function arrow(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  bend = 0.25,
  head = 14,
): [string, string] {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const cx = mx - dy * bend;
  const cy = my + dx * bend;
  const shaft = `M${f(x1)} ${f(y1)} Q${f(cx)} ${f(cy)} ${f(x2)} ${f(y2)}`;
  const ang = Math.atan2(y2 - cy, x2 - cx);
  const a1 = ang + Math.PI - 0.45;
  const a2 = ang + Math.PI + 0.45;
  const tip =
    `M${f(x2 + Math.cos(a1) * head)} ${f(y2 + Math.sin(a1) * head)}` +
    ` L${f(x2)} ${f(y2)} L${f(x2 + Math.cos(a2) * head)} ${f(y2 + Math.sin(a2) * head)}`;
  return [shaft, tip];
}
