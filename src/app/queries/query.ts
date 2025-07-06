import { UserDataProps } from "../components/Intro";
import { PortfolioProps } from "../components/Portfolio";

export const sendUser = async (data: UserDataProps) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_DB_URL!}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response;
};

export const getPortfolios = async (): Promise<PortfolioProps[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_DB_URL!}/portfolios`);
  return await response.json();
};
