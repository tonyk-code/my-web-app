interface NotificationItem {
  id: number;
  title: string;
  message: string;
  type: "budget" | "goal" | "payment" | "income" | "system" | "summary";
  date: string;
  read?: boolean;
}

export const notifications: NotificationItem[] = [
  {
    id: 1,
    type: "budget",
    title: "Budget Alert",
    message: "You've used 85% of your Food budget for this month.",
    date: "Jan 26, 2025 · 10:32 AM",
    read: false,
  },
  {
    id: 2,
    type: "goal",
    title: "Goal Progress",
    message: "You're 70% done with your Emergency Fund goal. Keep going!",
    date: "Jan 25, 2025 · 6:10 PM",
    read: false,
  },
  {
    id: 3,
    type: "payment",
    title: "Upcoming Payment",
    message: "Your rent payment is due in 3 days.",
    date: "Jan 25, 2025 · 9:00 AM",
    read: true,
  },
  {
    id: 4,
    type: "income",
    title: "Income Received",
    message: "Salary of $2,500 has been added to your account.",
    date: "Jan 24, 2025 · 4:45 PM",
    read: true,
  },
  {
    id: 5,
    type: "summary",
    title: "Monthly Summary Ready",
    message: "Your January spending report is now available.",
    date: "Jan 23, 2025 · 8:20 AM",
    read: true,
  },
  {
    id: 6,
    type: "system",
    title: "Backup Completed",
    message: "Your financial data was backed up successfully.",
    date: "Jan 22, 2025 · 11:55 PM",
    read: true,
  },
];