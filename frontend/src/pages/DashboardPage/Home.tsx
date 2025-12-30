import ExpenseDoughnutChart from "../../components/Home/Graphs/ExpenseDoughnutChart";
import IncomeLineChart from "../../components/Home/Graphs/IncomeLineChart";
import StatCard from "../../components/Home/StatCard";
import GoalItem from "../../components/Home/GoalItem";
import { motion } from "framer-motion";
import { goals } from "../../data/goals";
import ViewAllLink from "../../components/ui/ViewAllLink";

export default function Home() {
  return (
    <div className="h-screen  flex flex-col gap-4">
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 xl:flex xl:flex-row">
        <StatCard
          title="Total Balance"
          value={24500}
          trend={12}
          icon={"wallet"}
        />
        <StatCard
          title="Income"
          value={5200}
          trend={8.2}
          icon={"trending-up"}
        />
        <StatCard
          title="Expenses"
          value={2700}
          trend={-5.4}
          icon={"trending-down"}
        />
        <StatCard
          title="Savings"
          value={2500}
          trend={+15.8}
          icon={"piggy-bank"}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 pb-2">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-150 w-full">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-slate-800">Revenue Flow</h3>
            <p className="text-sm text-slate-500">Last 7 months performance</p>
          </div>
          <div className="h-100">
            {" "}
            <IncomeLineChart />
          </div>
        </div>

        <div className="relative rounded-2xl h-150 flex justify-center items-center flex-col gap-6">
          <ViewAllLink
            to="/dashboard/expenses"
            className="text-[#99a1af] hover:text-white/80"
          />
          <h3 className="text-3xl font-bold text-white">Expenses</h3>
          <ExpenseDoughnutChart />
        </div>

        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            amount: 0.2,
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="bg-white rounded-2xl col-span-1  md:col-span-2 p-4"
        >
          <div className="flex justify-between items-center relative">
            <h2 className="text-xl text-gray-700 pb-4 font-semibold ">
              Goal Overview
            </h2>

            <ViewAllLink
              to="/dashboard/goals"
              className="text-[#99a1af] hover:text-black/60"
            />
          </div>
          <div className="grid grid-cols-4 gap-[5vw] font-semibold text-gray-400 text-sm tracking-wider pb-4 border-b border-gray-100">
            <span>Goal</span>
            <span>Target</span>
            <span>Saved</span>
            <span>Progress</span>
          </div>

          <div>
            {goals.slice(0, 4).map((goal) => {
              const progress = (goal.current / goal.target) * 100;

              return (
                <GoalItem
                  key={goal.id}
                  name={goal.name}
                  target={goal.target}
                  current={goal.current}
                  progress={progress}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
