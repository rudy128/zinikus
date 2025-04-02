import {Business, BusinessMobile} from "@/components/Business";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {Hero} from "@/components/Hero";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="hidden w-full flex-col lg:flex">
        <Business />
      </div>
      <div className="lg:hidden">
        <BusinessMobile />
      </div>
      <Partners />
      <Footer />
    </div>
  );
}
