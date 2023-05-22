import React from 'react';

export interface BannerType {
  message: string;
  state: 'success' | 'error';
}

const Banner = ({ message, state }: BannerType) => {
  const isSuccess = state === 'success';
  const icon = isSuccess ? '✅' : '🔥';
  return (
    <p
      className={`p-2 rounded-xl w-full text-center ${
        isSuccess ? 'bg-green-300' : 'bg-red-300'
      }`}
    >
      {icon}&nbsp;{message}
    </p>
  );
};

export default Banner;
