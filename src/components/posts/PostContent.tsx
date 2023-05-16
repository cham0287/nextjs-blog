import { PostData } from '@/types/types';
import React from 'react';
import { AiTwotoneCalendar } from 'react-icons/ai';
import MarkdownViewer from './MarkdownViewer';

interface PostContentProps {
  post: PostData;
}

const PostContent = ({ post }: PostContentProps) => {
  const { title, description, date, content } = post;

  return (
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
  );
};

export default PostContent;
