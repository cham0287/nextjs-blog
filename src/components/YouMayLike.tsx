import { getNonFeaturedPosts } from '@/service/posts';
import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import PostCard from './PostCard';
import MultiCarousel from './MultiCarousel';

const YouMayLike = async () => {
  const posts = await getNonFeaturedPosts();

  return (
    <section className='w-2/3 mx-auto'>
      <h2 className='text-xl font-bold mt-4'>You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
};

export default YouMayLike;
