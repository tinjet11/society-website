import { FaqType } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/faqs`

const getFaqs = async (): Promise<FaqType[]> => {
    const res  = await fetch(URL);
    return res.json();
}

export default getFaqs