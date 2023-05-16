export interface Post {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
}

export interface PostData extends Post {
  prevPost: Post | null;
  nextPost: Post | null;
  content: string;
}
