import getCommittees from "@/actions/getCommittee";
import getPositions from "@/actions/getPosition";
import { NavVertical, NavHorizontal, Position } from "@/components";
import CommitteePage from "@/components/Committee";

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
