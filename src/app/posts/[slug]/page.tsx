import MarkdownViewer from '@/components/posts/MarkdownViewer';
import { getPostData } from '@/service/posts';
import Image from 'next/image';
import React from 'react';
import { AiTwotoneCalendar } from 'react-icons/ai';

interface Props {
  params: {
    slug: string;
  };
}

const PostDetail = async ({ params: { slug } }: Props) => {
  const { title, description, date, path, content } = await getPostData(slug);
  return (
    <article className='rounded-2xl overflow-hidden bg-gray-100 shadow m-4 '>
      <Image
        className='w-full md:w-3/4 mx-auto md:mt-10 rounded-2xl'
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <section className='flex flex-col p-4'>
        <div className='flex self-end items-center text-sky-600 gap-1 font-semibold'>
          <AiTwotoneCalendar />
          <p>{date.toString()}</p>
        </div>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='text-xl font-bold'>{description}</p>
        <div className='border-b-4 border-gray-300 my-5' />
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
};

export default PostDetail;
