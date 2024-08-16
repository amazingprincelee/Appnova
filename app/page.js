import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Details from "@/components/Details";
import Details2 from "@/components/Details2";
import PromoSection from "@/components/PromoSection";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import MyComponent from "@/components/MyComponent";


export default function Home() {
  return (
    <div>
      <Nav />
      {/* <Header /> */}
      <MyComponent />
      <Details />
      <Details2 />
      <PromoSection />
      <Services />
   
      <Footer />

    </div>
  );
}
