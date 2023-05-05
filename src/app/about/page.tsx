'use client';

import React, { useState } from 'react';

const About = () => {
  const [a, b] = useState<boolean>(true);
  console.log(b);
  return <div>about</div>;
};

export default About;
