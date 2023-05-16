import PostContent from '@/components/posts/PostContent';
import { getPostData } from '@/service/posts';
import Image from 'next/image';
import React from 'react';

interface Props {
  params: {
    slug: string;
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
      <div className='bg-black flex'>
        <div className='w-1/2 '>
          <Image
            className='w-full'
            src={`/images/posts/${path}.png`}
            alt={title}
            width={760}
            height={420}
          />
        </div>
      </div>
      {
        //NOTE: 이 부분에 AdjacentPostCard가 와야함.
        //Image 컴포넌트로 만들고 position relative로 버튼 아이콘을 이미지 위로 띄워야한다
      }
    </article>
  );
};

export default PostDetail;
