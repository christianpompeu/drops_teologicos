import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-panel">
          <CardHeader>
            <CardTitle className="text-muted-foreground text-sm font-medium uppercase tracking-wider">Total de Alunos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary">1,248</div>
            <p className="text-xs text-muted-foreground mt-2">+12% em relação ao mês passado</p>
          </CardContent>
        </Card>

        <Card className="glass-panel">
          <CardHeader>
            <CardTitle className="text-muted-foreground text-sm font-medium uppercase tracking-wider">Sermões Publicados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary">156</div>
            <p className="text-xs text-muted-foreground mt-2">4 novos esta semana</p>
          </CardContent>
        </Card>

        <Card className="glass-panel">
          <CardHeader>
            <CardTitle className="text-muted-foreground text-sm font-medium uppercase tracking-wider">Média de Acesso</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary">4.2k</div>
            <p className="text-xs text-muted-foreground mt-2">Visualizações semanais</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 glass-panel p-8 rounded-xl">
        <h2 className="text-xl font-bold mb-4">Atividade Recente</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
              <div>
                <p className="font-medium text-foreground">Novo aluno registrado</p>
                <p className="text-sm text-muted-foreground">João Silva concluiu o cadastro no curso Básico.</p>
              </div>
              <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">Há {i} hora(s)</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
