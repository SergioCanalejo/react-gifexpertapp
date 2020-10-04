import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExperApp = () => {
  const [categories, setCategories] = useState(["One Piece"]);

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

export default GifExperApp;
