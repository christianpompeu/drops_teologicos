import { mockBlogPosts, mockSermons } from "@/lib/data/mocks";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BlogAndSermonsPage() {
  return (
    <div className="container mx-auto py-12 px-4 space-y-16">
      <section>
        <h1 className="text-4xl font-bold mb-8">Sermões Recentes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockSermons.map((sermon) => (
            <Card key={sermon.id} className="glass-panel overflow-hidden border-0">
              <div 
                className="h-48 w-full bg-cover bg-center" 
                style={{ backgroundImage: `url(${sermon.imageUrl})` }}
              />
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline" className="text-primary border-primary/20">{sermon.duration}</Badge>
                  <span className="text-xs text-muted-foreground">{sermon.date}</span>
                </div>
                <CardTitle className="text-xl">{sermon.title}</CardTitle>
                <CardDescription className="text-primary">{sermon.speaker}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{sermon.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h1 className="text-4xl font-bold mb-8">Últimas Postagens</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockBlogPosts.map((post) => (
            <Card key={post.id} className="glass-panel overflow-hidden border-0">
              <div 
                className="h-48 w-full bg-cover bg-center" 
                style={{ backgroundImage: `url(${post.imageUrl})` }}
              />
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">{post.category}</Badge>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>Por {post.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
