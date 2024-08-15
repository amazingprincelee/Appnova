import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Details from "@/components/Details";
import Details2 from "@/components/Details2";
import Testimonials from "@/components/Testimonials";
import PromoSection from "@/components/PromoSection";
import Footer from "@/components/Footer";
import Services from "@/components/Services";


export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <Details />
      <Details2 />
      <PromoSection />
      <Services />
      <Testimonials />
      <Footer />

    </div>
  );
}
