import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, LogOut, Home } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public props: Props;

  constructor(props: Props) {
    super(props);
    this.props = props;
  }

  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error captured by RMT ErrorBoundary:", error, errorInfo);
  }

  private handleReset = () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
      window.location.reload();
    } catch (e) {
      window.location.reload();
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div 
          id="error-boundary-screen"
          className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 md:p-12 selection:bg-[#FFB800] selection:text-black"
        >
          {/* Decorative ambient borders */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E50012] via-[#FFB800] to-[#E50012] opacity-80" />
          
          <div className="max-w-2xl w-full bg-[#111111] border-2 border-[#E50012]/30 p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
            {/* Corner Warning Badge */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rotate-45 translate-x-16 -translate-y-16 border-b border-red-500/20" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-sm bg-[#E50012]/10 border border-[#E50012] flex items-center justify-center text-[#E50012]">
                  <AlertTriangle size={36} />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#FFB800] uppercase tracking-widest font-semibold block mb-0.5">
                    HSE Alert: System Interrupted
                  </span>
                  <h2 className="text-2xl md:text-3xl font-heading font-extrabold tracking-tight">
                    Operational Pipeline Disrupted
                  </h2>
                </div>
              </div>
              
              <div className="h-px bg-white/10" />

              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                An unexpected engineering sequence crash was detected in the UI engine. To protect system integrity, execution has been paused. No data has been lost.
              </p>

              {/* Error Details */}
              <div className="bg-black/40 border border-white/5 p-4 rounded-sm font-mono text-xs text-red-400 overflow-x-auto space-y-2">
                <div className="text-gray-500 uppercase tracking-wider text-[10px] font-bold">Error telemetry log:</div>
                <div className="break-all">{this.state.error?.toString() || 'Unknown Critical Exception'}</div>
              </div>

              {/* Suggestions */}
              <div className="space-y-2">
                <span className="text-xs uppercase font-mono tracking-widest text-[#FFB800] font-bold">
                  Recommended Recovery Steps:
                </span>
                <ul className="text-xs text-gray-400 space-y-1.5 list-disc pl-5">
                  <li>Check your local internet connection reliability.</li>
                  <li>Click **Reload Pipeline** below to dynamically sync with main server bundles.</li>
                  <li>In case of stale page variables, tap **Clear Workspace Registry** to purge temporary state.</li>
                </ul>
              </div>

              <div className="h-px bg-white/10" />

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <button
                  type="button"
                  id="btn-error-reload"
                  onClick={() => window.location.reload()}
                  className="flex items-center justify-center gap-2 bg-[#E50012] hover:bg-[#E50012]/90 text-white font-bold text-xs uppercase tracking-wider py-4 px-4 transition-all"
                >
                  <RefreshCw size={14} className="animate-spin" />
                  Reload Pipeline
                </button>
                <button
                  type="button"
                  id="btn-error-reset"
                  onClick={this.handleReset}
                  className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-white/20 text-gray-300 hover:text-white font-bold text-xs uppercase tracking-wider py-4 px-4 transition-all"
                >
                  <LogOut size={14} />
                  Clear Registry
                </button>
                <button
                  type="button"
                  id="btn-error-home"
                  onClick={() => { window.location.href = '/'; }}
                  className="flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-[#252525] border border-white/5 text-gray-300 hover:text-white font-bold text-xs uppercase tracking-wider py-4 px-4 transition-all"
                >
                  <Home size={14} />
                  Home Lobby
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
