export interface userProps {
    id: number,
    name: string,
    username: string,
    email: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

export interface blogCardProps {
    title: string,
    subtitle: string,
    date: string,
    image: string,
    btn_txt: string

}

export interface positionCardProps {
    title: string,
    description: string
    link: string
}

export interface committeeCardProps {
    title: string,
    image: string,
    name: string,
    study_year: string,
    email: string,
}


export interface CommitteeType {
    name: string,
    title: string,
    year: string,
    email: string,
    imageUrl: string,
    order: string,
}


export interface PositionType {
    title: string,
    description: string,
    link: string,
}

export interface EventType {
    id: string,
    title: string
    date: Date
    venue: string
    imageUrl: string
    link: string
}

export interface EventDescriptionTitleType {
    id: string,
    title: string,
    order: string,
    eventId: string,
}

export interface EventDescriptionContentType {
    id: string
    description: string
    order: string
    eventDescriptionId: string
}

export interface GalleryType {
    id: string,
    title: string,
    time: string,
    images: ImageType[],
}


export interface ImageType{
    id:string,
    url:string,
}