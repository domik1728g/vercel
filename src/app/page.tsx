import AboutSection from "@/components/Home/AboutSection";
import ByNumbersSection from "@/components/Home/ByNumbersSection";
import FormSection from "@/components/Home/FormSection";
import PracticeSection from "@/components/Home/PracticeSection";
import RecommendationSection from "@/components/Home/RecommendationSection";
import ResultSection from "@/components/Home/ResultSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";

export default function Home() {
  return (
    <main className="flex flex-col overscroll-x-none">
      <Header />
      <AboutSection />
      <FormSection />
      <ResultSection />
      <PracticeSection />
      <ByNumbersSection />
      <RecommendationSection />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
