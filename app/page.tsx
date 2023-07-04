import { NavVertical, Position,NavHorizontal } from "@/components";
import Hero from "@/components/Hero";


export default function Home() {

  return (
    <>

      <NavVertical />

        <NavHorizontal />

        <div className="lg:ml-[250px]">
        <Hero />
        </div>
    </>
  );
}
