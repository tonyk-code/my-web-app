import AuthVisualSection from "../components/LoginPage/AuthVisualSection";
import LoginForm from "../components/LoginPage/LoginForm";
import ReturnButton from "../components/ui/ReturnButton";

export default function LoginPageLayout() {
  return (
    <div className="flex flex-col bg-[#102226] md:flex-row h-screen overflow-y-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:display-none">
      <ReturnButton />
      <AuthVisualSection />
      <LoginForm />
    </div>
  );
}
