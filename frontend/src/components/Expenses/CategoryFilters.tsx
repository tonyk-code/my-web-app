import type { CategoriesType, ExpenseCategory } from "../../types/Types";

interface CategoryFiltersProps {
  categories: CategoriesType[];
  activeCategory: ExpenseCategory;
  setActiveCategory: (catagory: ExpenseCategory) => void;
}

export default function CategoryFilters({
  categories,
  activeCategory,
  setActiveCategory,
}: CategoryFiltersProps) {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      {categories.map((b) => (
        <button
          onClick={() => setActiveCategory(b.id)}
          className={` ${
            activeCategory === b.id
              ? "text-[#102226] bg-[#b7ff03]"
              : "text-white bg-white/10 hover:scale-105 hover:bg-white/20"
          } font-semibold text-sm py-2 px-3  rounded-lg cursor-pointer transition-all`}
          key={b.id}
        >
          {b.label}
        </button>
      ))}
    </div>
  );
}
