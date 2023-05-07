import React from 'react';
import PostCard from './PostCard';
import { Post } from '@/types/types';

interface Props {
  posts: Post[];
}

const PostsGrid = ({ posts }: Props) => {
  return (
    <ul className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostsGrid;
