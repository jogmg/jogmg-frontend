"use client";

import { useState } from "react";
import { lexend } from "../fonts";
import TitleCard from "./TitleCard";
import Button from "./Button";
import InputField from "./InputField";

export default function Intro() {
  const [toggled, setIsToggled] = useState(false);

  const handleGoBack = () => {
    setIsToggled(false);
  };

  const handleGetInTouch = () => {
    setIsToggled(true);
  };

  return (
    <>
      <section className="intro-container">
        <article className={`intro ${toggled ? "" : "active"}`}>
          <p>Hey there! 👋</p>
          <div className="name-title-cta-container">
            <div className="name-title-container">
              <h1 className={`h1 ${lexend.className}`}>
                I'm Joshua Attah
              </h1>
              <div className="title-card-container">
                <TitleCard text="SOFTWARE DEVELOPER" />
                <TitleCard text="UI/UX DESIGNER" />
              </div>
            </div>
            <p className="text-balance">
              I'm a Software Developer and UI/UX Designer from Nigeria,
              dedicated to delivering high-quality software solutions that meet
              user needs. I design, build, and burnout. Let's collaborate to
              bring your ideas to life.
            </p>
            <div className="cta-container">
              <Button
                id="view-btn"
                text="View Portfolio"
                type="main"
                linkUrl="/portfolio"
              />
              <Button
                id="contact-btn"
                text="Contact Me"
                type="alt"
                iconType="forward"
                action={handleGetInTouch}
              />
            </div>
          </div>
        </article>
        <article className={`get-in-touch ${toggled ? "active" : ""}`}>
          <h2 className={`h2 ${lexend.className}`}>Contact Me</h2>
          <form action="">
            <div className="input-container">
              <InputField name="name" placeholder="Name" />
              <InputField type="email" name="email" placeholder="Email" />
            </div>
            <InputField name="subject" placeholder="Subject" />
            <textarea name="message" placeholder="Message" />
          </form>
          <div className="cta-container">
            <Button id="send-btn" text="Send" type="main" iconType="send" />
            <Button
              id="back-btn"
              text="Go Back"
              type="alt"
              iconType="back"
              action={handleGoBack}
            />
          </div>
        </article>
      </section>
    </>
  );
}
