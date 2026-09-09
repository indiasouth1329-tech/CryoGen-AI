import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Compass } from 'lucide-react';

export interface PageNavRoute {
  path: string;
  label: string;
  step: string;
  description: string;
}

interface PageNavigationProps {
  previous?: PageNavRoute;
  next?: PageNavRoute;
}

export const PageNavigation: React.FC<PageNavigationProps> = ({ previous, next }) => {
  return (
    <nav 
      aria-label="Chapter Navigation"
      className="mt-16 pt-10 border-t border-slate-800/80 max-w-7xl mx-auto"
    >
      <div className="flex items-center gap-2 mb-4 text-[11px] font-mono uppercase tracking-widest text-slate-400">
        <Compass className="w-3.5 h-3.5 text-cyan-400" />
        <span>CryoGen AI Architecture Journey</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Previous Page Link */}
        {previous ? (
          <Link
            to={previous.path}
            className="group p-5 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-cyan-800/60 transition-all flex flex-col justify-between cursor-pointer"
          >
            <div className="flex items-center gap-2 text-slate-400 text-xs font-mono group-hover:text-cyan-400 transition-colors">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Previous · Chapter {previous.step}</span>
            </div>
            <div className="mt-2">
              <div className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors">
                {previous.label}
              </div>
              <div className="text-xs text-slate-400 mt-1 line-clamp-1">
                {previous.description}
              </div>
            </div>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}

        {/* Next Page Link */}
        {next ? (
          <Link
            to={next.path}
            className="group p-5 rounded-xl bg-gradient-to-br from-slate-900/70 to-cyan-950/20 hover:from-slate-900 hover:to-cyan-950/40 border border-slate-800 hover:border-cyan-600/70 transition-all flex flex-col justify-between cursor-pointer text-right"
          >
            <div className="flex items-center justify-end gap-2 text-cyan-400 text-xs font-mono group-hover:text-cyan-300 transition-colors">
              <span>Next · Chapter {next.step}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
            <div className="mt-2">
              <div className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors">
                {next.label}
              </div>
              <div className="text-xs text-slate-400 mt-1 line-clamp-1">
                {next.description}
              </div>
            </div>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}
      </div>
    </nav>
  );
};
