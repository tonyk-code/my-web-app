import LandingFooter from "../components/Landing/LandingFooter";
import LandingHeader from "../components/Landing/LandingHeader";
import LandingMain from "../components/Landing/LandingMain";
import LandingHeroClipPath from "../components/ui/LandingHeroClipPath";

export default function LandingLayout() {
  return (
    <>
      <LandingHeroClipPath />

      <section className="landing-hero">
        <span className="tag-icon"></span>
        <LandingHeader />
        <LandingMain />
      </section>

      <LandingFooter />
    </>
  );
}
