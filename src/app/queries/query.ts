import { IUserData } from "../components/Intro";

export interface IPortfolio {
  _id: string;
  title: string;
  bgUrl: string;
  mainUrl: string;
  ctaUrl: string;
  ctaType: "github" | "figma" | "adobexd";
  descs: { title: string; text: string }[];
}

export interface IWorkExperience {
  _id: string;
  title: string;
  role: string;
  date: string;
  descs: string[];
  imgSrc: string;
}

export interface IEducation {
  _id: string;
  title: string;
  field: string;
  date: string;
  imgSrc: string;
}

export const sendUser = async (data: IUserData) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_DB_URL!}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response;
};

export const getPortfolios = async (): Promise<IPortfolio[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_DB_URL!}/portfolios`);
  return await response.json();
};

export const getWorkExperiences = async (): Promise<IWorkExperience[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DB_URL!}/work-experiences`
  );
  return await response.json();
};

export const getEducation = async (): Promise<IEducation[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_DB_URL!}/education`);
  return await response.json();
};
