import { mockSermons } from "@/lib/data/mocks";
import { PlayCircle, Calendar, User, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LatestSermons() {
  const featuredSermon = mockSermons[0];
  const sideSermons = mockSermons.slice(1, 3);

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 relative" id="sermoes">
      <div className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-100 mb-2">Últimos Sermões</h2>
          <p className="text-slate-400">Mensagens recentes da nossa pastoral.</p>
        </div>
        <Link 
          href="/blog" 
          className="text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-1 text-sm font-semibold"
        >
          Ver todos <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Highlight Card */}
        <article className="glass-panel-elevated md:col-span-2 rounded-xl overflow-hidden group cursor-pointer hover:border-sky-400/30 transition-colors flex flex-col justify-end min-h-[400px] relative">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-500"
              style={{ backgroundImage: `url('${featuredSermon.imageUrl}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/80 to-transparent" />
          </div>
          
          <div className="relative z-10 p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-sky-400/20 text-sky-400 text-xs font-bold px-3 py-1 rounded-full border border-sky-400/10">
                Série Principal
              </span>
              <span className="text-slate-400 text-sm flex items-center gap-1.5 font-medium">
                <Calendar className="w-3.5 h-3.5" /> 
                {new Date(featuredSermon.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).replace(' de ', ' ').replace('.', ',')}
              </span>
            </div>
            
            <h3 className="text-3xl font-bold text-slate-100 mb-2 group-hover:text-sky-400 transition-colors">
              {featuredSermon.title}
            </h3>
            <p className="text-slate-400 mb-6 max-w-xl">
              {featuredSermon.excerpt}
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#141c2e] border border-slate-700/50 flex items-center justify-center">
                <User className="w-5 h-5 text-slate-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-100">{featuredSermon.speaker}</p>
                <p className="text-xs text-slate-400">Pastor Presidente</p>
              </div>
            </div>
          </div>
        </article>

        {/* Standard Cards Stack */}
        <div className="flex flex-col gap-6">
          {sideSermons.map((sermon, index) => (
            <article 
              key={sermon.id} 
              className="glass-panel rounded-xl p-6 hover:bg-[#1a2438]/50 transition-colors cursor-pointer group flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  {index === 0 ? (
                    <span className="text-purple-400 text-xs font-bold px-2 py-1 rounded bg-purple-400/10 border border-purple-400/20">
                      Estudo
                    </span>
                  ) : (
                    <span className="text-sky-400 text-xs font-bold px-2 py-1 rounded bg-sky-400/10 border border-sky-400/20">
                      Sermão
                    </span>
                  )}
                  <button className="text-slate-400 hover:text-sky-400 transition-colors">
                    <PlayCircle className="w-6 h-6" />
                  </button>
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-sky-400 transition-colors">
                  {sermon.title}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                  {sermon.excerpt}
                </p>
              </div>
              <div className="flex justify-between items-center text-xs text-slate-400 font-medium">
                <span>{sermon.speaker}</span>
                <span>
                  {new Date(sermon.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).replace(' de ', ' ').replace('.', ',')}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
