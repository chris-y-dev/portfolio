export default interface AchievementData{
    eventType: EventType,
    title: string,
    date: string,

}

interface EventType{
    type: string,
    isWinner: boolean,
    place: number
}