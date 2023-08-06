import {  NoticeBoardType } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/noticeboards`

const getNoticeBoard = async (): Promise<NoticeBoardType[]> => {
    const res  = await fetch(URL);
    return res.json();
}

export default getNoticeBoard