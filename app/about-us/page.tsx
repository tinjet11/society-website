import getCommittees from "@/actions/getCommittee";
import getPositions from "@/actions/getPosition";
import CommitteePage from "@/app/about-us/components/Committee";
import Position from "@/app/about-us/components/Position";

export const revalidate = 0

export default async function Home() {
  const committee = await getCommittees();
  const position = await getPositions();
  return (
    <>
        <CommitteePage data={committee} />
        <Position data={position}/>
    </>
  );
}
