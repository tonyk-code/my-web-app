import { useMemo } from "react";
import { mockExpenses } from "../data/expenses";

export default function useExpenseTotals() {
  const data = useMemo(() => {
    const totals = {
      food: 0,
      housing: 0,
      transport: 0,
      entertainment: 0,
      shopping: 0,
      others: 0,
      total: 0,
    };

    mockExpenses.forEach((expense) => {
      const amount = expense.amount;
      const cat = expense.category.toLowerCase();

      if (Object.hasOwn(totals, cat)) {
        totals[cat as keyof typeof totals] += amount;
      } else {
        totals.others += amount;
      }
      totals.total += amount;
    });

    return totals;
  }, []);

  return data;
}
