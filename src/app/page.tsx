import FeaturedPosts from '@/components/home/FeaturedPosts';
import Hero from '@/components/common/Hero';
import YouMayLike from '@/components/home/YouMayLike';
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
