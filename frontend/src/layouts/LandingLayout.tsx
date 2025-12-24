import LandingFooter from "../components/Landing/LandingFooter";
import LandingHeader from "../components/Landing/LandingHeader";
import LandingMain from "../components/Landing/LandingMain";
import LandingHeroClipPath from "../components/ui/LandingHeroClipPath";

export default function LandingLayout() {
  return (
    <div className="flex flex-col justify-between min-h-screen p-3 ">
      <LandingHeroClipPath />

      <section className="landing-hero">
        <span className="tag-icon"></span>
        <LandingHeader />
        <LandingMain />
      </section>

      <LandingFooter />
    </div>
  );
}
