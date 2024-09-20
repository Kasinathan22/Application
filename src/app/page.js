import Testimonials from "@/components/Home/Test/Testimonials";
import Infitescroll from "@/components/Home/Infite/Infitescroll";
import Hero from "@/components/Home/Hero/Hero";
import Services from "@/components/Home/Services/Services";
import Sales from "@/components/Home/Sales/Sales";
import Nav from "@/components/Home/Navbar/Nav";





export default function Home() {
  return (
   <main className="w-full">
  <Hero />
  <Infitescroll />
  <Services />
  <Sales />
  <Testimonials />
 


   </main>
  );
}
