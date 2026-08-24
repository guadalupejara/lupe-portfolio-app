
import Hero from "@/components/Hero";
import AboutCard from "@/components/AboutCard";
import FeaturedProjects from "@/components/FeaturedProjects";
import CallToAction from "@/components/CallToAction";
import SkillsStrip from "@/components/SkillsStrip";
import Testimonials from "@/components/Testimonials";
function Home() {
  return (
    <>
    <Hero/>
    <SkillsStrip/>
    <AboutCard/>  
    <div className="mx-auto max-w-6xl border-t border-border px-6"/>
    <FeaturedProjects/>
    <Testimonials/>
    <CallToAction/>
    </>
  );
}

export default Home;
