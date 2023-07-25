import {BlogType} from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/blogs`

const getBlogs = async (): Promise<BlogType[]> => {
    const res  = await fetch(URL);
    return res.json();
}

export default getBlogs