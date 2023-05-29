'use client';
import React from 'react';
import { useState } from 'react';
import Banner, { BannerType } from './Banner';
import { EmailForm } from '@/types/types';
import { sendContactEmail } from '@/service/contact';

const EMAIL_FORM_DEFAULT_DATA = {
  from: '',
  subject: '',
  message: '',
};

const SendEmailForm = () => {
  const [form, setForm] = useState<EmailForm>(EMAIL_FORM_DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerType | null>(null);
  const onSubmitEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form) //
      .then(() => {
        setBanner({ message: '메일 전송 성공!', state: 'success' });
        setForm(EMAIL_FORM_DEFAULT_DATA);
      })
      .catch(() => {
        setBanner({ message: '메일 전송 실패!', state: 'error' });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
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

export default SendEmailForm;
