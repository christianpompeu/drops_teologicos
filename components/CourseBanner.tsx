import { GraduationCap, BookOpen, Calendar, Laptop, Award } from "lucide-react";
import Image from "next/image";

export default function CourseBanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative blur blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-sky-400/5 rounded-[100%] blur-[80px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-panel-elevated rounded-2xl p-1 relative overflow-hidden">
          
          {/* Right side background image with gradient mask */}
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 hidden lg:block">
            <div 
              className="w-full h-full bg-cover bg-center [mask-image:linear-gradient(to_left,black,transparent)]" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA4b_c-lt8mO2kwKW5IuLEUQuV6-I4a4neXwfKvqggc4n5Kx3FxEXky9CklSSVTxV5PByFdh8Biqek6QzDDHFN2KuYJkp1BgV23AKsZldneoo5Ntb-_Ugsbg6fR_iv3_oHkDrbHiBhQsJjzlJUYqyP5PIsbUsNiudv8-z4zgF6alvbdr-ELcTEJ9_w3hFchUe7EtFGKKyNmMZp1tDzzodPd2Fgu6fPaL1KxY2YiitSeLzOzFi4K2bwK9f9_Fx6Lnf8AczhhpPdiUC0')" }}
            ></div>
          </div>
          
          {/* Left content card */}
          <div className="bg-[#0a0e1a]/80 backdrop-blur-sm rounded-xl p-8 md:p-12 lg:w-2/3 relative z-10">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-400/10 text-purple-400 border border-purple-400/20 text-xs font-bold mb-6">
              <GraduationCap className="w-4 h-4" />
              Inscrições Abertas
            </div>
            
            <h2 className="text-4xl font-bold text-slate-100 mb-4 tracking-tight">
              Curso de Teologia <span className="text-sky-400">(CTC)</span>
            </h2>
            
            <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
              Aprofunde suas raízes. O Curso de Teologia da Glacier foi desenhado para equipar os santos com sólida doutrina, história da igreja e apologética, preparando você para defender a fé com mansidão e temor.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-sky-400/10 flex items-center justify-center text-sky-400">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-slate-100">Material Didático Incluso</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-sky-400/10 flex items-center justify-center text-sky-400">
                  <Calendar className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-slate-100">Duração de 2 Anos</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-sky-400/10 flex items-center justify-center text-sky-400">
                  <Laptop className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-slate-100">Modalidade Híbrida</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-sky-400/10 flex items-center justify-center text-sky-400">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-slate-100">Certificado de Conclusão</span>
              </div>
            </div>
            
            <button className="bg-sky-400/10 text-sky-400 border border-sky-400/30 px-8 py-3 rounded-lg font-semibold hover:bg-sky-400/20 transition-all hover:shadow-[0_0_20px_rgba(125,211,252,0.2)] hover:border-sky-400/50 cursor-pointer">
              Saber Mais e Inscrever-se
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
}
