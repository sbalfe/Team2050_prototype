import Assessment from './assesment.ts'

export default interface ModuleData {
  moduleName: string;
  studyHours: string;
  credits: string;
  assessments: Assessment[];
}