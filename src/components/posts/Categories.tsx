import React from 'react';

interface Props {
  categories: string[];
  selectedCategory: string;
  onClick: (category: string) => void;
}

const Categories = ({ categories, selectedCategory, onClick }: Props) => {
  return (
    <section className='text-center p-4'>
      <h2 className='text-xl font-bold border-b border-sky-300 mb-2'>
        Categories
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            className={`cursor-pointer hover:text-sky-500 ${
              category === selectedCategory && 'text-sky-500'
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
