import GoalsHeader from "../../components/Goals/GoalsHeader";
import SavingsGoalCard from "../../components/Goals/SavingsGoalCard";

const goals = [
  {
    name: "Emergency Fund",
    current: 7500,
    target: 10000,
    color: "#b7ff03",
  },
  {
    name: "Vacation",
    current: 2800,
    target: 5000,
    color: "#00d9ff",
  },
  {
    name: "New Car",
    current: 12000,
    target: 25000,
    color: "#ffd700",
  },
  {
    name: "Home Down Payment",
    current: 35000,
    target: 60000,
    color: "#9d4edd",
  },
];

export default function Goals() {
  return (
    <div className="space-y-6 pb-20 lg:pb-6">
      <GoalsHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {goals.map((goal, idx) => {
          const progress = (goal.current / goal.target) * 100;
          const remaining = goal.target - goal.current;

          return (
            <SavingsGoalCard
              idx={idx}
              progress={progress}
              remaining={remaining}
              goal={goal}
            />
          );
        })}
      </div>
    </div>
  );
}
