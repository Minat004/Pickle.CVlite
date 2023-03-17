import { BuildCvStep } from "../../models/build-cv.model";

export const STEPS: BuildCvStep[] = [
  {
    id: 0,
    name: 'build-cv',
    title: 'Start to create CV',
    family: 'parent' 
  },
  {
    id: 1,
    name: 'personal-info',
    title: 'Personal info',
    family: 'child' 
  },
  {
    id: 2,
    name: 'address',
    title: 'Address',
    family: 'child'
  }
]