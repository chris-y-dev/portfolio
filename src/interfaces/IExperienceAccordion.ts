export interface IExperiencePriorRole {
  title: string;
  workPeriod: string;
  description: string;
  skills: string[];
}

export default interface IExperienceAccordion {
  id: string;
  isCurrent?: boolean;
  buttonLabel: string;
  workType: string;
  workPeriod: string;
  description: string;
  priorRole?: IExperiencePriorRole[];
  companyImagePath: string;
  skills: string[];
  isMusicTherapy?: boolean;
}
