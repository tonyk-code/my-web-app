import ExpenseDoughnutChart from "../../components/Home/Graphs/ExpenseDoughnutChart";
import IncomeLineChart from "../../components/Home/Graphs/IncomeLineChart";
import StatCard from "../../components/Home/StatCard";
import TransactionItem from "../../components/Home/TransactionItem";
import { motion } from "framer-motion";
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
          <ViewAllLink to="/dashboard/expenses"/>
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
          <h2 className="text-xl text-gray-700 pb-4 font-semibold ">
            Recent Transaction
          </h2>
          <div className="grid grid-cols-4 gap-[5vw] font-semibold text-gray-400 text-sm tracking-wider pb-4 border-b border-gray-100">
            <span>Title</span>
            <span>Date</span>
            <span>Amount</span>
            <span>Status</span>
          </div>

          <div>
            <TransactionItem
              title="Netflix Subscription"
              date="Oct 24, 2025, 09:15"
              amount={15.99}
              status="recurring"
            />
            <TransactionItem
              title="Freelance Payment"
              date="Oct 22, 2025, 14:20"
              amount={850.0}
              status="completed"
            />
            <TransactionItem
              title="Apple Store"
              date="Oct 20, 2025, 18:45"
              amount={15.99}
              status="pending"
            />
            <TransactionItem
              title="Grocery Store"
              date="Apr 29, 2022, 11:37"
              amount={1299.0}
              status="completed"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
