import { EventContentType } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/events`

const getEventContentMarkdown = async (eventId: string, eventContentId: string): Promise<EventContentType> => {
    const res = await fetch(`${URL}/${eventId}/content?id=${eventContentId}`);
    return res.json();
}

export default getEventContentMarkdown