export type Review = {
  id: number;
  name: string;
  img: string;
  comment: string;
  rating: number;
};

export type CategoriesType = {
  id: ExpenseCategory;
  label: string;
};
export type ExpenseCategory =
  | "all"
  | "food"
  | "housing"
  | "transport"
  | "entertainment"
  | "shopping"
  | "others";

export type ViewMode = "grid" | "list";

export type Expense = {
  id: string;
  title: string;
  category: ExpenseCategory;
  date: string; 
  amount: number;
}
