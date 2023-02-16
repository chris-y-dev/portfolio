export default interface EventData{
    eventType: EventType,
    title: string,
    date: string,
    link: string | undefined

}

interface EventType{
    type: string,
    isWinner: boolean,
    place: number
}

