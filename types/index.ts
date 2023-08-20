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


//data types fetch from database

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
    description: string
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


export interface ImageType {
    id: string,
    blogId: string,
    url: string,
}

export interface BlogType {
    id: string,
    title: string,
    content: string
    date: string
    venue: string,
    coverImageUrl: string,
    year: string
    images: ImageType[],
}


export interface NoticeBoardType {
    title: string,
    description: string,
    buttonText: string,
    link: string,
}

export interface FaqType {
    id: string;
    question: string;
    answer: string;
    createdAt: string;
    updatedAt: string;
}

export interface PartnerType {
    name: string,
    imageUrl: string,
}