import React from 'react';
import Hero from '@/components/common/Hero';
import Description from '@/components/about/Description';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Send Email to DK',
};

const About = () => {
  return (
    <div>
      <Hero />
      <Description />
    </div>
  );
};

export default About;
