import FilterablePosts from '@/components/posts/FilterablePosts';
import PostCard from '@/components/common/PostCard';
import { getAllPosts } from '@/service/posts';
import React, { MouseEventHandler } from 'react';

const PostsPage = async () => {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilterablePosts posts={posts} categories={categories} />;
};

export default PostsPage;
