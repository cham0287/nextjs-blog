import React from 'react';

const TITLE_CLASS = 'text-2xl font-bold my-2';

const Description = () => {
  return (
    <div className='bg-gray-100 w-3/4 mx-auto my-6 p-4 text-center shadow-md'>
      <h2 className={TITLE_CLASS}>Who Am I?</h2>
      <p>Junior Front-end Developer</p>
      <h2 className={TITLE_CLASS}>Career</h2>
      <p>krossgames (2023.03 ~ Now)</p>
      <h2 className={TITLE_CLASS}>Skills</h2>
      <p>Javascript, React, Typescript, Next, Node</p>
      <p>Recoil, SWR, React Query</p>
    </div>
  );
};

export default Description;
