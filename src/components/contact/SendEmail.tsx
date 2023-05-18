import React from 'react';

const SendEmail = () => {
  return (
    <div className='w-1/3'>
      <h2 className='text-3xl font-bold my-12 text-center'>
        Or send me an email
      </h2>
      <form
        action='submit'
        className='flex flex-col bg-[#344156] p-4 text-white gap-2 rounded-xl'
      >
        <p>Your Email</p>
        <input type='text' />
        <p>Subject</p>
        <input type='text' />
        <p>Message</p>
        <textarea className='h-40' />
        <button
          type='submit'
          className='bg-yellow-500 font-bold  p-1 rounded-md w-full'
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendEmail;
