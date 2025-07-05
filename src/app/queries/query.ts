import { UserDataProps } from "../components/Intro";
import { PortfolioProps } from "../components/Portfolio";

export interface IResponse<T> {
  error: boolean;
  statusCode: number;
  message: string;
  data: T;
}

export const sendUser = async (data: UserDataProps) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_DB_URL!}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};

export const getPortfolios = async (): Promise<IResponse<PortfolioProps[]>> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_DB_URL!}/portfolios`);
  return await response.json();
};
