import { PartnerType} from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/partners`

const getPartners = async (): Promise<PartnerType[]> => {
    const res  = await fetch(URL);
    return res.json();
}

export default getPartners