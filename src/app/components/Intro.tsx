"use client";

import { FormEvent, useReducer, useState } from "react";
import { lexend } from "../fonts";
import TitleCard from "./TitleCard";
import Button from "./Button";
import InputField from "./InputField";
import { sendUser } from "../storage/controllers";
import { toast } from "react-toastify";

export interface UserDataProps {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

interface ResultProps {
  error: boolean;
  statusCode: number;
  message: string;
  data: UserDataProps;
}

export default function Intro() {
  const [toggled, setIsToggled] = useState(false);
  const [status, setStatus] = useState<"initial" | "sending">("initial");

  const handleGoBack = () => {
    setIsToggled(false);
  };

  const handleGetInTouch = () => {
    setIsToggled(true);
  };

  const initialUserData: UserDataProps = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const userDataReducer = (
    state: UserDataProps,
    action: {
      type?: keyof UserDataProps | string;
      value?: string;
      empty?: boolean;
    }
  ) => {
    if (action.empty) {
      return initialUserData;
    }

    return { ...state, [action.type!]: action.value };
  };

  const [userData, userDataDispatch] = useReducer(
    userDataReducer,
    initialUserData
  );

  const setUserData = (type: keyof UserDataProps | string, value: string) => {
    userDataDispatch({ type, value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("sending");

    const result: ResultProps = await sendUser(userData);

    setStatus("initial");

    if (
      result.error ||
      (result.statusCode !== 200 && result.statusCode !== 201)
    ) {
      return toast.error("Failed to send message", { theme: "dark" });
    } else {
      userDataDispatch({ empty: true });
      return toast.success("Message sent successfully", { theme: "dark" });
    }
  };

  return (
    <>
      <section className="intro-container">
        <article className={`intro ${toggled ? "" : "active"}`}>
          <p>Hey there! 👋</p>
          <div className="name-title-cta-container">
            <div className="name-title-container">
              <h1 className={`h1 ${lexend.className}`}>I&apos;m Joshua Attah</h1>
              <div className="title-card-container">
                <TitleCard text="SOFTWARE DEVELOPER" />
                <TitleCard text="UI/UX DESIGNER" />
              </div>
            </div>
            <p className="text-balance">
              I&apos;m a Software Developer and UI/UX Designer from Nigeria,
              dedicated to delivering high-quality software solutions that meet
              user needs. I design, build, and burnout. Let&apos;s collaborate to
              bring your ideas to life.
            </p>
            <div className="cta-container">
              <Button
                id="view-btn"
                text="View Portfolio"
                btnType="main"
                linkUrl="/portfolio"
              />
              <Button
                id="contact-btn"
                text="Contact Me"
                btnType="alt"
                iconType="forward"
                action={handleGetInTouch}
              />
            </div>
          </div>
        </article>
        <article className={`get-in-touch ${toggled ? "active" : ""}`}>
          <h2 className={`h2 ${lexend.className}`}>Contact Me</h2>
          <form method="post" action="submit" onSubmit={handleSubmit}>
            <div className="input-container">
              <InputField
                name="name"
                value={userData.name}
                action={setUserData}
              />
              <InputField
                type="email"
                name="email"
                value={userData.email}
                action={setUserData}
              />
            </div>
            <InputField
              name="subject"
              value={userData.subject}
              action={setUserData}
              required={false}
            />
            <textarea
              name="message"
              placeholder="Message"
              title="Enter your message"
              value={userData.message}
              onChange={(e) => {
                setUserData("message", e.target.value);
              }}
            />
            <div className="cta-container">
              <Button
                id="send-btn"
                text={status === "sending" ? "Sending..." : "Send"}
                type="submit"
                btnType="main"
                iconType="send"
                status={status}
              />
              <Button
                id="back-btn"
                text="Go Back"
                btnType="alt"
                iconType="back"
                action={handleGoBack}
              />
            </div>
          </form>
        </article>
      </section>
    </>
  );
}
