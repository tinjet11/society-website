import { CommitteeType } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/committees`

const getCommittees = async (): Promise<CommitteeType[]> => {
    const res  = await fetch(URL);
    return res.json();
}

export default getCommittees