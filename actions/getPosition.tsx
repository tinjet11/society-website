import {  PositionType } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/positions`

const getPositions = async (): Promise<PositionType[]> => {
    const res  = await fetch(URL);
    return res.json();
}

export default getPositions