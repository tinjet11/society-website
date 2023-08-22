import { EventDescriptionTitleType } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/events`

const getEventDescriptionTitles = async (id: string): Promise<EventDescriptionTitleType[]> => {
    const res = await fetch(`${URL}/${id}/descriptions/title`);
    return res.json();
}

export default getEventDescriptionTitles