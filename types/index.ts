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