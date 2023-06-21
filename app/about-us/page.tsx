import { NavVertical, Committee,NavHorizontal, Position } from "@/components";


export default function Home() {

  return (
    <>

      <NavVertical />

        <NavHorizontal />

        <div className="lg:ml-[250px]">
        <Committee/>
        <Position/>
        </div>
    </>
  );
}
