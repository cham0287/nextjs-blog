import FeaturedPosts from '@/components/FeaturedPosts';
import Hero from '@/components/Hero';
import React from 'react';

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
    </>
  );
}
