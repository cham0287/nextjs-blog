import React from 'react';

interface Props {
  categories: string[];
  selectedCategory: string;
  onClick: (category: string) => void;
}

const Categories = ({ categories, selectedCategory, onClick }: Props) => {
  return (
    <section>
      <h2>Category</h2>
      <ul>
        {categories.map((category) => (
          <li key={category} onClick={() => onClick(category)}>
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
