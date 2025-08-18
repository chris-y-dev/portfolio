export default interface IExperienceAccordion {
  id: string;
  isCurrent?: boolean;
  buttonLabel: string;
  workType: string;
  workPeriod: string;
  description: string;
  companyImagePath: string;
  technologies: string[];
  isMusicTherapy?: boolean;
}
