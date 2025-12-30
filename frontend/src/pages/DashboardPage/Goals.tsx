import GoalInsightsCard from "../../components/Goals/GoalInsightsCard";
import GoalsHeader from "../../components/Goals/GoalsHeader";
import SavingsGoalCard from "../../components/Goals/SavingsGoalCard";
import { goals } from "../../data/goals";


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

      <GoalInsightsCard goals={goals}/>
    </div>
  );
}
