import { useState, useEffect, useLayoutEffect, useRef, type CSSProperties, type ReactNode } from "react";

import imgAssets from "@/assets/argos/workflow-assets.png";
import imgProjects from "@/assets/argos/workflow-projects.png";
import imgCases from "@/assets/argos/workflow-cases.png";
import imgOpenCase from "@/assets/argos/workflow-open-case.png";
import imgCaseOpened from "@/imports/Case_Opened.jpg";
import imgValidation from "@/assets/argos/model-qa-validation.png";
import imgReport from "@/assets/argos/report.png";
import imgSimDeck from "@/assets/argos/simulation-deck-stage.png";
import imgAnalysis from "@/assets/argos/analysis.png";
import imgDiagnosis from "@/assets/argos/sagd-unpaired-injector-diagnostic.png";
import ArgosLogo from "@/imports/ArgosLogo/index";

// ─── Motion primitives ────────────────────────────────────────────────────────

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -6% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Reveal({
  children,
  d = 0,
  className = "",
  shot = false,
}: {
  children: ReactNode;
  d?: number;
  className?: string;
  shot?: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  return (
    <div
      ref={ref}
      className={`${shot ? "rv-shot" : "rv"} ${inView ? "in" : ""} ${className}`}
      style={delay(d)}
    >
      {children}
    </div>
  );
}

function useTrackProgress(n: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf = 0;
    const calc = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - ((el.firstElementChild as HTMLElement | null)?.offsetHeight ?? window.innerHeight - 56);
      setProgress(total > 0 ? Math.min(1, Math.max(0, (56 - r.top) / total)) : 0);
    };
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(calc);
    };
    calc();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);
  const raw = Math.min(n - 1, Math.floor(progress * n));
  const [active, setActive] = useState(raw);
  useEffect(() => {
    if (raw === active) return;
    const t = window.setTimeout(() => setActive(raw), 90);
    return () => window.clearTimeout(t);
  }, [raw, active]);
  const goTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const total = el.offsetHeight - ((el.firstElementChild as HTMLElement | null)?.offsetHeight ?? window.innerHeight - 56);
    const top = el.getBoundingClientRect().top + window.scrollY - 56;
    window.scrollTo({ top: top + ((i + 0.05) / n) * total });
  };
  return { ref, progress, active, goTo };
}

// ─── Shared pieces ────────────────────────────────────────────────────────────

function ArgosLogoMark({ scale = 1 }: { scale?: number }) {
  const w = 40.2812 * scale;
  const h = 33.2812 * scale;
  return (
    <div style={{ width: w, height: h, position: "relative", flexShrink: 0 }}>
      <div style={{ transform: `scale(${scale})`, transformOrigin: "top left", position: "absolute", top: 0, left: 0 }}>
        <ArgosLogo />
      </div>
    </div>
  );
}

function Shot({
  src,
  alt,
  className = "",
  fit = "cover",
}: {
  src: string;
  alt: string;
  className?: string;
  fit?: "cover" | "contain";
}) {
  return (
    <div className={`frame ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`block h-full w-full ${fit === "cover" ? "object-cover" : "object-contain"} object-top`}
        draggable={false}
      />
    </div>
  );
}

const gridBg: CSSProperties = {
  backgroundImage:
    "linear-gradient(to right, #E8ECEF 1px, transparent 1px), linear-gradient(to bottom, #E8ECEF 1px, transparent 1px)",
  backgroundSize: "32px 32px",
};


const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

function TextLink({ children, onClick, light = false }: { children: ReactNode; onClick?: () => void; light?: boolean }) {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
      className={`hov link-line t-body pb-0.5 ${light ? "text-white/80 hover:text-white" : "text-teal hover:text-deep"}`}
    >
      {children}
    </a>
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 8);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 border-b bg-white transition-[border-color] duration-300"
      style={{ borderColor: scrolled ? "#E8ECEF" : "transparent" }}
      aria-label="Primary"
    >
      <div className="wrap flex h-14 items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0 })} className="flex items-center gap-3" aria-label="Argos — Reservoir Intelligence, back to top">
          <ArgosLogoMark scale={0.6} />
          <div className="flex flex-col leading-tight text-left">
            <span className="t-h4 text-deep">Argos</span>
            <span className="t-small text-ink3">Reservoir Intelligence</span>
          </div>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {[
            ["Overview", "problem"],
            ["Workflow", "workflow"],
            ["Architecture", "architecture"],
            ["Future", "future"],
            ["About", "about"],
          ].map(([label, id]) => (
            <button key={id} onClick={() => go(id)} className="hov t-body text-ink2 hover:text-teal">
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Typewriter({ text, start = 400, speed = 55 }: { text: string; start?: number; speed?: number }) {
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [n, setN] = useState(reduce ? text.length : 0);
  useEffect(() => {
    if (reduce) return;
    let i = 0;
    let t = window.setTimeout(function tick() {
      i += 1;
      setN(i);
      if (i < text.length) t = window.setTimeout(tick, speed);
    }, start);
    return () => window.clearTimeout(t);
  }, [text, start, speed, reduce]);
  let idx = 0;
  const words = text.split(" ");
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((w, wi) => (
          <span key={wi}>
            <span className="whitespace-nowrap">
              {Array.from(w).map((ch) => {
                const i = idx++;
                const cls = [
                  "relative",
                  i >= n ? "opacity-0" : "",
                  i === n - 1 ? "tw-after" : "",
                ].join(" ");
                return (
                  <span key={i} className={cls}>
                    {ch}
                  </span>
                );
              })}
            </span>
            {wi < words.length - 1 && (
              <span className={`relative ${idx === n - 1 ? "tw-after" : ""}`}>
                {(idx++, " ")}
              </span>
            )}
          </span>
        ))}
      </span>
    </>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col overflow-hidden bg-white pt-14">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #E8ECEF55 1px, transparent 1px), linear-gradient(to bottom, #E8ECEF55 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="wrap relative flex flex-1 items-center">
        <div className="grid w-full items-center gap-14 py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
          <div className="lg:col-span-5">
            <Reveal d={60}>
              <h1 className="mb-6 text-5xl leading-[1.06] font-bold tracking-tight text-deep lg:text-[54px]">
                <Typewriter text="Argos — Reservoir Intelligence" />
              </h1>
            </Reveal>
            <Reveal d={140}>
              <p className="mb-10 max-w-md text-[15px] leading-relaxed text-ink2">
                Argos converts reservoir simulation decks into a structured engineering representation that enables
                model validation, analysis, and diagnosis, helping reservoir engineers extract insight, identify
                inconsistencies, and detect potential modeling issues.
              </p>
            </Reveal>
            <Reveal d={220}>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => go("workflow")}
                  className="hov rounded-[6px] bg-deep px-6 py-3 text-[14px] font-medium text-white hover:bg-teal"
                >
                  Launch Demo
                </button>
                <button
                  onClick={() => go("architecture")}
                  className="hov rounded-[6px] border border-deep px-6 py-3 text-[14px] font-medium text-deep hover:bg-deep hover:text-white"
                >
                  View Project
                </button>
              </div>
            </Reveal>
          </div>

          <Reveal shot d={160} className="lg:col-span-7">
            <div className="frame" style={{ maxHeight: 560 }}>
              <img
                src={imgOpenCase}
                alt="Argos Open Case dashboard showing Summary tiles for Reservoir, Grid, Fluid, Rock-Fluid and Wells, with Diagnosis, Validation and Analysis panels"
                className="block w-full object-cover object-top"
                draggable={false}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── The Engineering Problem ──────────────────────────────────────────────────

function SystemDiagram() {
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [vars, setVars] = useState<CSSProperties>({});
  useEffect(() => {
    const measure = () => {
      const f = frameRef.current;
      const i = imgRef.current;
      if (!f || !i || !i.clientHeight) return;
      const dist = Math.max(0, i.clientHeight - f.clientHeight);
      setVars({ "--end": `-${dist}px`, "--dur": `${Math.round(dist / 45)}s` } as CSSProperties);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (frameRef.current) ro.observe(frameRef.current);
    imgRef.current?.addEventListener("load", measure);
    return () => ro.disconnect();
  }, []);
  return (
    <Reveal shot>
      <div ref={frameRef} className="frame relative aspect-[2880/1682] overflow-hidden bg-white">
        <img
          ref={imgRef}
          src={imgReport}
          alt="A long Argos report page, slowly scrolling to show its length"
          className="report-scroll block w-full"
          style={vars}
          draggable={false}
        />
      </div>
    </Reveal>
  );
}

function Problem() {
  return (
    <section id="problem" className="bg-offwhite py-24 lg:py-32">
      <div className="wrap">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="t-h2 mb-8 max-w-[380px] text-deep">The Engineering Problem</h2>
            </Reveal>
            <Reveal d={120}>
              <div className="t-body space-y-4 text-ink2">
                <p>
                  A CMG simulation deck contains interconnected information describing the reservoir,
                  grid, fluids, rock-fluid relationships, wells, schedules, and simulation configuration.
                </p>
                <p>
                  Understanding a model often means navigating complex technical inputs and
                  reconstructing how those pieces fit together.
                </p>              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <SystemDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Detailed Transformation Stages ───────────────────────────────────────────

type Crop = { x: number; y: number; w: number; alt: string };
const IMG_W = 1557;

const stages: {
  num: string;
  title: string;
  intro: string;
  list?: string[];
  note?: string;
  question?: string;
  crop?: Crop;
  img?: { src: string; alt: string };
  placeholder?: string;
  caption: string;
}[] = [
  {
    num: "01",
    title: "Simulation Deck",
    intro:
      "The platform reads grid, rock, fluid, rock-fluid, well/schedule data directly from the simulation deck and brings these elements together into a unified representation of the reservoir model.",
    img: { src: imgSimDeck, alt: "Simulation data file in a text editor, showing the case header comments and CMG keywords such as TITLE1, GRID CORNER and COORD" },
    caption: "Simulation deck / input file",
  },
  {
    num: "02",
    title: "Model Validation",
    intro:
      "Validation checks whether the simulation model is internally consistent and structurally complete before further interpretation.",
    list: [
      "Verifying that static property arrays match the grid dimensions",
      "Checking grid geometry for invalid or inconsistent cell definitions",
      "Confirming that well and schedule references are valid",
      "Detecting controls applied after a well has been shut in",
      "Identifying missing or incompatible model information",
    ],
    note: "Validation focuses on whether the model is correctly defined and internally coherent.",
    question: "Validation answers the question: Is the model correctly defined?",
    img: { src: imgValidation, alt: "Argos Validation panel listing issues by severity, issue and count" },
    caption: "Validation findings",
  },
  {
    num: "03",
    title: "Engineering Analysis",
    intro:
      "Analysis derives quantitative engineering information from the model beyond what is directly stated in the simulation deck.",
    list: [
      "Reservoir area and thickness characterization",
      "Porosity and permeability statistics",
      "Heterogeneity levels",
      "Layer-by-layer property analysis",
      "Grid cell geometry and average cell dimensions",
      "Well inventory and producer/injector classification",
      "Well timeline reconstruction",
      "SAGD pair identification and characterization",
    ],
    question:
      "Analysis answers the question: What does this model tell us about the reservoir and its development configuration?",
    img: { src: imgAnalysis, alt: "Argos Analysis panel listing analysis results for the opened case" },
    caption: "Analysis results",
  },
  {
    num: "04",
    title: "Engineering Diagnosis",
    intro:
      "Diagnosis evaluates the analyzed model for conditions that may be technically valid but deserve engineering attention.",
    list: [
      "Layers with unusually high thickness variability",
      "Cells or layers with near-zero thickness",
      "Unusual property distributions",
      "Potentially problematic well or schedule configurations",
      "Patterns that may affect model quality, interpretation, or simulation behaviour",
    ],
    question: "Diagnosis answers the question: What in this model should an engineer look at more closely?",
    img: { src: imgDiagnosis, alt: "Argos Diagnosis panel listing findings with confidence levels, recommendation and potential impact" },
    caption: "Engineering diagnostics",
  },
];

function StageVisual({ s }: { s: (typeof stages)[number] }) {
  if (s.img) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-offwhite p-4">
        <img src={s.img.src} alt={s.img.alt} draggable={false} className="max-h-full max-w-full object-contain" />
      </div>
    );
  }
  if (s.crop) {
    const { x, y, w, alt } = s.crop;
    const k = 100 / w;
    return (
      <img
        src={imgCaseOpened}
        alt={alt}
        draggable={false}
        className="absolute max-w-none"
        style={{ width: `${IMG_W * k}cqw`, left: `${-x * k}cqw`, top: `${-y * k}cqw` }}
      />
    );
  }
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-offwhite p-6" style={gridBg}>
      <div className="t-small border border-dashed border-slate2 bg-white px-5 py-3 text-center text-slate">
        {s.placeholder}
      </div>
    </div>
  );
}

function StageCopy({ s, compact = false }: { s: (typeof stages)[number]; compact?: boolean }) {
  return (
    <div>
      {!compact && (
        <>
          <div className="t-cap mb-3 text-teal">{s.num}</div>
          <h3 className="t-h2 mb-4 text-deep">{s.title}</h3>
        </>
      )}
      <p className="t-body max-w-[460px] text-ink2">{s.intro}</p>
      {s.list && (
        <>
          <p className="t-bodyb mt-5 mb-2 text-ink">Examples include:</p>
          <ul className="t-body max-w-[460px] space-y-1.5 text-ink2">
            {s.list.map((b) => (
              <li key={b} className="relative pl-4">
                <span className="absolute top-[0.7em] left-0 h-px w-2 bg-teal" />
                {b}
              </li>
            ))}
          </ul>
        </>
      )}
      {s.note && <p className="t-body mt-4 max-w-[460px] text-ink2">{s.note}</p>}
      {s.question && (
        <p className="t-h4 mt-6 max-w-[460px] border-l-2 border-teal pl-4 text-deep">{s.question}</p>
      )}
    </div>
  );
}

function Stages() {
  const n = stages.length;
  const { ref, progress, active, goTo } = useTrackProgress(n);
  const st = (i: number) => (i === active ? "on" : i < active ? "before" : "after");

  return (
    <section id="stages" className="border-t border-formation bg-white pt-24 lg:pt-[104px]">
      <div className="wrap lg:hidden">
        <Reveal>
          <h2 className="t-h2 text-center text-deep">From Simulation Deck to Reservoir Intelligence</h2>
        </Reveal>
      </div>

      {/* Desktop: sticky scroll-driven stages */}
      <div ref={ref} className="relative hidden lg:block" style={{ height: `${n * 90}vh` }}>
        <div className="sticky top-14 bg-white pt-6">
          <div className="wrap">
            <h2 className="t-h2 mb-12 text-center text-deep">From Simulation Deck to Reservoir Intelligence</h2>
            <ol className="grid grid-cols-4" aria-label="Transformation stages">
              {stages.map((s, i) => {
                const reached = i <= active;
                const fill = i < active ? 1 : i === active ? Math.max(0.12, progress * n - i) : 0;
                return (
                  <li key={s.num} className="relative">
                    <button
                      onClick={() => goTo(i)}
                      aria-current={i === active ? "step" : undefined}
                      className="group block w-full pt-7 pr-6 text-left"
                    >
                      <span className="absolute top-0 left-0 h-px w-full bg-formation" />
                      <span
                        className="absolute top-0 left-0 h-px w-full origin-left bg-teal"
                        style={{ transform: `scaleX(${fill})`, transition: "transform 500ms var(--ease)" }}
                      />
                      <span
                        className={`absolute top-0 left-0 h-[7px] w-[7px] -translate-y-[3px] rounded-full transition-colors duration-500 ${reached ? "bg-deep" : "bg-[#C4C4C4]"}`}
                      />
                      <span className={`t-cap hov mb-2 block ${reached ? "text-teal" : "text-ink3"}`}>{s.num}</span>
                      <span
                        className={`t-h3b hov block ${i === active ? "text-deep" : "text-ink3 group-hover:text-slate"}`}
                      >
                        {s.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>

            <div className="mt-10 grid grid-cols-12 items-start gap-x-14">
              <div className="col-span-5">
                <div className="grid">
                  {stages.map((s, i) => (
                    <div key={s.num} className="xf" data-s={st(i)} aria-hidden={i !== active}>
                      <StageCopy s={s} compact />
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-7">
                <div className="frame relative aspect-[2/1] [container-type:inline-size]">
                  {stages.map((s, i) => (
                    <div key={s.num} className="slide overflow-hidden" data-s={st(i)} aria-hidden={i !== active}>
                      <StageVisual s={s} />
                    </div>
                  ))}
                </div>
                <div className="t-cap mt-3 flex justify-between text-ink3">
                  <span>{stages[active].caption}</span>
                  <span>{stages[active].num} / 04</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet / mobile: stacked */}
      <div className="wrap mt-12 space-y-20 pb-24 lg:hidden">
        {stages.map((s) => (
          <Reveal key={s.num}>
            <StageCopy s={s} />
            <div className="-mx-6 mt-6 overflow-x-auto px-6 sm:mx-0 sm:px-0">
              <div className="frame relative aspect-[2/1] min-w-[520px] [container-type:inline-size] sm:min-w-0">
                <StageVisual s={s} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="hidden h-24 lg:block lg:h-32" />
    </section>
  );
}

// ─── Product Workflow ─────────────────────────────────────────────────────────

const workflowSteps = [
  {
    num: "01",
    title: "Assets",
    heading: "Start with the asset.",
    desc: "View high-level reservoir and development information and select the asset containing the simulation work to review.",
    img: imgAssets,
    alt: "Argos Assets screen showing a grid of asset cards for Christina Lake with reservoir properties including Hydrocarbon Type, Development Stage, Production, OOIP, and Recovery Factor",
  },
  {
    num: "02",
    title: "Projects",
    heading: "Move into the engineering study.",
    desc: "Projects organise related simulation work and provide context around the study, simulator, cases, and engineering objective.",
    img: imgProjects,
    alt: "Argos Projects screen showing project cards for Christina Lake including ES-SAGD Pilot Evaluation and other studies with case counts and simulator information",
  },
  {
    num: "03",
    title: "Cases",
    heading: "Choose the scenario.",
    desc: "Each project contains simulation cases representing different model scenarios or engineering assumptions.",
    img: imgCases,
    alt: "Argos Cases screen with a list of cases in the left panel including High Case scenarios and a main panel showing no case is selected",
  },
  {
    num: "04",
    title: "Open Case",
    heading: "Inspect the model.",
    desc: "When a case is opened, Argos presents parsed simulation information through a structured engineering dashboard.",
    img: imgOpenCase,
    alt: "Argos Open Case dashboard for Low Case showing Summary tiles for Reservoir, Grid, Fluid, Rock-Fluid, and Wells, plus Diagnosis findings and Validation sections",
  },
];

function Workflow() {
  const n = workflowSteps.length;
  const { ref, progress, active, goTo } = useTrackProgress(n);
  const st = (i: number) => (i === active ? "on" : i < active ? "before" : "after");

  return (
    <section id="workflow" className="border-t border-formation bg-white pt-24 lg:pt-[104px]">
      <div className="wrap sticky top-14 z-10 bg-white pb-4 lg:hidden">
        <Reveal d={60}>
          <h2 className="t-h2 mb-4 text-deep">Navigate from asset to engineering detail.</h2>
        </Reveal>
        <Reveal d={120}>
          <p className="t-body max-w-[460px] text-ink2">
            Argos organises simulation work using a simple hierarchy that mirrors how engineers
            move through reservoir studies.
          </p>
        </Reveal>
      </div>

      {/* Desktop: sticky walkthrough */}
      <div ref={ref} className="relative hidden lg:block" style={{ height: `${n * 90}vh` }}>
        <div className="sticky top-14 bg-white pt-6">
          <div className="wrap">
            <h2 className="t-h2 mb-3 text-deep">Navigate from asset to engineering detail.</h2>
            <p className="t-body mb-10 max-w-[560px] text-ink2">
              Argos organises simulation work using a simple hierarchy that mirrors how engineers
              move through reservoir studies.
            </p>
          </div>
          <div className="wrap grid grid-cols-12 items-center gap-x-14">
            <div className="relative col-span-4">
              <div className="absolute top-0 bottom-0 left-0 w-px bg-formation">
                <div
                  className="absolute top-0 left-0 h-full w-px origin-top bg-teal"
                  style={{ transform: `scaleY(${0.1 + progress * 0.9})`, transition: "transform 300ms var(--ease)" }}
                />
              </div>
              <div className="pl-7">
                <div className="mb-8 space-y-1" role="tablist" aria-label="Workflow steps">
                  {workflowSteps.map((s, i) => (
                    <button
                      key={s.num}
                      role="tab"
                      aria-selected={i === active}
                      onClick={() => goTo(i)}
                      className="flex w-full items-baseline gap-4 py-2 text-left"
                    >
                      <span className={`t-cap hov ${i === active ? "text-teal" : "text-ink3"}`}>{s.num}</span>
                      <span className={`t-h3b hov ${i === active ? "text-deep" : "text-slate2 hover:text-slate"}`}>{s.title}</span>
                    </button>
                  ))}
                </div>
                <div className="grid">
                  {workflowSteps.map((s, i) => (
                    <div key={s.num} className="xf" data-s={st(i)} aria-hidden={i !== active}>
                      <div className="t-bodyb text-ink">{s.heading}</div>
                      <div className="t-body mt-1 max-w-[340px] text-ink2">{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-8">
              <div className="frame relative aspect-[1.84/1]">
                {workflowSteps.map((s, i) => (
                  <img
                    key={s.num}
                    src={s.img}
                    alt={s.alt}
                    className="slide h-full w-full object-contain object-top"
                    data-s={st(i)}
                    aria-hidden={i !== active}
                    draggable={false}
                  />
                ))}
              </div>
              <div className="t-cap mt-3 flex justify-between text-ink3">
                <span>{workflowSteps[active].title}</span>
                <span>{workflowSteps[active].num} / 04</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet / mobile: stacked */}
      <div className="wrap mt-14 space-y-16 lg:hidden">
        {workflowSteps.map((s) => (
          <Reveal key={s.num}>
            <div className="mb-4 flex items-baseline gap-4">
              <span className="t-cap text-teal">{s.num}</span>
              <span className="t-h3b text-deep">{s.title}</span>
            </div>
            <div className="t-bodyb mb-1 text-ink">{s.heading}</div>
            <p className="t-body mb-5 max-w-[480px] text-ink2">{s.desc}</p>
            <div className="-mx-6 overflow-x-auto px-6 sm:mx-0 sm:px-0">
              <div className="frame min-w-[640px] sm:min-w-0">
                <img src={s.img} alt={s.alt} className="block w-full" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="h-24 lg:h-32" />
    </section>
  );
}

// ─── Engineering Architecture ─────────────────────────────────────────────────

const archLayers: { label: string; band: string; items: { title: string; sub?: string }[] }[] = [
  { label: "User Interface", band: "bg-[#123A4D]/[0.03]", items: [{ title: "Frontend", sub: "React · TypeScript · Next.js" }] },
  {
    label: "Application",
    band: "bg-[#123A4D]/[0.07]",
    items: [{ title: "Backend", sub: "Python · FastAPI · SQLAlchemy · NumPy" }],
  },
  {
    label: "Engineering Intelligence",
    band: "bg-[#123A4D]/[0.12]",
    items: [{ title: "Model Parsing" }, { title: "Reservoir Domain Model" }, { title: "Engineering Services" }],
  },
  { label: "Persistence", band: "bg-[#123A4D]/[0.18]", items: [{ title: "Data Layer" }] },
];

function ArchLink({ d }: { d: number }) {
  return (
    <div className="flex justify-center py-1 lg:pl-[200px]" aria-hidden>
      <div className="flex flex-col items-center">
        <svg className="n" width="9" height="6" viewBox="0 0 9 6" style={delay(d)}>
          <path d="M0 6 4.5 0 9 6" fill="none" stroke="#0E6B6E" strokeWidth="1.2" />
        </svg>
        <div className="dy h-4 w-px bg-teal" style={delay(d)} />
        <svg className="n" width="9" height="6" viewBox="0 0 9 6" style={delay(d + 150)}>
          <path d="M0 0 4.5 6 9 0" fill="none" stroke="#0E6B6E" strokeWidth="1.2" />
        </svg>
      </div>
    </div>
  );
}

function Architecture() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return (
    <section id="architecture" className="border-t border-formation bg-offwhite py-24 lg:py-32">
      <div className="wrap">
        <Reveal d={60}>
          <h2 className="t-h2 mb-4 text-center text-deep">Engineering Architecture</h2>
        </Reveal>
        <Reveal d={120}>
          <p className="t-body mx-auto mb-14 max-w-[460px] text-center text-ink2">
            Argos is built as a modular engineering software platform.
          </p>
        </Reveal>

        <div ref={ref} className={`dg mx-auto max-w-[960px] ${inView ? "in" : ""}`}>
          {archLayers.map((layer, li) => {
            const dark = layer.band === "bg-deep";
            return (
              <div key={layer.label}>
                {li > 0 && <ArchLink d={li * 350 - 150} />}
                <div
                  className={`n grid items-center gap-4 rounded-[8px] border p-5 lg:grid-cols-[180px_1fr] lg:gap-5 ${layer.band} ${
                    dark ? "border-deep" : "border-formation"
                  }`}
                  style={delay(li * 350)}
                >
                  <div className={`t-h4 ${dark ? "text-white" : "text-deep"}`}>{layer.label}</div>
                  <div className={`grid gap-3 ${layer.items.length > 1 ? "sm:grid-cols-3" : ""}`}>
                    {layer.items.map((it) => (
                      <div
                        key={it.title}
                        className={`rounded-[8px] border px-4 py-3 ${
                          dark ? "border-white/20 bg-white/5" : "border-deep bg-white"
                        }`}
                      >
                        <div className={`t-smallb ${dark ? "text-white" : "text-deep"}`}>{it.title}</div>
                        {it.sub && <div className="t-small mt-0.5 text-ink3">{it.sub}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Future AI Layer ──────────────────────────────────────────────────────────

const futureCaps = [
  "Direct integration with reservoir simulation software",
  "AI-assisted interpretation of validation, analysis, and diagnostic results",
  "Support for optimization workflows, including objective definition, variable selection, and iterative case evaluation",
  "Assistance in setting up uncertainty and sensitivity analysis",
  "Identification of parameters and model assumptions that may warrant further investigation",
  "Suggested changes to simulation deck inputs based on engineering findings",
  "Comparison of simulation cases and development scenarios",
  "Engineering question answering across reservoir models and analysis results",
];

function FutureHeader() {
  return (
    <>
      <Reveal>
        <h2 className="t-h2 mb-4 text-deep">Future AI Layer</h2>
      </Reveal>
      <Reveal d={80}>
        <p className="t-body mb-4 max-w-[560px] text-ink2">
          Argos is being designed to support AI-assisted engineering workflows built on top of the structured
          reservoir model and its analysis results.
        </p>
        <p className="t-bodyb text-ink">Potential capabilities include:</p>
      </Reveal>
    </>
  );
}

const futureGoal =
  "The long-term goal is for Argos to move beyond model inspection and become an active engineering assistant that helps define, evaluate, and improve simulation workflows.";

function Future() {
  const n = futureCaps.length;
  const { ref, progress } = useTrackProgress(n);
  const vw = typeof window === "undefined" ? 1280 : window.innerWidth;
  const pitch = Math.min(vw * 0.34, 460);
  const cardW = pitch * 0.86;
  const c = progress * (n - 1);

  return (
    <section id="future" className="bg-lightblue pt-24 lg:pt-[104px]">
      <div className="wrap lg:hidden">
        <FutureHeader />
        <ol className="mt-8 space-y-3">
          {futureCaps.map((t, i) => (
            <li key={t} className="rounded-[8px] border border-formation bg-white p-6">
              <div className="t-cap mb-2 text-teal">{String(i + 1).padStart(2, "0")}</div>
              <p className="t-body text-ink">{t}</p>
            </li>
          ))}
        </ol>
        <p className="t-bodyb mt-8 text-deep">{futureGoal}</p>
      </div>

      <div ref={ref} className="relative hidden lg:block" style={{ height: `${n * 40}vh` }}>
        <div className="sticky top-14 overflow-hidden bg-lightblue pt-6">
          <div className="wrap">
            <FutureHeader />
          </div>
          <ol className="relative mt-10 h-[240px]" aria-label="Potential capabilities">
            {futureCaps.map((t, i) => {
              const d = i - c;
              const near = Math.max(0, 1 - Math.abs(d));
              const scale = 0.92 + 0.16 * near;
              return (
                <li
                  key={t}
                  className="absolute top-0 flex h-full flex-col justify-between rounded-[8px] border border-formation bg-white p-7 will-change-transform"
                  style={{
                    width: cardW,
                    left: "50%",
                    marginLeft: -cardW / 2,
                    transform: `translate3d(${d * pitch}px,0,0) scale(${scale})`,
                    opacity: 0.55 + 0.45 * near,
                  }}
                >
                  <span className="t-cap text-teal">{String(i + 1).padStart(2, "0")}</span>
                  <p className="t-h3 text-ink">{t}</p>
                </li>
              );
            })}
          </ol>
          <div className="wrap">
            <p className="t-bodyb mx-auto mt-10 max-w-[640px] text-center text-deep">{futureGoal}</p>
          </div>
        </div>
      </div>
      <div className="h-24 lg:h-32" />
    </section>
  );
}

// ─── About the Developer ──────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-4">
          <Reveal>
            <h2 className="t-h2 text-deep">About the Developer</h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal d={80}>
            <p className="t-h3 mb-10 max-w-[620px] text-ink">
              Argos is being developed by Jose Guevara, a petroleum engineer and machine learning researcher who earned
              his PhD in Petroleum Engineering from the University of Alberta in 2023. His work spans reservoir
              simulation, optimization, scientific machine learning, and engineering software development, with current
              research focused on the application of machine learning strategies to multiphase flow systems.
            </p>
            <div className="flex gap-8">
              <a href="https://www.linkedin.com/in/jose-leonardo-guevara-27637633/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-deep transition-colors duration-200 hover:text-teal">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </a>
              <a href="https://github.com/reservoir-ai/reservoir-intelligence-platform" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-deep transition-colors duration-200 hover:text-teal">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.55v-2.1c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.82 1.19 3.08 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.8.55A11.5 11.5 0 0 0 12 .5z" />
                </svg>
              </a>
              <a href="mailto:guevarau@ualberta.ca" aria-label="Contact" className="text-deep transition-colors duration-200 hover:text-teal">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Closing + Footer ─────────────────────────────────────────────────────────

function Closing() {
  return (
    <section className="bg-deep py-16">
      <div className="wrap">
        <Reveal>
          <h2 className="t-h1 mb-3 text-white">Argos</h2>
          <p className="t-h3 text-white/75">Engineering software for understanding reservoir simulation models.</p>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-deep py-4">
      <div className="wrap flex flex-wrap items-center justify-between gap-4">
        <div className="t-small flex items-center gap-4 text-white/70">
          <span className="t-h4 font-light text-white">Argos</span>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}

function useSectionFade() {
  useLayoutEffect(() => {
    const secs = Array.from(document.querySelectorAll<HTMLElement>("main > section")).filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight * 0.6,
    );
    secs.forEach((el) => el.classList.add("sec"));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("sec-in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -12% 0px" },
    );
    secs.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function App() {
  useSectionFade();
  return (
    <div className="min-h-full overflow-x-clip text-ink">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Stages />
        <Workflow />
        <Architecture />
        <Future />
        <About />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}
