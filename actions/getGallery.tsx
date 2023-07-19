import { GalleryType} from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/galleries`

const getGalleries = async (): Promise<GalleryType[]> => {
    const res  = await fetch(URL);
    return res.json();
}

export default getGalleries