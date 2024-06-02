import { Category } from "./category";

export interface Doctor {
  id: number;
  attributes: {
    name: string;
    about: string;
    email: string;
    phone: string;
    startTime: string;
    endTime: string;
    yearExperience: string;
    patients: string;
    premium: boolean;
    category: { data: Category };
    avatar: {
      data: {
        id: number;
        attributes: {
          url: string;
        }
      }

    }
  }
}