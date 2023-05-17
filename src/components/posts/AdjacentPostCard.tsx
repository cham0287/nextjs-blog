import { Post } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface AdjacentPostCardProps {
  post: Post;
  position: 'left' | 'right';
}

const ICON_CLASS =
  'text-5xl m-4 text-yellow-300 transition-all group-hover:text-6xl';

const AdjacentPostCard = ({
  post: { path, title, description },
  position,
}: AdjacentPostCardProps) => {
  return (
    <Link
      className='group w-full relative bg-black max-h-56'
      href={`/posts/${path}`}
    >
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={320}
        height={320}
        className='w-full opacity-40'
      />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center text-white px-8'>
        {position === 'left' && <FaArrowLeft className={ICON_CLASS} />}
        <div className='w-full text-center'>
          <h3 className='text-3xl font-bold'>{title}</h3>
          <p className='font-bold'>{description}</p>
        </div>
        {position === 'right' && <FaArrowRight className={ICON_CLASS} />}
      </div>
    </Link>
  );
};

export default AdjacentPostCard;
