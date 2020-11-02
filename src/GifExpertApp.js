import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import PropTypes from 'prop-types';

const GifExperApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>GifExperApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {categories.map((category) => {
        return <GifGrid key={`cat-${category}`} category={category} />;
      })}
    </>
  );
};

GifExperApp.propTypes = {
  defaultCategories: PropTypes.array,
};

export default GifExperApp;
