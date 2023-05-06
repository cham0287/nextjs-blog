import { Post } from '@/service/posts';
import React from 'react';
import PostCard from './PostCard';

interface Props {
  posts: Post[];
}

const PostsGrid = ({ posts }: Props) => {
  return (
    <ul className='flex flex-wrap'>
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostsGrid;
