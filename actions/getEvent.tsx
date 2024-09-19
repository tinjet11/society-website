import {EventType} from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/events`

const getEvents = async (): Promise<EventType[]> => {
    const res  = await fetch(URL);
    console.log(res.json);
    return res.json();
}

export default getEvents