import ISocialData from "../../interfaces/ISocialData";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const SocialData: ISocialData[] = [
  {
    name: "LinkedIn",
    icon: faLinkedin as IconDefinition,
    link: "https://www.linkedin.com/in/chris-y-dev/",
  },
  {
    name: "Github",
    icon: faGithub as IconDefinition,
    link: "https://github.com/chris-y-dev",
  },
  {
    name: "Leetcode",
    icon: faCode as IconDefinition,
    link: "https://leetcode.com/chris-y-dev/",
  },
];

export default SocialData;
