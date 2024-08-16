import Nav from "@/components/Nav";
import Header from "@/components/Header";
import TransformHealthCare from "@/components/TransformHealthCare";
import IntuitiveTech from "@/components/IntuitiveTech";
import PromoSection from "@/components/PromoSection";
import Testimonies from "@/components/Testimonies";
import Services from "@/components/Services";
import Footer from "@/components/Footer";





export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <TransformHealthCare />
      <IntuitiveTech />
      <PromoSection />
      <Services />
      <Testimonies />
      <Footer />

    </div>
  );
}
