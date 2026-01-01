import FinancialOverviewChart from "../../components/Reports/Graph/FinancialOverviewChart";
import ReportsHeader from "../../components/Reports/ReportsHeader";
import SpendingInsights from "../../components/Reports/SpendingInsights";
import SummaryCards from "../../components/Reports/SummaryCards";

export default function Reports() {
  return (
    <div className=" w-full h-screen">
      <ReportsHeader/>
      <SummaryCards/>
      <FinancialOverviewChart/>
      <SpendingInsights/>
    </div>
  )
}
