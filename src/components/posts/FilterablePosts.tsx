'use client';
import { Post } from '@/types/types';
import React, { useEffect, useState } from 'react';
import PostCard from '../common/PostCard';
import PostsGrid from '../common/PostsGrid';
import Categories from './Categories';

interface Props {
  posts: Post[];
  categories: string[];
}

const ALL_POSTS = 'All Posts';

const FilterablePosts = ({ posts, categories }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(ALL_POSTS);
  const filteredPosts =
    selectedCategory === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <section className='flex'>
      <PostsGrid posts={filteredPosts} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selectedCategory={selectedCategory}
        onClick={setSelectedCategory}
      />
    </section>
  );
};

export default FilterablePosts;
