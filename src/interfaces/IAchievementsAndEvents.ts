export default interface IAchievementsAndEvents {
  eventType: IEventType;
  title: string;
  date: string;
  link: string | undefined;
}

interface IEventType {
  type: string;
  isWinner: boolean;
  place: number;
  companyColour: string;
  hasIconColour: boolean;
}
