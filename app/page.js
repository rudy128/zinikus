import Business from "@/components/Business";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Business />
      <Partners />
      <Footer />
    </div>
  );
}
