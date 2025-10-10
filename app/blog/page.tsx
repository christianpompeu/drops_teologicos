import ReadingPlanner from "@/components/planners/ReadingPlanner";
// import { Separator } from "@/components/ui/separator"; // Exemplo de uso de shadcn
import { Separator } from "@/components/ui/separator"; // Exemplo de uso de shadcn

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-12">
      <div className="w-full max-w-5xl">
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Conteúdos e Ferramentas Teológicas
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Aqui você encontrará artigos e recursos práticos.
        </p>

        <Separator className="my-6" />

        {/* Integração do Componente Planner */}
        <ReadingPlanner />
      </div>
    </main>
  );
}
