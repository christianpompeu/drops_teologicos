export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar - Glass panel */}
      <aside className="w-64 glass-panel border-r border-y-0 border-l-0 hidden md:block">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-primary mb-8">Admin CTC</h2>
          <nav className="space-y-2">
            <a href="/admin" className="block px-4 py-2 rounded-md hover:bg-primary/10 text-foreground transition-colors">
              Dashboard
            </a>
            <a href="/admin/students" className="block px-4 py-2 rounded-md hover:bg-primary/10 text-foreground transition-colors">
              Alunos
            </a>
            <a href="/blog" className="block px-4 py-2 rounded-md hover:bg-primary/10 text-muted-foreground transition-colors">
              Ir para o Blog
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
