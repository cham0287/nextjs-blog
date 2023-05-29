import AdjacentPostCard from '@/components/posts/AdjacentPostCard';
import PostContent from '@/components/posts/PostContent';
import { getPostData } from '@/service/posts';
import Image from 'next/image';
import React from 'react';

interface PostDetailProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params: { slug },
}: PostDetailProps): Promise<Metadata> {
  const { title, description } = await getPostData(slug);
  return {
    title,
    description,
  };
}

const PostDetail = async ({ params: { slug } }: Props) => {
  const post = await getPostData(slug);
  const { title, path, prevPost, nextPost } = post;
  return (
    <article className='rounded-2xl overflow-hidden bg-gray-100 shadow m-4 '>
      <Image
        className='w-full md:w-3/4 mx-auto md:mt-10 rounded-2xl'
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <div className='flex shadow-md'>
        {prevPost && <AdjacentPostCard post={prevPost} position='left' />}
        {nextPost && <AdjacentPostCard post={nextPost} position='right' />}
      </div>
    </article>
  );
};

export default PostDetail;
