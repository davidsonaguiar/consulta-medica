import { Category } from "./category";

export interface Doctor {
  id: number;
  attributes: {
    Name: string;
    About: string;
    Email: string;
    Phone: string;
    StartTime: string;
    EndTime: string;
    YearExperience: string;
    Patients: string;
    Premium: boolean;
    category: { data: Category };
    Avatar: {
      data: {
        id: number;
        attributes: {
          url: string;
        }
      }

    }
  }
}