// src/types.ts
export interface Tool {
  id: string;
  title: string;
  image: string;
  link: string;
  category: string;
  tags: string[];
  description: string;
  featured?: boolean; // The '?' makes this property optional
}