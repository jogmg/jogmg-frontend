import { UserDataProps } from "../components/Intro";

export const sendUser = async (data: UserDataProps) => {
  const response = await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};
