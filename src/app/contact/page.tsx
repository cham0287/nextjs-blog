import React from 'react';
import { BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';
import SendEmailForm from '@/components/contact/SendEmailForm';

const Contact = () => {
  return (
    <div className='flex flex-col items-center'>
      <p className='text-3xl font-bold'>Contact Me</p>
      <p className='my-2'>crtmt97@gmail.com</p>
      <p className='flex items-center gap-4 text-4xl'>
        <BsGithub />
        <BsLinkedin />
        <BsYoutube />
      </p>
      <SendEmailForm />
    </div>
  );
};

export default Contact;
