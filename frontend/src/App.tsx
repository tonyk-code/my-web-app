import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/DashboardPage/Home";
import Expenses from "./pages/DashboardPage/Expenses";
import Income from "./pages/DashboardPage/Income";
import Budget from "./pages/DashboardPage/Budget";
import Goals from "./pages/DashboardPage/Goals";
import Reports from "./pages/DashboardPage/Reports";
import Settings from "./pages/DashboardPage/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="income" element={<Income />} />
          <Route path="budget" element={<Budget />} />
          <Route path="goals" element={<Goals />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
