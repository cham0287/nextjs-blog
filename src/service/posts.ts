import { Post, PostData } from '@/types/types';
import { readFile } from 'fs/promises';
import path from 'path';

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => post.featured));
}
export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => !post.featured));
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
  const posts = await getAllPosts();
  const post = posts.find((post) => post.path === fileName);
  if (!post) throw new Error('Post not found');
  const postIndex = posts.indexOf(post);
  const nextPost = postIndex > 0 ? posts[postIndex - 1] : null;
  const prevPost = postIndex < posts.length ? posts[postIndex + 1] : null;

  const content = await readFile(filePath, 'utf-8');
  return { ...post, prevPost, nextPost, content };
}
