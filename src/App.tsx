import React, { useState, useEffect, useRef } from "react";
import svgPaths from "../imports/svg-m7ivppu5i0";
import LogoIcon from "./imports/Container/index";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Stat { value: string; label: string; highlight?: "error" | "warn" | "ok"; }

// ── Data ──────────────────────────────────────────────────────────────────────

const NAV = [
  { label: "Demo Cases", id: "demo-cases" },
  { label: "Technology", id: "technology" },
  { label: "Future Work", id: "future-work" },
  { label: "Contact", id: "footer" },
];

const FLOW_STEPS = [
  "Simulation Deck",
  "Parser",
  "Reservoir Domain Model",
  "Validation / Analysis / Diagnostics",
  "Persistence / API",
  "Reservoir AI Interface",
];

const CASES = [
  {
    id: "base-case",
    num: "01",
    title: "Base Case",
    body: [
      "A conventional black-oil model used as the primary reference case for Reservoir AI.",
      "The model contains a complete reservoir, grid, fluid, rock-fluid, and well description. Reservoir AI converts this information into a structured engineering summary, characterises reservoir heterogeneity, reconstructs the well inventory, and identifies conditions that deserve engineering review.",
    ],
    stats: [
      { value: "20×20×8", label: "Grid Dimensions" },
      { value: "4", label: "Producer Wells" },
      { value: "8", label: "Reservoir Layers" },
      { value: "0.42", label: "Dykstra-Parsons" },
      { value: "3", label: "Diagnostics" },
      { value: "0", label: "Validation Findings", highlight: "ok" },
    ] as Stat[],
    imgLabel: "Reservoir AI screenshot — Base Case",
    callout: null as string | null,
    validation: { color: "#34702f", text: "0 validation findings" },
    diagnostics: [
      "High Vertical Permeability Ratio",
      "Relative Permeability Curve Direction Review",
      "Control After Shut-In",
    ],
    analysis: [
      "8 reservoir layers identified",
      "Moderate heterogeneity",
      "Dykstra-Parsons ≈ 0.42",
      "Layer 4 has the highest estimated pore-volume contribution",
    ],
    sagd: null as null | { pairs: string[]; additional: string[]; note: string },
    validationFindings: null as string[] | null,
  },
  {
    id: "grid-quality",
    num: "02",
    title: "Grid Quality Review",
    body: [
      "A reservoir model designed specifically to demonstrate automated assessment of grid geometry and layer quality.",
      "Most of the model remains geometrically reasonable. Selected regions deliberately contain localised grid problems, allowing Reservoir AI to identify specific areas requiring attention without characterising the entire model as poor quality.",
    ],
    stats: [
      { value: "25×25×10", label: "Grid Dimensions" },
      { value: "3", label: "Producer Wells" },
      { value: "10", label: "Reservoir Layers" },
      { value: "~4%", label: "High-AR Cells", highlight: "warn" },
      { value: "3", label: "Diagnostics" },
      { value: "0", label: "Validation Findings", highlight: "ok" },
    ] as Stat[],
    imgLabel: "Reservoir AI screenshot — Grid Quality Review",
    callout: null as string | null,
    validation: { color: "#34702f", text: "0 validation findings" },
    diagnostics: [
      "Grid Aspect Ratio Extreme",
      "Layer High Thickness Variability",
      "Layer Near-Zero Thickness",
    ],
    analysis: [
      "10 reservoir layers identified",
      "Layer 7 has the highest thickness variability",
      "Minimum cell thickness ≈ 0.08 m in Layer 9",
      "Approximately 96% of cells remain below the aspect-ratio warning threshold",
    ],
    sagd: null as null | { pairs: string[]; additional: string[]; note: string },
    validationFindings: null as string[] | null,
  },
  {
    id: "model-qa",
    num: "03",
    title: "Model QA Review",
    body: [
      "A deliberately imperfect reservoir simulation model used to demonstrate Reservoir AI's validation workflow.",
      "This case contains structural and input-integrity problems representative of issues that can arise during model construction, transfer, or reassessment.",
    ],
    stats: [
      { value: "20×20×8", label: "Grid Dimensions" },
      { value: "5", label: "Wells" },
      { value: "8", label: "Reservoir Layers" },
      { value: "2", label: "Errors", highlight: "error" },
      { value: "2", label: "Warnings", highlight: "warn" },
      { value: "3", label: "Diagnostics" },
    ] as Stat[],
    imgLabel: "Reservoir AI screenshot — Model QA Review",
    callout: "Validation evaluates whether the model inputs and structure are internally consistent. Diagnostics evaluate engineering conditions that deserve review.",
    validation: { color: "#a2131a", text: "4 findings · 2 errors · 2 warnings" },
    diagnostics: [
      "Relative Permeability Curve Direction Review",
      "High Vertical Permeability Ratio",
      "Control After Shut-In",
    ],
    analysis: null as string[] | null,
    sagd: null as null | { pairs: string[]; additional: string[]; note: string },
    validationFindings: [
      "Static Property Size Mismatch",
      "Incomplete Static Property",
      "Missing Required Property",
      "Well Definition Inconsistency",
    ],
  },
  {
    id: "sagd",
    num: "04",
    title: "SAGD Development",
    body: [
      "A synthetic thermal-development model used to demonstrate Reservoir AI's domain-specific SAGD analysis.",
      "The case represents a high-porosity, high-permeability bitumen reservoir with paired horizontal steam injectors and producers.",
      "Rather than treating wells only as independent model objects, Reservoir AI identifies producer-injector relationships and evaluates the reservoir region surrounding each detected SAGD pair.",
    ],
    stats: [
      { value: "30×20×15", label: "Grid Dimensions" },
      { value: "8", label: "Total Wells" },
      { value: "15", label: "Reservoir Layers" },
      { value: "3", label: "Valid Pairs", highlight: "ok" },
      { value: "2", label: "Unpaired Wells", highlight: "warn" },
      { value: "1", label: "Diagnostic" },
    ] as Stat[],
    imgLabel: "Reservoir AI screenshot — SAGD Development",
    callout: null as string | null,
    validation: null as { color: string; text: string } | null,
    diagnostics: null as string[] | null,
    analysis: null as string[] | null,
    validationFindings: null as string[] | null,
    sagd: {
      pairs: ["P01 – I01", "P02 – I02", "P03 – I03"],
      additional: [
        "P04 identified as an unpaired producer",
        "I04 identified as an unpaired injector",
        "I03 contains a Control After Shut-In condition",
      ],
      note: "Pair-level analysis can evaluate local porosity, Kv/Kh, vertical separation, and the sampled assessment region surrounding each well pair.",
    },
  },
];

// ── Reservoir Visualizations ───────────────────────────────────────────────────

function BaseCaseViz() {
  const layers = [
    { h: 22, op: 0.72 },
    { h: 28, op: 0.55 },
    { h: 18, op: 0.82 },
    { h: 36, op: 0.96 },
    { h: 24, op: 0.62 },
    { h: 16, op: 0.50 },
    { h: 20, op: 0.66 },
    { h: 22, op: 0.74 },
  ];
  let y = 10;
  const rows = layers.map((l, i) => { const r = { ...l, y, i }; y += l.h + 3; return r; });
  const totalH = y + 18;
  return (
    <svg viewBox={`0 0 400 ${totalH}`} width="100%" height="100%" style={{ display: "block" }}>
      <rect width="400" height={totalH} fill="#f0f4f7" />
      {rows.map((r) => (
        <g key={r.i}>
          <text x={6} y={r.y + r.h / 2 + 4} fontSize={8} fill="#6f8499" fontFamily="Inter, sans-serif" fontWeight="600">
            L{r.i + 1}{r.i === 3 ? " ★" : ""}
          </text>
          {Array.from({ length: 18 }).map((_, j) => (
            <rect
              key={j}
              x={26 + j * 20}
              y={r.y}
              width={18}
              height={r.h}
              fill="#12344d"
              opacity={r.op * (0.7 + 0.3 * Math.abs(Math.sin(j * 0.9 + r.i * 0.7)))}
              rx={1}
            />
          ))}
        </g>
      ))}
      <line x1={176} y1={6} x2={176} y2={totalH - 18} stroke="white" strokeWidth={2.5} strokeDasharray="5,3" />
      <circle cx={176} cy={14} r={6} fill="#12344d" stroke="white" strokeWidth={1.5} />
      <text x={185} y={18} fontSize={8} fill="#12344d" fontFamily="Inter, sans-serif" fontWeight="700">PROD-1</text>
      <rect x={290} y={totalH - 14} width={10} height={8} fill="#12344d" opacity={0.96} rx={1} />
      <text x={304} y={totalH - 7} fontSize={7} fill="#6f8499" fontFamily="Inter, sans-serif">High Kh</text>
      <rect x={345} y={totalH - 14} width={10} height={8} fill="#12344d" opacity={0.48} rx={1} />
      <text x={359} y={totalH - 7} fontSize={7} fill="#6f8499" fontFamily="Inter, sans-serif">Low Kh</text>
    </svg>
  );
}

function GridQualityViz() {
  const cols = 12, rows = 10, cw = 28, ch = 22, pad = 18;
  const arCells = new Set(["2-6", "3-6", "2-7", "3-7", "2-8"]);
  const nzCells = new Set(["9-3", "10-3", "9-4"]);
  const W = cols * cw + pad * 2, H = rows * ch + pad * 2 + 28;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%">
      <rect width={W} height={H} fill="#f0f4f7" />
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: cols }).map((_, col) => {
          const k = `${col + 1}-${row + 1}`;
          const isAR = arCells.has(k), isNZ = nzCells.has(k);
          return (
            <rect key={k}
              x={pad + col * cw} y={pad + row * ch}
              width={cw - 1} height={ch - 1}
              fill={isNZ ? "#fef3c7" : isAR ? "#fee2e2" : "#dbeafe"}
              stroke={isNZ ? "#f59e0b" : isAR ? "#ef4444" : "#93c5fd"}
              strokeWidth={isAR || isNZ ? 1.5 : 0.5}
              rx={1}
            />
          );
        })
      )}
      <text x={pad + 1 * cw + 2} y={pad + 6 * ch - 2} fontSize={7} fill="#dc2626" fontFamily="Inter, sans-serif" fontWeight="700">AR Issue</text>
      <text x={pad + 7 * cw + 2} y={pad + 3 * ch - 2} fontSize={7} fill="#d97706" fontFamily="Inter, sans-serif" fontWeight="700">~0 m thick</text>
      {[0.3, 0.6].map((v, i) => (
        <g key={i}>
          <rect x={pad + 14 + i * 130} y={rows * ch + pad + 8} width={10} height={8}
            fill={i === 0 ? "#fee2e2" : "#fef3c7"}
            stroke={i === 0 ? "#ef4444" : "#f59e0b"} strokeWidth={1} rx={1} />
          <text x={pad + 28 + i * 130} y={rows * ch + pad + 15} fontSize={7} fill="#6f8499" fontFamily="Inter, sans-serif">
            {i === 0 ? "Aspect-ratio warning" : "Near-zero thickness"}
          </text>
        </g>
      ))}
      <rect x={pad + 274} y={rows * ch + pad + 8} width={10} height={8} fill="#dbeafe" stroke="#93c5fd" strokeWidth={0.5} rx={1} />
      <text x={pad + 288} y={rows * ch + pad + 15} fontSize={7} fill="#6f8499" fontFamily="Inter, sans-serif">Conforming</text>
    </svg>
  );
}

function ModelQAViz() {
  const cols = 8, rows = 6, cw = 44, ch = 34, pad = 20;
  const errors = new Set(["3-1", "5-3"]);
  const warnings = new Set(["1-4", "6-2"]);
  const wells = [{ c: 2, r: 0 }, { c: 5, r: 0 }, { c: 1, r: 5 }, { c: 4, r: 5 }, { c: 7, r: 3 }];
  const W = cols * cw + pad * 2, H = rows * ch + pad * 2 + 36;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%">
      <rect width={W} height={H} fill="#f8f9fa" />
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: cols }).map((_, col) => {
          const k = `${col}-${row}`;
          const isErr = errors.has(k), isWarn = warnings.has(k);
          return (
            <g key={k}>
              <rect x={pad + col * cw + 1} y={pad + row * ch + 1} width={cw - 2} height={ch - 2}
                fill={isErr ? "#fef2f2" : isWarn ? "#fffbeb" : "#f0f4f7"}
                stroke={isErr ? "#fca5a5" : isWarn ? "#fcd34d" : "#d1d5db"}
                strokeWidth={1} rx={2} />
              {isErr && (
                <>
                  <circle cx={pad + col * cw + cw - 11} cy={pad + row * ch + 11} r={8} fill="#dc2626" />
                  <text x={pad + col * cw + cw - 11} y={pad + row * ch + 15} fontSize={9} fill="white"
                    fontFamily="Inter, sans-serif" fontWeight="700" textAnchor="middle">E</text>
                </>
              )}
              {isWarn && (
                <>
                  <polygon
                    points={`${pad + col * cw + cw - 11},${pad + row * ch + 4} ${pad + col * cw + cw - 3},${pad + row * ch + 18} ${pad + col * cw + cw - 19},${pad + row * ch + 18}`}
                    fill="#f59e0b" />
                  <text x={pad + col * cw + cw - 11} y={pad + row * ch + 17} fontSize={8} fill="white"
                    fontFamily="Inter, sans-serif" fontWeight="700" textAnchor="middle">!</text>
                </>
              )}
            </g>
          );
        })
      )}
      {wells.map((w, i) => (
        <g key={i}>
          <circle cx={pad + w.c * cw + cw / 2} cy={pad + w.r * ch + ch / 2} r={6} fill="#12344d" stroke="white" strokeWidth={1.5} />
          <line x1={pad + w.c * cw + cw / 2} y1={pad + w.r * ch + ch / 2 - 4}
            x2={pad + w.c * cw + cw / 2} y2={pad + w.r * ch + ch / 2 + 4}
            stroke="white" strokeWidth={1.5} />
        </g>
      ))}
      <circle cx={pad + 8} cy={rows * ch + pad + 18} r={6} fill="#dc2626" />
      <text x={pad + 8} y={rows * ch + pad + 22} fontSize={7} fill="white" fontFamily="Inter, sans-serif" fontWeight="700" textAnchor="middle">E</text>
      <text x={pad + 18} y={rows * ch + pad + 22} fontSize={7} fill="#6f8499" fontFamily="Inter, sans-serif">Error (2)</text>
      <polygon points={`${pad + 115},${rows * ch + pad + 12} ${pad + 122},${rows * ch + pad + 24} ${pad + 108},${rows * ch + pad + 24}`} fill="#f59e0b" />
      <text x={pad + 127} y={rows * ch + pad + 22} fontSize={7} fill="#6f8499" fontFamily="Inter, sans-serif">Warning (2)</text>
      <circle cx={pad + 240} cy={rows * ch + pad + 18} r={6} fill="#12344d" stroke="white" strokeWidth={1.5} />
      <text x={pad + 250} y={rows * ch + pad + 22} fontSize={7} fill="#6f8499" fontFamily="Inter, sans-serif">Well</text>
    </svg>
  );
}

function SAGDViz() {
  const W = 400, H = 220, px = 36, py = 18;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%">
      <defs>
        <radialGradient id="steam0" cx="50%" cy="80%" r="65%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity={0.55} />
          <stop offset="50%" stopColor="#fb923c" stopOpacity={0.25} />
          <stop offset="100%" stopColor="#1e4976" stopOpacity={0.08} />
        </radialGradient>
        <linearGradient id="resGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e4976" stopOpacity={0.10} />
          <stop offset="100%" stopColor="#1e4976" stopOpacity={0.32} />
        </linearGradient>
      </defs>
      <rect x={px} y={py} width={W - px * 2} height={H - py * 2} fill="url(#resGrad)" rx={4} stroke="#c4d4e0" strokeWidth={0.5} />
      {Array.from({ length: 7 }).map((_, i) => (
        <line key={i} x1={px} y1={py + (i + 1) * (H - py * 2) / 8} x2={W - px} y2={py + (i + 1) * (H - py * 2) / 8}
          stroke="#c4d4e0" strokeWidth={0.5} strokeDasharray="4,4" />
      ))}
      {[105, 195, 285].map((cx, i) => (
        <g key={i}>
          <ellipse cx={cx} cy={108} rx={37} ry={54} fill="url(#steam0)" />
          <ellipse cx={cx} cy={118} rx={24} ry={34} fill="none" stroke="#fb923c" strokeWidth={0.8} opacity={0.45} />
          <ellipse cx={cx} cy={126} rx={13} ry={18} fill="none" stroke="#fbbf24" strokeWidth={0.8} opacity={0.45} />
          <line x1={cx} y1={py} x2={cx} y2={140} stroke="#6f8499" strokeWidth={1} strokeDasharray="3,3" />
          <line x1={cx - 34} y1={142} x2={cx + 34} y2={142} stroke="#dc2626" strokeWidth={4} strokeLinecap="round" />
          <text x={cx} y={137} fontSize={7} fill="#dc2626" fontFamily="Inter, sans-serif" fontWeight="700" textAnchor="middle">I0{i + 1}</text>
          <line x1={cx - 34} y1={162} x2={cx + 34} y2={162} stroke="#12344d" strokeWidth={4} strokeLinecap="round" />
          <text x={cx} y={175} fontSize={7} fill="#12344d" fontFamily="Inter, sans-serif" fontWeight="700" textAnchor="middle">P0{i + 1}</text>
        </g>
      ))}
      <line x1={348} y1={128} x2={376} y2={128} stroke="#dc2626" strokeWidth={3} strokeLinecap="round" strokeDasharray="5,3" />
      <text x={362} y={122} fontSize={7} fill="#dc2626" fontFamily="Inter, sans-serif" textAnchor="middle">I04</text>
      <line x1={348} y1={168} x2={376} y2={168} stroke="#12344d" strokeWidth={3} strokeLinecap="round" strokeDasharray="5,3" />
      <text x={362} y={182} fontSize={7} fill="#12344d" fontFamily="Inter, sans-serif" textAnchor="middle">P04</text>
      <rect x={px} y={H - py - 2} width={14} height={4} fill="#dc2626" rx={2} />
      <text x={px + 18} y={H - py + 1} fontSize={7} fill="#6f8499" fontFamily="Inter, sans-serif">Injector</text>
      <rect x={px + 72} y={H - py - 2} width={14} height={4} fill="#12344d" rx={2} />
      <text x={px + 90} y={H - py + 1} fontSize={7} fill="#6f8499" fontFamily="Inter, sans-serif">Producer</text>
      <ellipse cx={px + 168} cy={H - py - 1} rx={9} ry={4} fill="url(#steam0)" />
      <text x={px + 182} y={H - py + 1} fontSize={7} fill="#6f8499" fontFamily="Inter, sans-serif">Steam chamber</text>
      <line x1={px + 278} y1={H - py - 2} x2={px + 292} y2={H - py - 2} stroke="#6f8499" strokeWidth={2} strokeDasharray="4,2" />
      <text x={px + 296} y={H - py + 1} fontSize={7} fill="#6f8499" fontFamily="Inter, sans-serif">Unpaired</text>
    </svg>
  );
}

const VIZ: Record<string, () => React.ReactElement> = {
  "base-case": BaseCaseViz,
  "grid-quality": GridQualityViz,
  "model-qa": ModelQAViz,
  "sagd": SAGDViz,
};

// ── Utility ────────────────────────────────────────────────────────────────────

function jumpTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ── Header ────────────────────────────────────────────────────────────────────

function Header({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full transition-shadow duration-200"
      style={{
        background: "#12344d",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.22)" : "none",
      }}
    >
      <div className="flex items-center justify-between px-[76px] py-[24px]">
        {/* Logo */}
        <button
          onClick={() => jumpTo("hero")}
          className="flex items-center gap-[12px] cursor-pointer"
        >
          <div className="shrink-0" style={{ width: 40.281, height: 33.281 }}>
            <LogoIcon />
          </div>
          <div className="flex flex-col items-start gap-[1px]">
            <span
              className="text-white text-[18px] tracking-[-0.04px] whitespace-nowrap"
              style={{ fontFamily: "'Inter:Bold', sans-serif", fontWeight: 700 }}
            >
              Argos
            </span>
            <span
              className="text-[13px] tracking-[0.02px] whitespace-nowrap"
              style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400, color: "rgba(255,255,255,0.55)" }}
            >
              Reservoir Intelligence
            </span>
          </div>
        </button>

        {/* Nav */}
        <nav className="flex items-center gap-[10px]">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => jumpTo(n.id)}
              className="px-[12px] py-[6px] rounded-[4px] text-[14px] leading-[18px] tracking-[-0.08px] whitespace-nowrap transition-colors duration-150 cursor-pointer"
              style={{
                fontFamily: "'Inter:Semi Bold', sans-serif",
                fontWeight: 600,
                color: active === n.id ? "white" : "rgba(255,255,255,0.65)",
                background: active === n.id ? "rgba(255,255,255,0.12)" : "transparent",
              }}
            >
              {n.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

// ── ArrowForward icon ─────────────────────────────────────────────────────────

function ArrowIcon() {
  return (
    <div className="flex items-center justify-center size-[20px]">
      <div className="rotate-90 size-[20px]">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <g clipPath="url(#arr)">
            <path d={svgPaths.p6903c80} fill="white" />
          </g>
          <defs>
            <clipPath id="arr"><rect width="20" height="20" fill="white" /></clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="hero" data-section="hero" className="w-full bg-white">
      <div className="flex gap-[24px] items-center justify-center pt-[72px] pb-[72px] px-[76px]">
        {/* Left copy */}
        <div className="flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px">
          <div style={{ fontFamily: "'Inter:Semi Bold', sans-serif", fontWeight: 600, lineHeight: "normal", color: "#12344d" }}>
            <p className="text-[60px] mb-0 leading-[1.1] tracking-[-0.44px]">Argos</p>
            <p className="text-[40px] leading-[1.15] tracking-[-0.44px]" style={{ color: "#445566", fontStyle: "italic" }}>
              Reservoir AI
            </p>
          </div>
          <p
            className="text-[20px] leading-[24px] tracking-[-0.3px]"
            style={{ fontFamily: "'Inter:Semi Bold', sans-serif", fontWeight: 600, color: "#12344d" }}
          >
            AI-assisted engineering intelligence for reservoir simulation models
          </p>
          <button
            onClick={() => jumpTo("demo-cases")}
            className="flex items-center gap-[10px] px-[18px] py-[8px] rounded-[4px] cursor-pointer transition-opacity duration-150 hover:opacity-80 active:opacity-70"
            style={{ background: "#12344d" }}
          >
            <span
              className="text-white text-[13px] leading-[20px] tracking-[0.06px] whitespace-nowrap"
              style={{ fontFamily: "'Inter:Semi Bold', sans-serif", fontWeight: 600 }}
            >
              Learn more
            </span>
            <ArrowIcon />
          </button>
        </div>

        {/* Right: hero visualization */}
        <div className="flex flex-col gap-[8px] items-start shrink-0 w-[552px]">
          <div className="bg-white border border-[#e8ecef] rounded-[4px] shadow-[0px_0px_12px_2px_rgba(0,0,0,0.1)] w-full overflow-hidden" style={{ height: 294 }}>
            <div
              className="w-full h-full flex flex-col items-center justify-center gap-[12px]"
              style={{
                background: "#F8FAFB",
                color: "#6F8499",
              }}
            >
              <div
                className="flex items-center justify-center rounded-[8px]"
                style={{
                  width: 54,
                  height: 44,
                  border: "1.5px dashed #A8B6C3",
                  background: "#FFFFFF",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="16"
                    rx="2"
                    stroke="#8A9AAA"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M6 16L10 12L13 15L16 11L19 15"
                    stroke="#8A9AAA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="8"
                    cy="8"
                    r="1.5"
                    fill="#8A9AAA"
                  />
                </svg>
              </div>

              <div className="text-center">
                <p
                  className="m-0 text-[13px] font-semibold"
                  style={{ color: "#445566" }}
                >
                  Screenshot coming soon
                </p>
                <p
                  className="m-0 mt-[3px] text-[11px]"
                  style={{ color: "#8A9AAA" }}
                >
                  Reservoir AI interface
                </p>
              </div>
            </div>
          </div>
          <p
            className="text-[13px] leading-[20px] tracking-[0.06px] text-center w-full"
            style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400, color: "#445566" }}
          >
            Reservoir AI transforms reservoir simulation decks into structured engineering information.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Stat Card ─────────────────────────────────────────────────────────────────

function StatCard({ stat }: { stat: Stat }) {
  const valueColor =
    stat.highlight === "error" ? "#a2131a" :
    stat.highlight === "warn" ? "#b45309" :
    stat.highlight === "ok" ? "#34702f" :
    "black";

  return (
    <div
      className="flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[12px] rounded-[4px]"
      style={{
        background: "white",
        border: "1px solid #e8ecef",
      }}
    >
      <p
        className="leading-[19px] text-[19px] w-full"
        style={{ fontFamily: "'Inter:Bold', sans-serif", fontWeight: 700, color: valueColor, height: 14 }}
      >
        {stat.value}
      </p>
      <p
        className="leading-[20px] text-[13px] tracking-[0.06px] w-full"
        style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400, color: "#333" }}
      >
        {stat.label}
      </p>
    </div>
  );
}

// ── Demo Case Block ───────────────────────────────────────────────────────────

function CaseBlock({ c }: { c: typeof CASES[number] }) {
  const Viz = VIZ[c.id];
  return (
    <div className="flex flex-col gap-[40px] items-start w-full">
      {/* Divider + header row */}
      <div className="flex flex-col gap-[24px] items-start px-[76px] w-full">
        <div className="relative w-full" style={{ height: 0 }}>
          <div className="absolute inset-[-2px_0_0_0]">
            <svg width="100%" height="2" viewBox="0 0 1128 2" fill="none" preserveAspectRatio="none">
              <line stroke="#C4C4C4" strokeWidth="2" x2="1128" y1="1" y2="1" />
            </svg>
          </div>
        </div>

        {/* Title + image row */}
        <div className="flex items-center justify-between w-full gap-[24px]">
          {/* Left: case info */}
          <div
            className="flex flex-col gap-[24px] items-start shrink-0"
            style={{ width: c.callout ? 648 : "auto", flex: c.callout ? "none" : "1 0 0" }}
          >
            <div className="flex flex-col gap-[8px] items-start">
              <p
                className="text-[10px] leading-[13.5px] tracking-[0.72px] uppercase w-[552px]"
                style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400, color: "#12344d" }}
              >
                {c.num}
              </p>
              <p
                className="text-[30px] leading-[29px] tracking-[-0.44px] w-[552px]"
                style={{ fontFamily: "'Inter:Semi Bold', sans-serif", fontWeight: 600, color: "#12344d" }}
              >
                {c.title}
              </p>
            </div>
            <div
              className="text-[16px] tracking-[-0.08px] w-[552px]"
              style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400, color: "#12344d" }}
            >
              {c.body.map((p, i) => (
                <p key={i} className="leading-[20px] mb-0 whitespace-pre-wrap">{p}{i < c.body.length - 1 && <><br /><br /></>}</p>
              ))}
            </div>
            {c.callout && (
              <div className="flex items-center w-full">
                <div className="bg-[#0e6b6e] h-[64px] shrink-0 w-[3px]" />
                <div className="bg-[rgba(14,107,110,0.1)] flex flex-1 gap-[10px] items-start min-w-px overflow-clip p-[12px] rounded-[4px]">
                  <div className="shrink-0 size-[20px]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g><path d={svgPaths.p6e93600} fill="#0E6B6E" /></g>
                    </svg>
                  </div>
                  <p
                    className="flex-1 text-[16px] leading-[20px] tracking-[-0.08px] text-[#111]"
                    style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400 }}
                  >
                    {c.callout}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right: image/viz */}
          <div className="flex flex-col gap-[8px] items-start shrink-0 w-[453px]">
            <div
              className="bg-white border border-[#e8ecef] rounded-[4px] shadow-[0px_0px_12px_2px_rgba(0,0,0,0.1)] w-full overflow-hidden"
              style={{ height: 294 }}
            >
              <div
                className="w-full h-full flex flex-col items-center justify-center gap-[12px]"
                style={{
                  background: "#F8FAFB",
                  color: "#6F8499",
                }}
              >
                <div
                  className="flex items-center justify-center rounded-[8px]"
                  style={{
                    width: 54,
                    height: 44,
                    border: "1.5px dashed #A8B6C3",
                    background: "#FFFFFF",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="16"
                      rx="2"
                      stroke="#8A9AAA"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M6 16L10 12L13 15L16 11L19 15"
                      stroke="#8A9AAA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="8"
                      cy="8"
                      r="1.5"
                      fill="#8A9AAA"
                    />
                  </svg>
                </div>

                <div className="text-center">
                  <p
                    className="m-0 text-[13px] font-semibold"
                    style={{ color: "#445566" }}
                  >
                    Screenshot coming soon
                  </p>
                  <p
                    className="m-0 mt-[3px] text-[11px]"
                    style={{ color: "#8A9AAA" }}
                  >
                    Reservoir AI interface
                  </p>
                </div>
              </div>
            </div>
            <p
              className="text-[13px] leading-[20px] tracking-[0.06px] text-center w-full"
              style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400, color: "#445566" }}
            >
              {c.imgLabel}
            </p>
          </div>
        </div>
      </div>

      {/* Stats + analysis */}
      <div className="flex flex-col gap-[40px] items-start px-[76px] w-full">
        {/* Stat cards row */}
        <div className="flex gap-[13px] items-center w-full">
          {c.stats.map((s, i) => <StatCard key={i} stat={s} />)}
        </div>

        {/* Analysis panels */}
        <div className="flex gap-[24px] items-start justify-center w-full">
          {/* Validation findings or diagnostics column */}
          {c.validationFindings ? (
            <div className="flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px">
              <p
                className="text-[12px] leading-[13.5px] tracking-[0.72px] uppercase w-full"
                style={{ fontFamily: "'Inter:Bold', sans-serif", fontWeight: 700, color: "#12344d" }}
              >
                Validation Findings
              </p>
              <p
                className="text-[16px] leading-[20px] tracking-[-0.08px] w-full"
                style={{ fontFamily: "'Inter:Bold', sans-serif", fontWeight: 700, color: "#a2131a" }}
              >
                4 findings · 2 errors · 2 warnings
              </p>
              <ul className="list-disc text-[16px] tracking-[-0.08px] w-full"
                style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400, color: "#12344d" }}>
                {c.validationFindings.map((f, i) => (
                  <li key={i} className="ms-[24px] mb-0"><span className="leading-[30px]">{f}</span></li>
                ))}
              </ul>
            </div>
          ) : c.sagd ? (
            <div className="flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px"
              style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400, color: "#12344d" }}>
              <p className="text-[10px] leading-[13.5px] tracking-[0.72px] uppercase w-full">SAGD Analysis</p>
              <div className="text-[16px] tracking-[-0.08px] w-full">
                <p className="leading-[30px] mb-[20px]">3 valid well pairs identified</p>
                <ul className="list-disc">
                  {c.sagd.pairs.map((p, i) => (
                    <li key={i} className="ms-[24px] mb-0"><span className="leading-[30px]">{p}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          ) : c.diagnostics ? (
            <div className="flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px" style={{ color: "#12344d" }}>
              <p className="text-[12px] leading-[13.5px] tracking-[0.72px] uppercase w-full"
                style={{ fontFamily: "'Inter:Bold', sans-serif", fontWeight: 700 }}>Engineering Diagnostics</p>
              <ul className="list-disc text-[16px] tracking-[-0.08px] w-full"
                style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400 }}>
                {c.diagnostics.map((d, i) => (
                  <li key={i} className="ms-[24px] mb-0"><span className="leading-[30px]">{d}</span></li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* Middle column: analysis or additional review */}
          {c.sagd ? (
            <div className="flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px"
              style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400, color: "#12344d" }}>
              <p className="text-[10px] leading-[13.5px] tracking-[0.72px] uppercase w-full">Additional Review</p>
              <ul className="list-disc text-[16px] tracking-[-0.08px] w-full">
                {c.sagd.additional.map((a, i) => (
                  <li key={i} className="ms-[24px] mb-0"><span className="leading-[30px]">{a}</span></li>
                ))}
              </ul>
              <p className="text-[16px] leading-[20px] tracking-[-0.08px] w-full">{c.sagd.note}</p>
            </div>
          ) : c.analysis ? (
            <div className="flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px" style={{ color: "#12344d" }}>
              <p className="text-[12px] leading-[13.5px] tracking-[0.72px] uppercase w-full"
                style={{ fontFamily: "'Inter:Bold', sans-serif", fontWeight: 700 }}>Analysis</p>
              <ul className="list-disc text-[16px] tracking-[-0.08px] w-full"
                style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400 }}>
                {c.analysis.map((a, i) => (
                  <li key={i} className="ms-[24px] mb-0"><span className="leading-[30px]">{a}</span></li>
                ))}
              </ul>
            </div>
          ) : c.validationFindings && c.diagnostics ? (
            <div className="flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px" style={{ color: "#12344d" }}>
              <p className="text-[12px] leading-[13.5px] tracking-[0.72px] uppercase w-full"
                style={{ fontFamily: "'Inter:Bold', sans-serif", fontWeight: 700 }}>Engineering Diagnostics</p>
              <ul className="list-disc text-[16px] tracking-[-0.08px] w-full"
                style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400 }}>
                {c.diagnostics.map((d, i) => (
                  <li key={i} className="ms-[24px] mb-0"><span className="leading-[30px]">{d}</span></li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* Right column: validation or spacer */}
          {c.validation && !c.validationFindings ? (
            <div className="flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-w-px">
              <p className="text-[12px] leading-[13.5px] tracking-[0.72px] uppercase w-full"
                style={{ fontFamily: "'Inter:Bold', sans-serif", fontWeight: 700, color: "#12344d" }}>Validation</p>
              <p className="text-[16px] leading-[20px] tracking-[-0.08px] w-full"
                style={{ fontFamily: "'Inter:Bold', sans-serif", fontWeight: 700, color: c.validation.color }}>
                {c.validation.text}
              </p>
            </div>
          ) : (
            <div className="flex-[1_0_0] min-w-px" style={{ height: 14 }} />
          )}
        </div>
      </div>
    </div>
  );
}

// ── Demo Cases Section ────────────────────────────────────────────────────────

function DemoCases() {
  const [activeCase, setActiveCase] = useState("");
  const caseRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveCase(e.target.getAttribute("data-case") || "");
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    Object.values(caseRefs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="demo-cases" data-section="demo-cases" className="w-full bg-[#e8ecef] py-[72px] flex flex-col gap-[72px] items-start">
      {/* Section intro */}
      <div className="flex flex-col gap-[24px] items-start px-[76px]" style={{ color: "#12344d" }}>
        <p
          className="text-[40px] leading-[29px] tracking-[-0.44px] w-[552px]"
          style={{ fontFamily: "'Inter:Semi Bold', sans-serif", fontWeight: 600 }}
        >
          Demo Cases
        </p>
        <div className="text-[16px] tracking-[-0.08px] w-[552px]"
          style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400 }}>
          <p className="leading-[20px] mb-0">The following synthetic cases demonstrate different aspects of Reservoir AI. Each case is built from a reservoir simulation deck and processed through the same application workflow.</p>
          <p className="leading-[20px] mb-0">&nbsp;</p>
          <p className="leading-[20px]">Together, they demonstrate conventional model interpretation, grid-quality assessment, model validation, and domain-specific SAGD analysis.</p>
        </div>
      </div>

      {/* Sticky case tabs */}
      <div className="sticky top-[78px] z-40 w-full px-[76px] py-[8px]" style={{ background: "#e8ecef" }}>
        <div className="flex gap-[2px] bg-[rgba(18,52,77,0.06)] rounded-[6px] p-[3px] w-fit">
          {CASES.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                const el = caseRefs.current[c.id];
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="px-[14px] py-[7px] rounded-[4px] text-[13px] leading-[18px] tracking-[-0.08px] whitespace-nowrap transition-all duration-150 cursor-pointer"
              style={{
                fontFamily: "'Inter:Semi Bold', sans-serif",
                fontWeight: 600,
                background: activeCase === c.id ? "#12344d" : "transparent",
                color: activeCase === c.id ? "white" : "#12344d",
                opacity: activeCase === c.id ? 1 : 0.65,
              }}
            >
              {c.num} {c.title}
            </button>
          ))}
        </div>
      </div>

      {/* Cases */}
      {CASES.map((c) => (
        <div
          key={c.id}
          data-case={c.id}
          ref={(el) => { caseRefs.current[c.id] = el; }}
          className="w-full"
        >
          <CaseBlock c={c} />
        </div>
      ))}
    </section>
  );
}

// ── Technology Section ────────────────────────────────────────────────────────

function Technology({ activeFlow }: { activeFlow: number }) {
  const techCols = [
    {
      label: "Backend",
      subtitle: "Python · FastAPI · SQLAlchemy",
      items: ["Simulation-deck parsing", "Reservoir domain models", "Grid-geometry reconstruction", "Model validation", "Engineering diagnostics", "Persistence and API services"],
    },
    {
      label: "Engineering Processing",
      subtitle: "NumPy · Engineering services",
      items: ["Static-property analysis", "Layer characterisation", "Dykstra–Parsons heterogeneity", "Rock-fluid interpretation", "Well timeline reconstruction", "SAGD pair analysis"],
    },
    {
      label: "Frontend",
      subtitle: "React · TypeScript",
      items: ["Assets and projects", "Simulation cases", "Structured model summaries", "Validation findings", "Engineering diagnostics", "Analysis results"],
    },
  ];

  return (
    <section id="technology" data-section="technology" className="w-full bg-white py-[72px]">
      <div className="flex flex-col gap-[40px] items-start px-[76px] w-full">
        {/* Title */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col gap-[24px] items-start" style={{ color: "#12344d" }}>
            <p
              className="text-[40px] leading-[29px] tracking-[-0.44px] text-center w-[552px]"
              style={{ fontFamily: "'Inter:Semi Bold', sans-serif", fontWeight: 600 }}
            >
              Technology
            </p>
            <p
              className="text-[16px] leading-[20px] tracking-[-0.08px] w-[552px]"
              style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400 }}
            >
              Reservoir AI is implemented as a modular engineering software platform that separates simulation-model parsing, reservoir-engineering logic, persistence, APIs, and presentation.
            </p>
          </div>
        </div>

        {/* Three columns */}
        <div className="flex gap-[24px] items-start justify-center w-full" style={{ color: "#12344d" }}>
          {techCols.map((col, i) => (
            <div key={i} className="flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px">
              <p
                className="text-[10px] leading-[13.5px] tracking-[0.72px] uppercase w-full"
                style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400 }}
              >
                {col.label}
              </p>
              <p
                className="text-[14px] leading-[18px] tracking-[-0.08px] w-full"
                style={{ fontFamily: "'Inter:Semi Bold', sans-serif", fontWeight: 600 }}
              >
                {col.subtitle}
              </p>
              <ul className="list-disc text-[16px] tracking-[-0.08px] w-full"
                style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400 }}>
                {col.items.map((item, j) => (
                  <li key={j} className="ms-[24px] mb-0"><span className="leading-[30px]">{item}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Flow map */}
        <div
          className="flex gap-[16px] items-center overflow-clip px-[32px] py-[40px] rounded-[8px] w-full"
          style={{ background: "#f8fafb", border: "1px solid #e8ecef" }}
        >
          {FLOW_STEPS.map((step, i) => (
            <div key={i} className="flex items-center gap-[16px] shrink-0">
              <span
                className="text-[14px] leading-[18px] tracking-[-0.08px] whitespace-nowrap transition-all duration-300"
                style={{
                  fontFamily: "'Inter:Semi Bold', sans-serif",
                  fontWeight: 600,
                  color: activeFlow === i ? "#12344d" : "#aab4be",
                  textDecorationLine: activeFlow === i ? "underline" : "none",
                  textUnderlineOffset: "4px",
                }}
              >
                {step}
              </span>
              {i < FLOW_STEPS.length - 1 && (
                <svg width="13.3333" height="13.3333" viewBox="0 0 13.3333 13.3333" fill="none"
                  style={{ opacity: activeFlow > i ? 1 : 0.35, transition: "opacity 0.3s" }}>
                  <path d={svgPaths.p8dfa900} fill={activeFlow > i ? "#12344d" : "#6F8499"} />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Future Work Section ───────────────────────────────────────────────────────

function FutureWork() {
  return (
    <section id="future-work" data-section="future-work" className="w-full bg-[#e8ecef] px-[76px] py-[72px]">
      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col gap-[24px] items-start" style={{ color: "#12344d" }}>
          <p
            className="text-[40px] leading-[29px] tracking-[-0.44px] w-[552px]"
            style={{ fontFamily: "'Inter:Semi Bold', sans-serif", fontWeight: 600 }}
          >
            Future Work
          </p>
          <div className="text-[16px] tracking-[-0.08px] w-[552px]"
            style={{ fontFamily: "'Inter:Regular', sans-serif", fontWeight: 400 }}>
            <p className="leading-[20px] mb-0">Future development will expand Reservoir AI with broader simulator support, simulation-results integration, richer engineering diagnostics, and automated case comparison.</p>
            <p className="leading-[20px] mb-0">&nbsp;</p>
            <p className="mb-0 leading-[20px]">
              A key direction is the use of{" "}
              <strong style={{ fontFamily: "'Inter:Semi Bold', sans-serif", fontWeight: 600 }}>
                small language models (SLMs)
              </strong>{" "}
              for specialised reservoir-engineering tasks, enabling efficient natural-language interaction, model interpretation, and domain-specific assistance with lower computational requirements.
            </p>
            <p className="leading-[20px] mb-0">&nbsp;</p>
            <p className="leading-[20px]">The long-term goal is to combine deterministic engineering analysis, simulation data, and specialised AI into a practical reservoir-engineering decision-support platform.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      id="footer"
      data-section="footer"
      className="w-full bg-[#12344d] flex flex-col justify-between overflow-clip pb-[24px] pt-[72px] px-[76px]"
      style={{ height: 340 }}
    >
      <div className="flex items-start justify-between w-full">
        {/* Brand */}
        <div className="flex flex-col gap-[10px] items-start w-[440px]">
          <div
            style={{
              fontFamily: "'Inter:Semi Bold', sans-serif",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            <p className="text-[40px] mb-0 text-white tracking-[-0.44px]">
              Argos
            </p>
            <p className="text-[30px] text-[#f8fafb] tracking-[-0.44px]">
              Reservoir AI
            </p>
          </div>

          <p
            className="text-[14px] leading-[18px] tracking-[-0.08px] text-white w-full"
            style={{
              fontFamily: "'Inter:Semi Bold', sans-serif",
              fontWeight: 600,
            }}
          >
            Transforming simulation models into engineering knowledge.
          </p>

          <p
            className="text-[11px] leading-[16px] text-[#c4c4c4] w-full"
            style={{
              fontFamily: "'Inter:Regular', sans-serif",
              fontWeight: 400,
            }}
          >
            Reservoir AI is an independent engineering software project exploring
            how structured software architecture, reservoir-engineering analysis,
            and AI-assisted workflows can improve the interpretation and review
            of reservoir simulation models.
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-[12px] items-start w-[440px]">
          <p
            className="text-[12px] leading-[14px] tracking-[0.7px] uppercase text-[#7FA8BF] mb-0"
            style={{
              fontFamily: "'Inter:Semi Bold', sans-serif",
              fontWeight: 600,
            }}
          >
            Contact
          </p>

          <p
            className="text-[20px] leading-[24px] text-white mb-0"
            style={{
              fontFamily: "'Inter:Semi Bold', sans-serif",
              fontWeight: 600,
            }}
          >
            Jose Leonardo Guevara
          </p>

          <div
            className="flex flex-col gap-[7px] text-[12px] leading-[18px]"
            style={{
              fontFamily: "'Inter:Regular', sans-serif",
              fontWeight: 400,
            }}
          >
            <a
              href="mailto:guevara@ualberta.ca"
              className="text-[#c4c4c4] hover:text-white transition-colors"
            >
              guevara@ualberta.ca
            </a>

            <a
              href="https://www.linkedin.com/in/jose-leonardo-guevara-27637633/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c4c4c4] hover:text-white transition-colors"
            >
              LinkedIn
            </a>

            <a
              href="https://scholar.google.com/citations?user=cXDaHhAAAAAJ&hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c4c4c4] hover:text-white transition-colors"
            >
              Google Scholar
            </a>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div
        className="flex flex-col gap-[8px] items-start text-[11px] leading-[16px] text-[#6f8499]"
        style={{
          fontFamily: "'Inter:Regular', sans-serif",
          fontWeight: 400,
        }}
      >
        <p className="w-full">
          All reservoir models, assets, project names, operating data, and
          engineering values shown in this showcase are synthetic demonstration
          data.
        </p>
      </div>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [activeFlow, setActiveFlow] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveFlow((p) => (p + 1) % FLOW_STEPS.length), 1100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.getAttribute("data-section") || "");
        });
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const activeNav = ["demo-cases", "technology", "future-work", "footer"].includes(activeSection)
    ? activeSection : "";

  return (
    <div className="flex flex-col items-start w-full" style={{ scrollBehavior: "smooth" }}>
      <Header active={activeNav} />
      <Hero />
      <DemoCases />
      <Technology activeFlow={activeFlow} />
      <FutureWork />
      <Footer />
    </div>
  );
}
