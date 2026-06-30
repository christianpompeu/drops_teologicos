import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminStudentsPage() {
  const students = [
    { id: 1, name: "Ana Beatriz", email: "ana.b@example.com", status: "Ativo", course: "Teologia Básica" },
    { id: 2, name: "Carlos Eduardo", email: "carlos.e@example.com", status: "Ativo", course: "Aprofundamento" },
    { id: 3, name: "Fernanda Lima", email: "fernanda.l@example.com", status: "Inativo", course: "Liderança" },
    { id: 4, name: "Roberto Santos", email: "roberto.s@example.com", status: "Ativo", course: "Teologia Básica" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gerenciamento de Alunos</h1>
        <Button className="bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30">
          Adicionar Aluno
        </Button>
      </div>

      <Card className="glass-panel-elevated">
        <CardHeader>
          <CardTitle>Todos os Alunos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-background/50 border-b border-border">
                <tr>
                  <th className="px-6 py-4 font-medium">Nome</th>
                  <th className="px-6 py-4 font-medium">Email</th>
                  <th className="px-6 py-4 font-medium">Curso</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-b border-border/50 hover:bg-white/5 dark:hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">{student.name}</td>
                    <td className="px-6 py-4 text-muted-foreground">{student.email}</td>
                    <td className="px-6 py-4">{student.course}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs ${student.status === "Ativo" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 hover:bg-primary/10">Editar</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
