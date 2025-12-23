import NavBar from "@/components/NavBar";
import Hero from "@/components/sections/Hero";
import Expertise from "@/components/sections/Expertise";
import Services from "@/components/sections/Services";
import ContactFAQ from "@/components/sections/ContactFAQ";
import Footer from "@/components/Footer";
export default function Page() {
  return (
    <main className="">
      <NavBar />
      <Hero />
      <Expertise />
      <Services />
      <ContactFAQ />
      <Footer />
    </main>
  );
}
