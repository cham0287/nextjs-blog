import React from 'react';
import PostsGrid from '../common/PostsGrid';
import { getFeaturedPosts } from '@/service/posts';

const FeaturedPosts = async () => {
  const posts = await getFeaturedPosts();

  return (
    <section className='w-2/3 mx-auto'>
      <h2 className='text-xl font-bold'>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
