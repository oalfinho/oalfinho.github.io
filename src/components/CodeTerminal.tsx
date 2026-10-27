import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Play, RotateCcw, Copy, Check, Code, Activity, Sparkles } from 'lucide-react';

interface ScriptScript {
  id: string;
  name: string;
  lang: string;
  command: string;
  lines: Array<{
    type: 'cmd' | 'info' | 'extract' | 'transform' | 'ai' | 'success' | 'metric';
    text: string;
    delay: number;
  }>;
}

const SCRIPTS: ScriptScript[] = [
  {
    id: 'etl',
    name: 'pipeline_etl.py',
    lang: 'Python',
    command: 'python3 -m pipelines.data_harvester --dataset=fatec',
    lines: [
      { type: 'info', text: '[INFO] Iniciando pipeline de dados (Arthur / FATEC Rio Claro)', delay: 200 },
      { type: 'extract', text: '[EXTRACT] Conectando ao scraper (pokemon-scrap / Aurora)...', delay: 450 },
      { type: 'extract', text: '[EXTRACT] 2.480 registros brutos coletados [200 OK]', delay: 650 },
      { type: 'transform', text: '[TRANSFORM] Normalizando schema com Pandas & BeautifulSoup...', delay: 850 },
      { type: 'transform', text: '[TRANSFORM] Validação estrutural concluída: 0 nulos, 100% limpo', delay: 1050 },
      { type: 'ai', text: '[IA-EVAL] Indexando vetores de análise preditiva...', delay: 1250 },
      { type: 'success', text: '[LOAD] 2.480 linhas persistidas no PostgreSQL (aurora_db)', delay: 1450 },
      { type: 'metric', text: '⚡ Métricas: latência 14ms · uso de memória 38.4MB · exit code 0', delay: 1650 },
    ],
  },
  {
    id: 'semdp',
    name: 'semdp_audit.ts',
    lang: 'TypeScript',
    command: 'npx tsx scripts/auditFaltas.ts --aluno=Arthur',
    lines: [
      { type: 'info', text: '[AUDIT] Carregando grade curricular da FATEC Rio Claro...', delay: 200 },
      { type: 'extract', text: '[QUERY] Analisando 6 disciplinas do semestre vigente...', delay: 450 },
      { type: 'transform', text: '[CALC] Calculando margem de faltas regulamentares (limite: 25%)', delay: 750 },
      { type: 'success', text: '[STATUS] Engenharia de Software: 0% faltas [ZONA SEGURA]', delay: 1000 },
      { type: 'success', text: '[STATUS] Banco de Dados Relacional: 4% faltas [ZONA SEGURA]', delay: 1250 },
      { type: 'metric', text: '✔ Aluno aprovado por frequência: Risco de DP = 0.0%', delay: 1500 },
    ],
  },
  {
    id: 'ia',
    name: 'gemini_prompt.py',
    lang: 'Python/IA',
    command: 'python3 prompts/corretor_enem.py --redacao=amostra.txt',
    lines: [
      { type: 'info', text: '[IA] Carregando pesos e diretrizes de competências do INEP...', delay: 200 },
      { type: 'extract', text: '[IA] Analisando tese, argumentação e proposta de intervenção...', delay: 550 },
      { type: 'transform', text: '[IA] C1: 200 | C2: 200 | C3: 180 | C4: 200 | C5: 180', delay: 900 },
      { type: 'success', text: '⭐ Nota Estimada: 960/1000 — Proposta de intervenção robusta', delay: 1250 },
      { type: 'metric', text: '✔ Parecer gerado com sucesso em 1.12s via GPT-4o / Gemini API', delay: 1550 },
    ],
  },
];

export const CodeTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('etl');
  const [visibleCount, setVisibleCount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const currentScript = SCRIPTS.find((s) => s.id === activeTab) || SCRIPTS[0];

  // Run/Rerun animation on script change or restart
  useEffect(() => {
    setVisibleCount(0);
    setIsRunning(true);

    const timeouts: NodeJS.Timeout[] = [];

    currentScript.lines.forEach((line, index) => {
      const timeout = setTimeout(() => {
        setVisibleCount((prev) => Math.max(prev, index + 1));
        if (index === currentScript.lines.length - 1) {
          setIsRunning(false);
        }
      }, line.delay);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [activeTab, currentScript]);

  // Scroll to bottom when new line appears
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [visibleCount]);

  const handleRestart = () => {
    setVisibleCount(0);
    setIsRunning(true);
    const timeouts: NodeJS.Timeout[] = [];
    currentScript.lines.forEach((line, index) => {
      const timeout = setTimeout(() => {
        setVisibleCount((prev) => Math.max(prev, index + 1));
        if (index === currentScript.lines.length - 1) {
          setIsRunning(false);
        }
      }, line.delay);
      timeouts.push(timeout);
    });
  };

  const handleCopyLogs = () => {
    const output = [
      `$ ${currentScript.command}`,
      ...currentScript.lines.slice(0, visibleCount).map((l) => l.text),
    ].join('\n');
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderBadge = (type: string) => {
    switch (type) {
      case 'info':
        return <span className="text-slate-400 font-semibold">[INFO]</span>;
      case 'extract':
        return <span className="text-rose-400 font-semibold">[EXTRACT]</span>;
      case 'transform':
        return <span className="text-amber-400 font-semibold">[TRANSFORM]</span>;
      case 'ai':
        return <span className="text-indigo-400 font-semibold">[AI-MODEL]</span>;
      case 'success':
        return <span className="text-emerald-400 font-semibold">[SUCCESS]</span>;
      case 'metric':
        return <span className="text-cyan-400 font-semibold">[METRICS]</span>;
      default:
        return null;
    }
  };

  return (
    <div className="relative rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-800 bg-[#07090E] shadow-2xl flex flex-col h-full min-h-[380px] sm:min-h-[420px] transition-all">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/90 border-b border-slate-800/80">
        {/* macOS style control dots */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/85 hover:opacity-100 transition-opacity cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-amber-500/85 hover:opacity-100 transition-opacity cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/85 hover:opacity-100 transition-opacity cursor-pointer" />
        </div>

        {/* Center title */}
        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 truncate max-w-[220px] sm:max-w-none">
          <Terminal className="w-3.5 h-3.5 text-rose-500" />
          <span className="text-slate-300">arthur@fatec-rc:</span>
          <span className="text-rose-400">~/workspace</span>
        </div>

        {/* Quick controls */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handleRestart}
            title="Reiniciar execução"
            className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
            aria-label="Executar script novamente"
          >
            <RotateCcw className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
          </button>
          <button
            type="button"
            onClick={handleCopyLogs}
            title="Copiar logs do terminal"
            className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
            aria-label="Copiar logs do terminal"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Tabs Header */}
      <div className="flex items-center gap-1 px-3 pt-2 bg-slate-950/60 border-b border-slate-800/70 overflow-x-auto scrollbar-none">
        {SCRIPTS.map((script) => (
          <button
            key={script.id}
            type="button"
            onClick={() => setActiveTab(script.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-t-lg transition-colors whitespace-nowrap ${
              activeTab === script.id
                ? 'bg-[#07090E] text-rose-400 border-t-2 border-rose-500 border-x border-slate-800/80 font-medium'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
            }`}
          >
            <Code className="w-3 h-3 opacity-70" />
            <span>{script.name}</span>
          </button>
        ))}
        <div className="ml-auto pr-1 flex items-center gap-1 text-[11px] font-mono text-slate-500">
          <Activity className="w-3 h-3 text-rose-500 animate-pulse" />
          <span className="hidden sm:inline">
            {isRunning ? 'executando...' : 'idle (pronto)'}
          </span>
        </div>
      </div>

      {/* Terminal Screen Body */}
      <div className="flex-1 p-4 sm:p-5 font-mono text-xs sm:text-xs text-slate-300 overflow-y-auto space-y-2 select-text leading-relaxed">
        {/* Command line invocation */}
        <div className="flex items-start gap-2 text-slate-400 pb-1">
          <span className="text-rose-500 font-bold select-none">&gt;</span>
          <span className="text-slate-400 select-none">arthur@fatec:~$</span>
          <span className="text-slate-100 font-medium">{currentScript.command}</span>
        </div>

        {/* Dynamic streamed output lines */}
        {currentScript.lines.slice(0, visibleCount).map((line, idx) => (
          <div
            key={idx}
            className="flex items-start gap-2 pl-2 sm:pl-3 animate-in fade-in duration-150"
          >
            <span className="text-slate-600 select-none text-[11px] tabular-nums pt-0.5">
              {(idx + 1).toString().padStart(2, '0')}
            </span>
            <div className="flex-1 break-all">
              {line.type === 'metric' ? (
                <span className="text-amber-300 font-medium bg-amber-950/30 px-1.5 py-0.5 rounded border border-amber-800/40">
                  {line.text}
                </span>
              ) : line.type === 'success' ? (
                <span className="text-emerald-300 font-medium">
                  {line.text}
                </span>
              ) : line.type === 'ai' ? (
                <span className="text-indigo-300">
                  {line.text}
                </span>
              ) : line.type === 'transform' ? (
                <span className="text-slate-200">
                  {line.text}
                </span>
              ) : (
                <span className="text-slate-300">
                  {line.text}
                </span>
              )}
            </div>
          </div>
        ))}

        {/* Blinking prompt cursor */}
        <div className="flex items-center gap-2 pt-2 text-slate-400 pl-1">
          <span className="text-rose-500 font-bold select-none">&gt;</span>
          <span className="text-slate-500 select-none">arthur@fatec:~$</span>
          {isRunning ? (
            <span className="inline-block w-2 h-4 bg-rose-500 animate-pulse" />
          ) : (
            <span className="inline-block w-2 h-4 bg-rose-500 animate-pulse" />
          )}
        </div>

        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Footer Bar */}
      <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-slate-300">Py3.12 / Node v22</span>
          <span className="text-slate-600">|</span>
          <span className="text-rose-400">FATEC Rio Claro</span>
        </div>

        <button
          type="button"
          onClick={handleRestart}
          className="text-xs text-rose-400 hover:text-rose-300 transition-colors flex items-center gap-1"
        >
          <Play className="w-3 h-3" />
          <span>Executar</span>
        </button>
      </div>
    </div>
  );
};
