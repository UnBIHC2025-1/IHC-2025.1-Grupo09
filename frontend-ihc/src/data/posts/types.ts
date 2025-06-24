export interface Paragraph {
  subtitle: string;
  content: string;
}

export interface Post {
  name: string;
  description: string;
  slug: string;
  readTime: number;
  date: string;
  image: string;
  paragraphs: Paragraph[];
  alt: string;
}
