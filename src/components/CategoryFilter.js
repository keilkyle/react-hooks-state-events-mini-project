import React from "react";

function CategoryFilter({categories, selectedCategory, categorySelector}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories?.map((category) => {
        return <button className={category === selectedCategory ? "selected" : ""} key={category} onClick={() => categorySelector({category})}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
