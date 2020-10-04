import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = inputValue.trim();
    if (newCategory.length) {
      setCategories((categories) => [...new Set([newCategory, ...categories])]);
    }
    setInputValue("");
  };

  const [inputValue, setInputValue] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Category</h2>
      <input type="text" value={inputValue} onChange={handleInput} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
