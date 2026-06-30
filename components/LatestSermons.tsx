import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockSermons } from "@/lib/data/mocks";
import { Play, Calendar, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LatestSermons() {
  const featuredSermon = mockSermons[0];
  const sideSermons = mockSermons.slice(1, 3);

  return (
    <section className="container mx-auto px-6 py-16 max-w-7xl">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-2">Últimos Sermões</h2>
          <p className="text-muted-foreground text-lg">Mensagens recentes da nossa pastoral.</p>
        </div>
        <Link href="/blog" className="text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center gap-1 mb-1">
          Ver todos <span aria-hidden="true" className="text-base leading-none">&gt;</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Featured Sermon */}
        <div className="lg:col-span-2">
          <Card className="relative overflow-hidden h-full min-h-[450px] border-0 rounded-2xl group cursor-pointer glass-panel-elevated shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Background Image / Gradient */}
            <div className="absolute inset-0 z-0">
               <Image 
                  src={featuredSermon.imageUrl} 
                  alt={featuredSermon.title} 
                  fill 
                  className="object-cover opacity-60 dark:opacity-40 group-hover:scale-105 transition-transform duration-700" 
                />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/10 dark:from-background dark:via-background/80 dark:to-transparent" />
            </div>
            
            <CardContent className="relative z-10 h-full flex flex-col justify-end p-8">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-0 backdrop-blur-md rounded-full px-3 py-1">
                  Série Principal
                </Badge>
                <div className="flex items-center text-sm text-slate-300 dark:text-muted-foreground gap-1.5 font-medium">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(featuredSermon.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).replace(' de ', ' ').replace('.', ',')}
                  </span>
                </div>
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                {featuredSermon.title}
              </h3>
              <p className="text-slate-300 dark:text-slate-400 max-w-2xl mb-8 text-lg line-clamp-2">
                {featuredSermon.excerpt}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-inner">
                  <User className="w-6 h-6 text-slate-300" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{featuredSermon.speaker}</p>
                  <p className="text-slate-400 text-xs font-medium">Pastor Presidente</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Side Sermons */}
        <div className="flex flex-col gap-6">
          {sideSermons.map((sermon, index) => (
            <Card key={sermon.id} className="relative overflow-hidden flex-1 border-0 rounded-2xl group cursor-pointer glass-panel shadow-md hover:shadow-lg transition-all duration-300 hover:glass-panel-elevated">
              <CardContent className="p-6 h-full flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <Badge variant="secondary" className="bg-secondary/50 dark:bg-secondary/30 backdrop-blur-md border-0 text-secondary-foreground rounded-full px-3">
                    {index === 0 ? "Estudo" : "Sermão"}
                  </Badge>
                  <div className="w-10 h-10 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 shadow-sm">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {sermon.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                  {sermon.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto font-medium">
                  <span>{sermon.speaker}</span>
                  <span>
                    {new Date(sermon.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).replace(' de ', ' ').replace('.', ',')}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
