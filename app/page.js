import Nav from "@/components/Nav";
import Header from "@/components/Header";
import TransformHealthCare from "@/components/TransformHealthCare";
import Details from "@/components/Details";
import IntuitiveTech from "@/components/IntuitiveTech";
import Details2 from "@/components/Details2";
import PromoSection from "@/components/PromoSection";
import Testimonies from "@/components/Testimonies";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import MyComponent from "@/components/MyComponent";


export default function Home() {
  return (
    <div>
      <Nav />
      {/* <Header /> */}
      <MyComponent />
      <TransformHealthCare />
      <IntuitiveTech />
      {/* <Details /> */}
      {/* <Details2 /> */}
      <PromoSection />
      <Services />
      <Testimonies />
      <Footer />

    </div>
  );
}
