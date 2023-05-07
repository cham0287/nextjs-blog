import FeaturedPosts from '@/components/FeaturedPosts';
import Hero from '@/components/Hero';
import YouMayLike from '@/components/YouMayLike';
import React from 'react';

export default async function HomePage() {
  return (
    <>
      <Hero />
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
      {/* @ts-expect-error Server Component */}
      <YouMayLike />
    </>
  );
}
