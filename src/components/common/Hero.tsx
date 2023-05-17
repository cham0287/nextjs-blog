import React from 'react';
import profileImage from '../../../public/images/profile.png';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='flex flex-col items-center'>
      <Image
        src={profileImage}
        alt='profile image'
        className='rounded-full'
        width={150}
        height={150}
        priority
      />
      <h2 className='text-2xl font-bold'>{"Hi, I'm DK"}</h2>
      <h3 className='font-semibold'>Junior Front-end Engineer</h3>
      <p>{'"개발은 너무 재밌엉"'}</p>
      <Link href='/contact'>
        <button className='rounded-full bg-yellow-300 px-4 py-2 font-bold mt-2'>
          Contact me
        </button>
      </Link>
    </section>
  );
};

export default Hero;
