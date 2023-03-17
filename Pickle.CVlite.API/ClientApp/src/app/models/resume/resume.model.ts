import {PersonalDetail} from "./personal-detail.model";
import {EmploymentHistory} from "./employment-history.model";
import {Education} from "./education.model";
import {WebSocial} from "./web-social.model";
import {Rating} from "./rating.model";

export interface Resume {
  id: string
  personalDetail: PersonalDetail
  proFile: string
  employmentHistories: Array<EmploymentHistory>
  educations: Array<Education>
  links: Array<WebSocial>
  skills: Array<Rating>
  languages: Array<Rating>
  hobbies: string
}
