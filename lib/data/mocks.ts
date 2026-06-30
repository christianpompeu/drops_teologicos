export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  duration: string;
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  category: string;
}

export const mockSermons: Sermon[] = [
  {
    id: "1",
    title: "A Luz na Escuridão",
    speaker: "Pr. Marcos Silva",
    date: "2026-06-21",
    excerpt: "Descobrindo a esperança em tempos de provação e como a fé nos guia quando tudo parece perdido.",
    imageUrl: "https://images.unsplash.com/photo-1507692049590-b9df70138cd3?q=80&w=1200&auto=format&fit=crop", // Cross on hill
    duration: "45:20"
  },
  {
    id: "2",
    title: "Fundamentos da Fé",
    speaker: "Pra. Ana Julia",
    date: "2026-06-14",
    excerpt: "Revisitando as bases do cristianismo para um relacionamento mais profundo com Deus.",
    imageUrl: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=600&auto=format&fit=crop", // Open bible
    duration: "38:15"
  },
  {
    id: "3",
    title: "O Propósito do Deserto",
    speaker: "Pr. João Cândido",
    date: "2026-06-07",
    excerpt: "Compreendendo por que somos levados ao deserto e como florescer na sequidão.",
    imageUrl: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=600&auto=format&fit=crop", // Desert landscape
    duration: "50:00"
  }
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Por que ainda precisamos de comunidade?",
    author: "Equipe Editorial",
    date: "2026-06-25",
    excerpt: "Na era digital, a verdadeira conexão nunca foi tão necessária e, ao mesmo tempo, tão rara. Descubra o valor bíblico de estarmos juntos.",
    imageUrl: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=600&auto=format&fit=crop", // People together in church
    category: "Comunhão"
  },
  {
    id: "2",
    title: "Meditando nas Escrituras Diariamente",
    author: "Pr. Marcos Silva",
    date: "2026-06-18",
    excerpt: "Dicas práticas para manter uma rotina saudável e constante de leitura e meditação na Palavra.",
    imageUrl: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=600&auto=format&fit=crop", // Morning coffee and bible
    category: "Devocional"
  },
  {
    id: "3",
    title: "Lidando com a Ansiedade Segundo a Bíblia",
    author: "Pra. Ana Julia",
    date: "2026-06-10",
    excerpt: "Um olhar teológico e prático sobre as preocupações modernas através da lente da confiança em Cristo.",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop", // Peaceful nature
    category: "Vida Cristã"
  }
];
