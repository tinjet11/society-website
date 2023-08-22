import { EventDescriptionContentType } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/events`
interface Props {
    eventId: string,
    eventdescriptionId: string,
}
const getEventDescriptionContents = async (eventId: string, eventdescriptionId: string): Promise<EventDescriptionContentType[]> => {
    const res = await fetch(`${URL}/${eventId}/descriptions/title/${eventdescriptionId}/content`);
    return res.json();
}

export default getEventDescriptionContents