import { NavVertical, Temp ,NavHorizontal } from "@/components";

export default function Home() {

  return (
    <>
      <NavVertical />

        <NavHorizontal />

        <div className="lg:ml-[250px]">
        <Temp/>
        </div>
    </>
  );
}
