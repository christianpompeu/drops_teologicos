import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden min-h-[90vh] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2000&auto=format&fit=crop")', // St. Patrick's Cathedral gothic interior
        }}
      >
        {/* Responsive glass gradient overlay with highly visible dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#e0f2fe]/60 via-[#f8fafc]/85 to-[#f8fafc] dark:from-[#1b2a4a]/75 dark:via-[#0c1224]/92 dark:to-[#05070f] backdrop-blur-[3px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
        {/* Subtitle */}
        <p className="text-xs md:text-sm font-bold tracking-[0.25em] text-primary uppercase mb-6 font-sans">
          Bem-vindo ao Drops Teológicos
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight text-slate-950 dark:text-white font-sans leading-tight">
          Encontre luz na <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] to-[#7c3aed] dark:from-[#7dd3fc] dark:to-[#c8a0f0] drop-shadow-[0_0_20px_rgba(125,211,252,0.15)]">profundeza</span>
        </h1>
        
        {/* Description */}
        <p className="text-base md:text-xl text-slate-600 dark:text-[#a0b4c4] mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
          Um espaço de acolhimento e ensino. Descubra uma comunidade pautada na verdade, na graça e no conhecimento teológico.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="w-full sm:w-auto rounded-full bg-gradient-to-r from-[#e0f2fe]/45 to-[#f3e8ff]/45 dark:from-[#ffffff]/5 dark:to-[#ffffff]/5 text-primary dark:text-[#7dd3fc] border border-primary/20 dark:border-white/10 px-8 py-6 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.05] active:scale-[0.95] cursor-pointer shadow-[0_4px_12px_rgba(10,14,26,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_25px_rgba(2,132,199,0.15)] dark:hover:shadow-[0_10px_25px_rgba(125,211,252,0.2)] hover:border-primary/40 dark:hover:border-white/20 backdrop-blur-md"
          >
            <a href="/blog" className="flex items-center">
              Assista ao Culto <span className="ml-2 text-xs">▸</span>
            </a>
          </Button>
          
          <Button 
            size="lg" 
            className="w-full sm:w-auto rounded-full bg-gradient-to-r from-slate-900 to-[#1e1b4b] dark:from-[#0a0e1a] dark:to-[#1e152e] text-white border border-border/50 dark:border-white/10 px-8 py-6 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.05] active:scale-[0.95] cursor-pointer shadow-[0_4px_12px_rgba(10,14,26,0.1)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_25px_rgba(2,132,199,0.12)] dark:hover:shadow-[0_10px_25px_rgba(125,211,252,0.15)] hover:border-border dark:hover:border-white/20 backdrop-blur-md"
          >
            <a href="/admin" className="flex items-center">
              Conheça o CTC <span className="ml-2 text-xs">➔</span>
            </a>
          </Button>
        </div>
      </div>

      {/* Ambient glows to replicate target screen style - heightened opacity and pulse for depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#7dd3fc]/20 to-[#c8a0f0]/15 dark:from-[#7dd3fc]/30 dark:to-[#c8a0f0]/20 rounded-full blur-[130px] -z-10 pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#c8a0f0]/10 dark:bg-[#c8a0f0]/15 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </div>
  );
}
