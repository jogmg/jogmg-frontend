import { IUserData } from "@app/components/intro/Intro";
import { StaticImageData } from "next/image";

export interface IPortfolioData {
  _id: string;
  title: string;
  bgUrl: string;
  mainUrl: string;
  ctaUrl: string;
  ctaType: "github" | "figma" | "adobexd";
  descs: { title: string; text: string }[];
}

export interface IWorkExperienceData {
  _id: string;
  title: string;
  role: string;
  date: string;
  descs: string[];
  imgSrc: string | StaticImageData;
}

export interface IEducationData {
  _id: string;
  title: string;
  field: string;
  date: string;
  imgSrc: string | StaticImageData;
}

export interface ISkillData {
  _id: string;
  title: string;
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

export const getPortfolios = async (): Promise<IPortfolioData[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_DB_URL!}/portfolios`);
  return await response.json();
};

export const getWorkExperiences = async (): Promise<IWorkExperienceData[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DB_URL!}/work-experiences`
  );
  return await response.json();
};

export const getEducation = async (): Promise<IEducationData[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_DB_URL!}/education`);
  return await response.json();
};

export const getSkills = async (): Promise<ISkillData[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_DB_URL!}/skills`);
  return await response.json();
};
