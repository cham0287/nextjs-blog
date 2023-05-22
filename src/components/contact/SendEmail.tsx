'use client';
import React from 'react';
import { useState } from 'react';
import Banner, { BannerType } from './Banner';

interface Form {
  from: string;
  subject: string;
  message: string;
}

const SendEmail = () => {
  const [form, setForm] = useState<Form>({
    from: '',
    subject: '',
    message: '',
  });
  const [banner, setBanner] = useState<BannerType | null>(null);
  const onSubmitEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm({ from: '', subject: '', message: '' });
    setBanner({ message: '메일 전송 성공!', state: 'success' });
    setTimeout(() => {
      setBanner(null);
    }, 3000);
  };

  const onChangeFormInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className='w-1/3 text-black max-w-md'>
      <h2 className='text-3xl font-bold my-12 text-center'>
        Or send me an email
      </h2>
      {banner && <Banner {...banner} />}
      <form
        onSubmit={onSubmitEmail}
        action='submit'
        className='flex flex-col bg-[#344156] p-4 gap-2 rounded-xl'
      >
        <label htmlFor='from'>Your Email</label>
        <input
          type='text'
          className='px-1'
          id='from'
          name='from'
          required
          autoFocus
          value={form.from}
          onChange={onChangeFormInput}
        />
        <label htmlFor='subject'>Subject</label>
        <input
          type='text'
          className='px-1'
          id='subject'
          name='subject'
          required
          autoFocus
          value={form.subject}
          onChange={onChangeFormInput}
        />
        <label htmlFor='message'>Message</label>
        <textarea
          className='h-40 px-2'
          id='message'
          name='message'
          required
          autoFocus
          value={form.message}
          onChange={onChangeFormInput}
        />
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
