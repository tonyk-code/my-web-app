import CategoryFilters from "../../components/Expenses/CategoryFilters";
import ExpenseItem from "../../components/Expenses/ExpenseItem";
import ExpensesHeader from "../../components/Expenses/ExpensesHeader";
import ViewToggle from "../../components/Expenses/ViewToggle";
import type {
  CategoriesType,
  ExpenseCategory,
  ViewMode,
  Expense,
} from "../../types/Types";
import { useState } from "react";
import { mockExpenses } from "../../data/expenses";

const categories: CategoriesType[] = [
  { id: "all", label: "All" },
  { id: "food", label: "Food" },
  { id: "housing", label: "Housing" },
  { id: "transport", label: "Transport" },
  { id: "entertainment", label: "Entertainment" },
  { id: "shopping", label: "Shopping" },
  { id: "others", label: "Others" },
];

export default function Expenses() {
  const [activeCategory, setActiveCategory] = useState<ExpenseCategory>("all");
  const [view, setView] = useState<ViewMode>("list");

  const filtered: Expense[] = mockExpenses.filter((expense) => {
    if (activeCategory === "all") {
      return expense.category.toLocaleLowerCase().includes("");
    } else {
      return expense.category
        .toLocaleLowerCase()
        .includes(activeCategory.toLocaleLowerCase());
    }
  });

  return (
    <div className=" w-full h-screen flex flex-col gap-8">
      <ExpensesHeader />
      <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-between sm:items-center">
        <CategoryFilters
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <ViewToggle view={view} setView={setView} />
      </div>

      <div
        className={`text-white pb-2 ${
          view === "list"
            ? "flex flex-col gap-4"
            : "grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        }`}
      >
        {filtered.map((expense, i) => (
          <ExpenseItem expense={expense} i={i} />
        ))}
      </div>
    </div>
  );
}
