import MarkdownViewer from '@/components/posts/MarkdownViewer';
import { getPostData } from '@/service/posts';
import React from 'react';

interface Props {
  params: {
    slug: string;
  };
}

const PostDetail = async ({ params: { slug } }: Props) => {
  const post = await getPostData(slug);
  const { title, content } = post;
  return (
    <div>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <MarkdownViewer content={content} />
    </div>
  );
};

export default PostDetail;
