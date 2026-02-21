"use client";

import { useState } from "react";

interface CategoryItemProps {
  category: {
    id: number;
    name: string;
    products: number;
    isRefined: boolean;
  };
  isSelected: boolean;
  onToggle: () => void;
}

const CategoryItem = ({ category, isSelected, onToggle }: CategoryItemProps) => {
  return (
    <button
      type="button"
      className={`group flex items-center justify-between w-full py-2.5 px-3 rounded-lg ease-out duration-200 ${isSelected ? "bg-[#FF0000]/10 text-[#FF0000]" : "hover:bg-gray-100 text-dark"}`}
      onClick={onToggle}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex items-center justify-center rounded-md w-4 h-4 border-2 flex-shrink-0 ${isSelected ? "border-[#FF0000] bg-[#FF0000]" : "bg-white border-gray-300 group-hover:border-[#FF0000]/50"
            }`}
        >
          {isSelected && (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.33317 2.5L3.74984 7.08333L1.6665 5" stroke="white" strokeWidth="1.94" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
        <span className="text-sm font-medium">{category.name}</span>
      </div>
      <span
        className={`inline-flex items-center justify-center min-w-[1.5rem] h-6 rounded-full text-xs font-medium ${isSelected ? "text-white bg-[#FF0000]" : "bg-gray-200 text-dark-2 group-hover:bg-[#FF0000]/20 group-hover:text-[#FF0000]"}`}
      >
        {category.products}
      </span>
    </button>
  );
};

interface CategoryDropdownProps {
  categories: Array<{
    id: number;
    slug: string;
    name: string;
    products: number;
    isRefined: boolean;
  }>;
  selectedCategories: number[];
  onCategoryChange: (categoryIds: number[]) => void;
}

const CategoryDropdown = ({ categories, selectedCategories, onCategoryChange }: CategoryDropdownProps) => {
  const [toggleDropdown, setToggleDropdown] = useState(true);

  const handleCategoryToggle = (categoryId: number) => {
    const isSelected = selectedCategories.includes(categoryId);

    if (isSelected) {
      // Remove category
      onCategoryChange(selectedCategories.filter(id => id !== categoryId));
    } else {
      // Add category (no limit)
      onCategoryChange([...selectedCategories, categoryId]);
    }
  };

  return (
    <div className="bg-gray-50/80 border border-gray-100 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setToggleDropdown(!toggleDropdown);
        }}
        className="w-full cursor-pointer flex items-center justify-between py-3.5 pl-4 pr-3 text-left hover:bg-gray-100/80 transition-colors rounded-xl"
        aria-expanded={toggleDropdown}
      >
        <span className="font-semibold text-dark flex items-center gap-2">
          <span className="w-0.5 h-4 rounded-full bg-[#FF0000]" />
          Category
        </span>
        <span className={`text-dark-4 transition-transform duration-200 ${toggleDropdown ? "rotate-180" : ""}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      <div
        className={`flex flex-col gap-0.5 pb-3 pt-0 px-3 ${toggleDropdown ? "flex" : "hidden"}`}
      >
        {categories.map((category) => {
          const isSelected = selectedCategories.includes(category.id);

          return (
            <CategoryItem
              key={category.id}
              category={category}
              isSelected={isSelected}
              onToggle={() => handleCategoryToggle(category.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryDropdown;
