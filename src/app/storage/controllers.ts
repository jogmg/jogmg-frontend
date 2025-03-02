import { UserDataProps } from "../components/Intro";

export const sendUser = async (data: UserDataProps) => {
  const response = await fetch(process.env.NEXT_PUBLIC_DB_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};
