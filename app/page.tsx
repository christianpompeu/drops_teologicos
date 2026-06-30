import HeroSection from "@/components/HeroSection";
import LatestSermons from "@/components/LatestSermons";
import CourseBanner from "@/components/CourseBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <LatestSermons />
        <CourseBanner />
      </main>
    </div>
  );
}
