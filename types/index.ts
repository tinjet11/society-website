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

export interface blogCardProps{
    title: string,
    subtitle:string,
    date: string,
    image: string,
    key: number
}

export interface positionCardProps{
    title:string,
    description:string
}

export interface committeeCardProps{
    title:string,
    image:string,
    name:string,
    email:string,
}