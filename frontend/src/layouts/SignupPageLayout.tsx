import SignupForm from "../components/SignupPage/SignupForm";
import AuthVisualSection from "../components/ui/AuthVisualSection";
import ReturnButton from "../components/ui/ReturnButton";

export default function SignupPageLayout() {
  return (
    <div className="flex flex-col bg-[#102226] md:flex-row h-screen overflow-y-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:display-none">
      <ReturnButton />
      <AuthVisualSection />
      <SignupForm />
    </div>
  );
}
