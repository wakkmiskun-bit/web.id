import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Activity,
  ShieldCheck,
  Zap,
  Layers,
  Server,
  Database,
  Cpu,
  CheckCircle2,
  Play,
  Pause,
  RotateCcw,
  Copy,
  Check,
  ChevronRight,
  Radio,
  Flame,
  X,
  FileCode,
  TrendingUp,
} from "lucide-react";

// ==========================================
// CODE FILES & SYNTAX TOKEN DATA
// ==========================================
export const CODE_FILES = {
  "Core.php": {
    name: "Core.php",
    path: "app/Services/Enterprise/HighPerformanceCore.php",
    language: "php",
    badge: "Laravel 11",
    lines: [
      {
        indent: 0,
        tokens: [{ text: "<?php", color: "text-slate-400 font-semibold" }],
      },
      {
        indent: 0,
        tokens: [
          { text: "namespace ", color: "text-purple-400 font-medium" },
          { text: "App\\Services\\Enterprise;", color: "text-slate-300" },
        ],
      },
      { indent: 0, tokens: [{ text: "", color: "" }] },
      {
        indent: 0,
        tokens: [
          { text: "final class ", color: "text-purple-400 font-medium" },
          { text: "HighPerformanceCore", color: "text-sky-300 font-semibold" },
          { text: " {", color: "text-slate-300" },
        ],
      },
      {
        indent: 1,
        tokens: [
          { text: "protected ", color: "text-purple-400 font-medium" },
          { text: "array ", color: "text-cyan-400" },
          { text: "$stack", color: "text-slate-200" },
          { text: " = [", color: "text-slate-400" },
          { text: "'Laravel 11'", color: "text-emerald-400" },
          { text: ", ", color: "text-slate-400" },
          { text: "'React 18'", color: "text-emerald-400" },
          { text: ", ", color: "text-slate-400" },
          { text: "'Redis'", color: "text-emerald-400" },
          { text: "];", color: "text-slate-400" },
        ],
      },
      {
        indent: 1,
        tokens: [
          { text: "protected ", color: "text-purple-400 font-medium" },
          { text: "string ", color: "text-cyan-400" },
          { text: "$security", color: "text-slate-200" },
          { text: " = ", color: "text-slate-400" },
          { text: "'OWASP_Hardened_Shield'", color: "text-emerald-400" },
          { text: ";", color: "text-slate-400" },
        ],
      },
      {
        indent: 1,
        tokens: [
          { text: "protected ", color: "text-purple-400 font-medium" },
          { text: "float ", color: "text-cyan-400" },
          { text: "$targetLatency", color: "text-slate-200" },
          { text: " = ", color: "text-slate-400" },
          { text: "18.4", color: "text-amber-300 font-semibold" },
          { text: "; ", color: "text-slate-400" },
          { text: "// milliseconds", color: "text-slate-500 italic" },
        ],
      },
      { indent: 0, tokens: [{ text: "", color: "" }] },
      {
        indent: 1,
        tokens: [
          { text: "public function ", color: "text-purple-400 font-medium" },
          { text: "deployProduction", color: "text-amber-300 font-semibold" },
          { text: "(): ", color: "text-slate-400" },
          { text: "SystemRelease", color: "text-sky-300" },
          { text: " {", color: "text-slate-300" },
        ],
      },
      {
        indent: 2,
        tokens: [
          { text: "return new ", color: "text-purple-400 font-medium" },
          { text: "SystemRelease", color: "text-sky-300" },
          { text: "(", color: "text-slate-400" },
        ],
      },
      {
        indent: 3,
        tokens: [
          { text: "status: ", color: "text-slate-400" },
          { text: "'PRODUCTION_READY'", color: "text-emerald-400 font-medium" },
          { text: ",", color: "text-slate-400" },
        ],
      },
      {
        indent: 3,
        tokens: [
          { text: "uptime: ", color: "text-slate-400" },
          { text: "'99.99%'", color: "text-emerald-400 font-medium" },
          { text: ",", color: "text-slate-400" },
        ],
      },
      {
        indent: 3,
        tokens: [
          { text: "scalability: ", color: "text-slate-400" },
          { text: "'Auto-Balanced'", color: "text-indigo-300 font-medium" },
        ],
      },
      {
        indent: 2,
        tokens: [{ text: ");", color: "text-slate-400" }],
      },
      {
        indent: 1,
        tokens: [{ text: "}", color: "text-slate-300" }],
      },
      {
        indent: 0,
        tokens: [{ text: "}", color: "text-slate-300" }],
      },
    ],
  },
  "SecurityShield.php": {
    name: "SecurityShield.php",
    path: "app/Http/Middleware/SecurityShield.php",
    language: "php",
    badge: "OWASP Pro",
    lines: [
      {
        indent: 0,
        tokens: [{ text: "<?php", color: "text-slate-400 font-semibold" }],
      },
      {
        indent: 0,
        tokens: [
          { text: "namespace ", color: "text-purple-400 font-medium" },
          { text: "App\\Http\\Middleware;", color: "text-slate-300" },
        ],
      },
      { indent: 0, tokens: [{ text: "", color: "" }] },
      {
        indent: 0,
        tokens: [
          { text: "final class ", color: "text-purple-400 font-medium" },
          { text: "SecurityShield", color: "text-sky-300 font-semibold" },
          { text: " {", color: "text-slate-300" },
        ],
      },
      {
        indent: 1,
        tokens: [
          { text: "public function ", color: "text-purple-400 font-medium" },
          { text: "handle", color: "text-amber-300 font-semibold" },
          { text: "($request, Closure $next) {", color: "text-slate-300" },
        ],
      },
      {
        indent: 2,
        tokens: [
          { text: "$res = ", color: "text-slate-200" },
          { text: "$next", color: "text-amber-300" },
          { text: "($request);", color: "text-slate-300" },
        ],
      },
      {
        indent: 2,
        tokens: [
          { text: "// Enforce Hardened Security Headers", color: "text-slate-500 italic" },
        ],
      },
      {
        indent: 2,
        tokens: [
          { text: "$res->headers->set(", color: "text-slate-300" },
          { text: "'X-Frame-Options'", color: "text-emerald-400" },
          { text: ", ", color: "text-slate-400" },
          { text: "'SAMEORIGIN'", color: "text-emerald-400" },
          { text: ");", color: "text-slate-400" },
        ],
      },
      {
        indent: 2,
        tokens: [
          { text: "$res->headers->set(", color: "text-slate-300" },
          { text: "'X-Content-Type-Options'", color: "text-emerald-400" },
          { text: ", ", color: "text-slate-400" },
          { text: "'nosniff'", color: "text-emerald-400" },
          { text: ");", color: "text-slate-400" },
        ],
      },
      {
        indent: 2,
        tokens: [
          { text: "$res->headers->set(", color: "text-slate-300" },
          { text: "'Content-Security-Policy'", color: "text-emerald-400" },
          { text: ", ", color: "text-slate-400" },
          { text: "\"default-src 'self'\"", color: "text-emerald-400" },
          { text: ");", color: "text-slate-400" },
        ],
      },
      {
        indent: 2,
        tokens: [
          { text: "return ", color: "text-purple-400 font-medium" },
          { text: "$res;", color: "text-slate-200" },
        ],
      },
      {
        indent: 1,
        tokens: [{ text: "}", color: "text-slate-300" }],
      },
      {
        indent: 0,
        tokens: [{ text: "}", color: "text-slate-300" }],
      },
    ],
  },
  "DeployPipeline.ts": {
    name: "DeployPipeline.ts",
    path: "config/DeployPipeline.ts",
    language: "typescript",
    badge: "CI/CD Spec",
    lines: [
      {
        indent: 0,
        tokens: [
          { text: "export const ", color: "text-purple-400 font-medium" },
          { text: "deployPipelineConfig", color: "text-amber-300 font-semibold" },
          { text: " = {", color: "text-slate-300" },
        ],
      },
      {
        indent: 1,
        tokens: [
          { text: "runtime: ", color: "text-slate-400" },
          { text: "'PHP 8.3 Octane + React 18'", color: "text-emerald-400" },
          { text: ",", color: "text-slate-400" },
        ],
      },
      {
        indent: 1,
        tokens: [
          { text: "cacheTier: ", color: "text-slate-400" },
          { text: "'Redis RESP3 Cluster (Sub-1ms)'", color: "text-emerald-400" },
          { text: ",", color: "text-slate-400" },
        ],
      },
      {
        indent: 1,
        tokens: [
          { text: "targetCoreWebVitals: ", color: "text-slate-400" },
          { text: "99", color: "text-amber-300 font-semibold" },
          { text: ",", color: "text-slate-400" },
        ],
      },
      {
        indent: 1,
        tokens: [
          { text: "maxLatencyMs: ", color: "text-slate-400" },
          { text: "20.0", color: "text-amber-300 font-semibold" },
          { text: ",", color: "text-slate-400" },
        ],
      },
      {
        indent: 1,
        tokens: [
          { text: "securitySuite: ", color: "text-slate-400" },
          { text: "['CSRF', 'XSS', 'SQLi_Shield', 'DDoS_WAF']", color: "text-sky-300" },
          { text: ",", color: "text-slate-400" },
        ],
      },
      {
        indent: 1,
        tokens: [
          { text: "autoScaling: ", color: "text-slate-400" },
          { text: "true", color: "text-purple-400 font-semibold" },
        ],
      },
      {
        indent: 0,
        tokens: [{ text: "};", color: "text-slate-300" }],
      },
    ],
  },
};

// ==========================================
// ARCHITECTURE TOPOLOGY DATA
// ==========================================
const ARCHITECTURE_NODES = [
  {
    id: "client",
    name: "Client Tier (React 18 + Vite)",
    sub: "Edge Hydration & Fluid UX",
    icon: Layers,
    accent: "from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-400",
    badge: "Frontend",
    latency: "0.0ms",
    status: "Optimal",
    protocol: "HTTP/3 QUIC · TLS 1.3",
    metrics: "Bundle: 48kb gzip · CWV: 99",
    desc: "Single Page Application modern dengan hydration instan, transisi 60fps, dan zero layout shift.",
  },
  {
    id: "edge",
    name: "Edge Shield & CDN",
    sub: "OWASP Hardened WAF & SSL",
    icon: ShieldCheck,
    accent: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400",
    badge: "Security",
    latency: "4.2ms",
    status: "Hardened",
    protocol: "Cloudflare Edge · TLS 1.3",
    metrics: "Anti-DDoS · Rate Limited",
    desc: "Penyaringan traffic berbahaya di tepi jaringan, proteksi SQLi/XSS, dan pengiriman cache aset sub-detik.",
  },
  {
    id: "backend",
    name: "Laravel 11 Core API",
    sub: "PHP 8.3 Octane Microservices",
    icon: Server,
    accent: "from-indigo-500/20 to-violet-500/20 border-indigo-500/30 text-indigo-400",
    badge: "Engine",
    latency: "12.4ms",
    status: "High Speed",
    protocol: "RESTful & GraphQL · Swoole",
    metrics: "Async Queue · OPcache On",
    desc: "Clean architecture dengan dependency injection modular, queue background jobs, dan validasi data ketat.",
  },
  {
    id: "database",
    name: "Data & Cache Cluster",
    sub: "PostgreSQL 16 + Redis RESP3",
    icon: Database,
    accent: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400",
    badge: "Storage",
    latency: "0.8ms",
    status: "Sub-1ms",
    protocol: "PostgreSQL ACID · Redis In-Mem",
    metrics: "Cache Hit: 99.2% · Auto Sync",
    desc: "Penyimpanan data relasional terindeks efisien dipadu cache in-memory untuk waktu respon di bawah 1 milidetik.",
  },
];

// ==========================================
// MAIN SYSTEM STATION COMPONENT
// ==========================================
export default function SystemStation() {
  const [activeTab, setActiveTab] = useState("code"); // "code" | "arch" | "metrics"
  const [activeFileKey, setActiveFileKey] = useState("Core.php");

  // Typewriter state
  const [charCount, setCharCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(1); // 1 = 1x (~26ms), 2 = 2x (~12ms), 0 = Instant
  const [isComplete, setIsComplete] = useState(false);
  const [copied, setCopied] = useState(false);

  // Terminal console state
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState([]);
  const [isRunningTest, setIsRunningTest] = useState(false);

  // Architecture interactive state
  const [selectedNode, setSelectedNode] = useState(ARCHITECTURE_NODES[0]);
  const [isPingingPipeline, setIsPingingPipeline] = useState(false);
  const [pingResult, setPingResult] = useState(null);

  // Live Metrics state
  const [stressActive, setStressActive] = useState(false);
  const [timeframe, setTimeframe] = useState("Live");
  const [liveMetrics, setLiveMetrics] = useState({
    latency: 18.4,
    rps: 10480,
    cacheHit: 99.2,
    cpu: 24,
    ram: 1.4,
  });

  const activeFile = CODE_FILES[activeFileKey] || CODE_FILES["Core.php"];

  // Calculate total characters in active file
  const totalCharacters = useMemo(() => {
    return activeFile.lines.reduce((acc, line) => {
      const lineLen = line.tokens.reduce((tAcc, t) => tAcc + t.text.length, 0);
      return acc + lineLen + 1; // +1 for newline
    }, 0);
  }, [activeFile]);

  // Restart typing on file switch
  useEffect(() => {
    setCharCount(0);
    setIsComplete(false);
    setIsPaused(false);
    setConsoleLogs([]);
    setConsoleOpen(false);
  }, [activeFileKey]);

  // Typewriter Engine
  useEffect(() => {
    if (activeTab !== "code") return;
    if (isPaused) return;

    if (typingSpeed === 0) {
      // Instant display
      setCharCount(totalCharacters);
      setIsComplete(true);
      return;
    }

    if (charCount >= totalCharacters) {
      setIsComplete(true);
      return;
    }

    const delay = typingSpeed === 2 ? 14 : 28;
    const timer = setTimeout(() => {
      setCharCount((prev) => Math.min(prev + (typingSpeed === 2 ? 2 : 1), totalCharacters));
    }, delay);

    return () => clearTimeout(timer);
  }, [charCount, totalCharacters, isPaused, typingSpeed, activeTab]);

  // Telemetry fluctuation effect
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveMetrics((prev) => {
        if (stressActive) {
          return {
            latency: +(18.8 + Math.random() * 1.6).toFixed(1),
            rps: Math.floor(14200 + Math.random() * 800),
            cacheHit: +(99.0 + Math.random() * 0.4).toFixed(1),
            cpu: Math.floor(45 + Math.random() * 6),
            ram: +(2.6 + Math.random() * 0.3).toFixed(1),
          };
        }
        return {
          latency: +(17.8 + Math.random() * 1.4).toFixed(1),
          rps: Math.floor(10200 + Math.random() * 400),
          cacheHit: +(99.1 + Math.random() * 0.3).toFixed(1),
          cpu: Math.floor(22 + Math.random() * 5),
          ram: +(1.4 + Math.random() * 0.1).toFixed(1),
        };
      });
    }, 2200);

    return () => clearInterval(timer);
  }, [stressActive]);

  // Handle Copy Raw Code
  const handleCopy = () => {
    const rawText = activeFile.lines
      .map((l) => "  ".repeat(l.indent) + l.tokens.map((t) => t.text).join(""))
      .join("\n");
    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Handle Run Test Code
  const handleRunTest = () => {
    setConsoleOpen(true);
    setIsRunningTest(true);
    setConsoleLogs([
      { time: "00:00.1", text: `$ php artisan test --filter=${activeFile.name.replace(".php", "").replace(".ts", "")}` },
    ]);

    setTimeout(() => {
      setConsoleLogs((prev) => [
        ...prev,
        { time: "00:00.3", text: "⚡ [BOOT] Initializing Laravel 11 enterprise environment... OK" },
      ]);
    }, 300);

    setTimeout(() => {
      setConsoleLogs((prev) => [
        ...prev,
        { time: "00:00.6", text: "🛡️ [SECURITY] OWASP Hardened headers & CSRF protection verified." },
      ]);
    }, 650);

    setTimeout(() => {
      setConsoleLogs((prev) => [
        ...prev,
        { time: "00:00.9", text: `🚀 [PERF] Latency benchmark: ${liveMetrics.latency}ms (Sub-20ms SLA PASS)` },
        { time: "00:01.1", text: "✓ PASS: 3 tests, 12 assertions [Status: PRODUCTION_READY]" },
      ]);
      setIsRunningTest(false);
    }, 1100);
  };

  // Handle Pipeline Ping Simulation
  const handlePingPipeline = () => {
    setIsPingingPipeline(true);
    setPingResult(null);

    setTimeout(() => {
      setIsPingingPipeline(false);
      setPingResult({
        total: "17.4 ms",
        stages: [
          { name: "Client", time: "0.2ms" },
          { name: "Edge Shield", time: "4.1ms" },
          { name: "Laravel Core", time: "12.3ms" },
          { name: "Redis Cache", time: "0.8ms" },
        ],
      });
    }, 900);
  };

  // Handle Stress Test Trigger
  const handleTriggerStress = () => {
    setStressActive(true);
    setTimeout(() => {
      setStressActive(false);
    }, 6000);
  };

  // Compute partially rendered code tokens for typewriter effect
  const { renderedLines, currentCursorPos } = useMemo(() => {
    let charsRemaining = charCount;
    let cursorPos = { line: 1, col: 1 };
    const lines = [];

    for (let lIdx = 0; lIdx < activeFile.lines.length; lIdx++) {
      const line = activeFile.lines[lIdx];
      const lineLen = line.tokens.reduce((acc, t) => acc + t.text.length, 0);

      if (charsRemaining <= 0 && lIdx > 0 && lines.length === 0) {
        break;
      }
      if (charsRemaining <= 0 && lIdx > lines.length) {
        break;
      }

      const renderedTokens = [];
      let lineCharAcc = 0;

      for (let tIdx = 0; tIdx < line.tokens.length; tIdx++) {
        const token = line.tokens[tIdx];
        if (charsRemaining <= 0) break;

        const take = Math.min(token.text.length, charsRemaining);
        const textChunk = token.text.slice(0, take);
        charsRemaining -= take;
        lineCharAcc += take;

        const isCursorHere = charsRemaining === 0;

        renderedTokens.push({
          text: textChunk,
          color: token.color,
          isCursorHere,
        });
      }

      if (charsRemaining > 0) {
        charsRemaining -= 1; // newline consumed
      }

      lines.push({
        lineIndex: lIdx + 1,
        indent: line.indent,
        tokens: renderedTokens,
        isActiveLine: charsRemaining === 0,
      });

      if (charsRemaining === 0) {
        cursorPos = { line: lIdx + 1, col: lineCharAcc + 1 };
      }
    }

    return { renderedLines: lines, currentCursorPos: cursorPos };
  }, [charCount, activeFile]);

  return (
    <div className="relative rounded-2xl border border-slate-700/50 bg-[#0B1120]/95 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl overflow-hidden transition-all duration-300">
      {/* ========================================================== */}
      {/* 1. TOP WINDOW BAR (macOS Chrome + Mode Switcher) */}
      {/* ========================================================== */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-slate-800/80 bg-[#0c1424]/90 backdrop-blur-md">
        {/* Left: macOS Traffic Lights + Active Path Breadcrumb */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" title="macOS Window Controls">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]/90 border border-[#e0443e]/40 shadow-xs cursor-pointer hover:opacity-80 transition-opacity" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]/90 border border-[#dea123]/40 shadow-xs cursor-pointer hover:opacity-80 transition-opacity" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]/90 border border-[#1aab29]/40 shadow-xs cursor-pointer hover:opacity-80 transition-opacity" />
          </div>

          <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-slate-400 pl-1 border-l border-slate-800">
            <span className="text-slate-400">nexacode</span>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="text-slate-300 font-medium truncate max-w-[140px]">{activeFile.name}</span>
          </div>
        </div>

        {/* Right: Station Mode Tabs (Core Code, Topology, Live Metrics) */}
        <div className="flex items-center gap-1 bg-[#050811]/70 p-1 rounded-xl border border-slate-800/70 text-xs font-mono">
          <button
            onClick={() => setActiveTab("code")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all text-xs ${
              activeTab === "code"
                ? "bg-slate-800 text-slate-100 font-semibold shadow-sm border border-slate-700/60"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
            }`}
          >
            <Terminal className="h-3.5 w-3.5 text-cyan-400" />
            <span>Editor</span>
          </button>

          <button
            onClick={() => setActiveTab("arch")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all text-xs ${
              activeTab === "arch"
                ? "bg-slate-800 text-slate-100 font-semibold shadow-sm border border-slate-700/60"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
            }`}
          >
            <Cpu className="h-3.5 w-3.5 text-indigo-400" />
            <span>Arsitektur</span>
          </button>

          <button
            onClick={() => setActiveTab("metrics")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all text-xs ${
              activeTab === "metrics"
                ? "bg-slate-800 text-slate-100 font-semibold shadow-sm border border-slate-700/60"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
            }`}
          >
            <Activity className="h-3.5 w-3.5 text-emerald-400" />
            <span>Live Metrics</span>
          </button>
        </div>
      </div>

      {/* ========================================================== */}
      {/* 2. BODY CONTENT (Per Tab) */}
      {/* ========================================================== */}
      <div className="p-4 sm:p-5 min-h-[380px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {/* ======================================================== */}
          {/* TAB 1: CODE EDITOR (Typewriter & Multi-File) */}
          {/* ======================================================== */}
          {activeTab === "code" && (
            <motion.div
              key="code-tab"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col h-full space-y-3"
            >
              {/* File Sub-Tabs & Editor Action Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-slate-800/70">
                {/* File Tabs */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                  {Object.keys(CODE_FILES).map((fileKey) => {
                    const f = CODE_FILES[fileKey];
                    const isSelected = activeFileKey === fileKey;
                    return (
                      <button
                        key={fileKey}
                        onClick={() => setActiveFileKey(fileKey)}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors border ${
                          isSelected
                            ? "bg-slate-800/90 text-slate-100 border-slate-700 font-medium"
                            : "bg-slate-900/40 text-slate-400 hover:text-slate-300 hover:bg-slate-800/30 border-transparent"
                        }`}
                      >
                        <FileCode className={`h-3 w-3 ${isSelected ? "text-cyan-400" : "text-slate-400"}`} />
                        <span>{f.name}</span>
                        {isSelected && !isComplete && (
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse ml-0.5" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Code Controls: Play/Pause, Replay, Speed, Copy, Run */}
                <div className="flex items-center gap-1.5 text-xs font-mono">
                  {/* Speed toggle */}
                  <button
                    onClick={() => setTypingSpeed((prev) => (prev === 1 ? 2 : prev === 2 ? 0 : 1))}
                    title="Kecepatan Mengetik"
                    className="px-2 py-1 rounded bg-slate-900/60 hover:bg-slate-800 text-[10px] text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors"
                  >
                    {typingSpeed === 1 ? "1x Speed" : typingSpeed === 2 ? "2x Fast" : "Instant"}
                  </button>

                  {/* Pause / Resume */}
                  {!isComplete && (
                    <button
                      onClick={() => setIsPaused((p) => !p)}
                      title={isPaused ? "Lanjutkan Mengetik" : "Jeda"}
                      className="p-1.5 rounded bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors"
                    >
                      {isPaused ? <Play className="h-3 w-3 text-emerald-400" /> : <Pause className="h-3 w-3 text-amber-400" />}
                    </button>
                  )}

                  {/* Replay */}
                  <button
                    onClick={() => {
                      setCharCount(0);
                      setIsComplete(false);
                      setIsPaused(false);
                    }}
                    title="Ketik Ulang dari Awal"
                    className="p-1.5 rounded bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors"
                  >
                    <RotateCcw className="h-3 w-3" />
                  </button>

                  {/* Copy */}
                  <button
                    onClick={handleCopy}
                    title="Salin Seluruh Kode"
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-[11px] transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-400" />
                        <span className="text-emerald-400 text-[10px]">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3 text-slate-400" />
                        <span className="hidden sm:inline text-[10px]">Salin</span>
                      </>
                    )}
                  </button>

                  {/* Run / Test Button */}
                  <button
                    onClick={handleRunTest}
                    disabled={isRunningTest}
                    title="Jalankan Simulasi Test"
                    className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-gradient-to-r from-indigo-600/80 to-blue-600/80 hover:from-indigo-500 hover:to-blue-500 text-white font-medium text-[11px] shadow-sm border border-indigo-400/30 transition-all active:scale-95"
                  >
                    <Play className="h-2.5 w-2.5 fill-white text-white" />
                    <span>Run</span>
                  </button>
                </div>
              </div>

              {/* Code Line Display (Typewriter Rendering) */}
              <div className="font-mono text-xs sm:text-[13px] leading-relaxed space-y-0.5 overflow-x-auto min-h-[220px] max-h-[280px] pr-2 custom-scrollbar select-text">
                {renderedLines.map((line) => (
                  <div
                    key={line.lineIndex}
                    style={{ paddingLeft: `${line.indent * 1.2}rem` }}
                    className={`flex items-baseline py-0.5 rounded px-1.5 transition-colors ${
                      line.isActiveLine && !isComplete ? "bg-cyan-500/[0.07]" : "hover:bg-slate-800/20"
                    }`}
                  >
                    {/* Line number gutter */}
                    <span className="w-6 text-[10px] text-slate-400 select-none mr-2 shrink-0 text-right">
                      {line.lineIndex}
                    </span>

                    {/* Token list */}
                    <div className="flex flex-wrap items-baseline">
                      {line.tokens.map((token, tIdx) => (
                        <span key={tIdx} className={token.color || "text-slate-300"}>
                          {token.text}
                          {token.isCursorHere && !isComplete && (
                            <span className="inline-block w-1.5 h-3.5 bg-cyan-400 ml-0.5 animate-pulse rounded-xs align-middle" />
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}

                {/* If complete, show calm final status line with blinking prompt */}
                {isComplete && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="pt-3 flex items-center gap-2 text-slate-400 text-xs pl-8 select-none"
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-400/80 animate-pulse" />
                    <span className="text-[11px] font-mono text-slate-400">
                      Ready for production release · 0 lint errors
                    </span>
                    <span className="inline-block w-1.5 h-3.5 bg-slate-400 animate-pulse" />
                  </motion.div>
                )}
              </div>

              {/* Collapsible Interactive Test Console Output */}
              <AnimatePresence>
                {consoleOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden pt-2 border-t border-slate-800/80"
                  >
                    <div className="rounded-xl bg-[#060a12] border border-slate-800/90 p-3 font-mono text-[11px] text-slate-300 space-y-1">
                      <div className="flex items-center justify-between text-[10px] text-slate-400 pb-1 border-b border-slate-800">
                        <span className="flex items-center gap-1.5 text-cyan-400">
                          <Terminal className="h-3 w-3" />
                          Terminal Output (PHPUnit &amp; Latency Scan)
                        </span>
                        <button
                          onClick={() => setConsoleOpen(false)}
                          className="text-slate-400 hover:text-white p-0.5"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>

                      <div className="space-y-1 pt-1.5">
                        {consoleLogs.map((log, lIdx) => (
                          <div key={lIdx} className="flex items-start gap-2">
                            <span className="text-slate-400 shrink-0">[{log.time}]</span>
                            <span
                              className={
                                log.text.includes("PASS")
                                  ? "text-emerald-400 font-semibold"
                                  : log.text.includes("SECURITY")
                                  ? "text-sky-300"
                                  : log.text.includes("PERF")
                                  ? "text-amber-300"
                                  : "text-slate-300"
                              }
                            >
                              {log.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* ======================================================== */}
          {/* TAB 2: INTERACTIVE ARCHITECTURE TOPOLOGY */}
          {/* ======================================================== */}
          {activeTab === "arch" && (
            <motion.div
              key="arch-tab"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {/* Architecture Header & Ping Action */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/70 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <Cpu className="h-3.5 w-3.5 text-indigo-400" />
                  <span className="font-semibold text-slate-200">Pipeline Topologi 4-Tier</span>
                </div>

                <button
                  onClick={handlePingPipeline}
                  disabled={isPingingPipeline}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-700/80 text-cyan-300 border border-cyan-500/20 text-[11px] transition-all"
                >
                  <Radio className={`h-3 w-3 ${isPingingPipeline ? "animate-spin text-cyan-400" : ""}`} />
                  <span>{isPingingPipeline ? "Testing..." : "Ping Pipeline"}</span>
                </button>
              </div>

              {/* Interactive Node Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ARCHITECTURE_NODES.map((node) => {
                  const Icon = node.icon;
                  const isSelected = selectedNode.id === node.id;
                  return (
                    <div
                      key={node.id}
                      onClick={() => setSelectedNode(node)}
                      className={`cursor-pointer rounded-xl border p-3 transition-all ${
                        isSelected
                          ? "bg-slate-800/70 border-cyan-500/40 shadow-sm"
                          : "bg-slate-900/40 border-slate-800/60 hover:border-slate-700 hover:bg-slate-800/30"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className={`p-2 rounded-lg border bg-gradient-to-br ${node.accent}`}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-xs font-display font-bold text-slate-100">{node.name}</p>
                            <p className="text-[10px] text-slate-400 font-mono">{node.sub}</p>
                          </div>
                        </div>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/50">
                          {node.latency}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Selected Node Details Drawer */}
              <div className="rounded-xl bg-[#070b14] border border-slate-800/80 p-3.5 space-y-2 text-xs">
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {selectedNode.name}
                  </span>
                  <span className="text-emerald-400 text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Status: {selectedNode.status}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-body">{selectedNode.desc}</p>
                <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[10px] text-slate-400">
                  <span className="bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60 text-slate-300">
                    {selectedNode.protocol}
                  </span>
                  <span className="bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60 text-slate-300">
                    {selectedNode.metrics}
                  </span>
                </div>
              </div>

              {/* Ping Result Live Alert */}
              {pingResult && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl bg-cyan-950/40 border border-cyan-500/30 p-2.5 flex items-center justify-between text-xs font-mono text-cyan-200"
                >
                  <span className="flex items-center gap-1.5">
                    <Zap className="h-3.5 w-3.5 text-cyan-400" />
                    Round-Trip Ping Latency:
                  </span>
                  <span className="font-bold text-emerald-400 text-sm">{pingResult.total} (Optimal)</span>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* ======================================================== */}
          {/* TAB 3: LIVE TELEMETRY & STRESS TEST */}
          {/* ======================================================== */}
          {activeTab === "metrics" && (
            <motion.div
              key="metrics-tab"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-3.5"
            >
              {/* Telemetry Header */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/70 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-200">
                  <Activity className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="font-semibold">Live Production Telemetry</span>
                </div>

                <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-[10px]">
                  {["Live", "5m", "1h"].map((tf) => (
                    <button
                      key={tf}
                      onClick={() => setTimeframe(tf)}
                      className={`px-2 py-0.5 rounded ${
                        timeframe === tf
                          ? "bg-slate-800 text-white font-semibold"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {tf}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4 Live Metric Cards */}
              <div className="grid grid-cols-2 gap-2.5">
                {/* 1. Latency */}
                <div className="rounded-xl border border-slate-800 bg-[#070b14] p-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                    <span>Server Latency</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-lg sm:text-xl font-mono font-bold text-emerald-400">
                      {liveMetrics.latency} ms
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">Sub-20ms</span>
                  </div>
                  {/* Mini SVG Sparkline */}
                  <div className="mt-2 h-5 w-full">
                    <svg className="w-full h-full text-emerald-500/50" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <path
                        d="M0 12 Q 25 8, 50 14 T 100 9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                {/* 2. Throughput / RPS */}
                <div className="rounded-xl border border-slate-800 bg-[#070b14] p-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                    <span>Throughput (RPS)</span>
                    <TrendingUp className="h-3 w-3 text-cyan-400" />
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-lg sm:text-xl font-mono font-bold text-cyan-300">
                      {liveMetrics.rps.toLocaleString()} req/s
                    </span>
                  </div>
                  {/* Mini Load Bar */}
                  <div className="mt-2.5 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-500 rounded-full"
                      style={{ width: `${stressActive ? "85%" : "48%"}` }}
                    />
                  </div>
                </div>

                {/* 3. Cache Hit Ratio */}
                <div className="rounded-xl border border-slate-800 bg-[#070b14] p-3">
                  <div className="text-[11px] font-mono text-slate-400 mb-1">Redis Cache Hit</div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-lg sm:text-xl font-mono font-bold text-purple-300">
                      {liveMetrics.cacheHit}%
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">Optimal</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-mono mt-1">In-Memory 0.4ms</p>
                </div>

                {/* 4. CPU & RAM Load */}
                <div className="rounded-xl border border-slate-800 bg-[#070b14] p-3">
                  <div className="text-[11px] font-mono text-slate-400 mb-1">CPU &amp; RAM Load</div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-lg sm:text-xl font-mono font-bold text-amber-300">
                      {liveMetrics.cpu}% CPU
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">{liveMetrics.ram} GB</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-mono mt-1">
                    {stressActive ? "Auto-Scaled +2 Pods" : "Normal Load"}
                  </p>
                </div>
              </div>

              {/* Stress Test Action Trigger */}
              <div className="pt-1">
                <button
                  onClick={handleTriggerStress}
                  disabled={stressActive}
                  className={`w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs font-mono transition-all border ${
                    stressActive
                      ? "bg-amber-950/50 border-amber-500/40 text-amber-300 shadow-md"
                      : "bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border-slate-700"
                  }`}
                >
                  <Flame className={`h-3.5 w-3.5 ${stressActive ? "text-amber-400 animate-bounce" : "text-slate-400"}`} />
                  <span>
                    {stressActive
                      ? "⚡ Simulasi Lonjakan Traffic Aktif (Auto-Scaling Berjalan)..."
                      : "Uji Simulasi Lonjakan Traffic (Stress Test 14k+ req/s)"}
                  </span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ========================================================== */}
      {/* 3. BOTTOM STATUS BAR (Real IDE Telemetry & Git Info) */}
      {/* ========================================================== */}
      <div className="px-4 py-2 border-t border-slate-800/80 bg-[#060a14] flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400/90 animate-pulse" />
            <span className="text-slate-300">NexaEngine v4.2.0</span>
          </div>

          <span className="hidden sm:inline-block text-slate-400 border-l border-slate-800 pl-3">
            git: <span className="text-slate-300">main*</span>
          </span>

          <span className="hidden md:inline-block text-slate-400 border-l border-slate-800 pl-3">
            {activeFile.badge}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-slate-400">
            Ln {currentCursorPos.line}, Col {currentCursorPos.col}
          </span>
          <span className="border-l border-slate-800 pl-3 text-emerald-400 font-semibold">
            {liveMetrics.latency} ms
          </span>
        </div>
      </div>
    </div>
  );
}
