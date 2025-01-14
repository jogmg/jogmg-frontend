"use client";

import TitleCard from "./components/TitleCard";
import { lexend } from "./fonts";
import Button from "./components/Button";
import InputField from "./components/InputField";
import { useState } from "react";

export default function Home() {
  const [toggled, setIsToggled] = useState(false);

  const handleGoBack = () => {
    setIsToggled(false);
  };

  const handleGetInTouch = () => {
    setIsToggled(true);
  };

  return (
    <main className="home-container">
      <section className="intro-container">
        <article className={`intro ${toggled ? "" : "active"}`}>
          <p>Hey there! 👋</p>
          <div className="name-title-cta-container">
            <div className="name-title-container">
              <h1 className={`${lexend.className} tracking-[2.4px]`}>
                I'm Joshua Attah
              </h1>
              <div className="title-card-container">
                <TitleCard text="SOFTWARE DEVELOPER" />
                <TitleCard text="UI/UX DESIGNER" />
              </div>
            </div>
            <p>
              I'm a Software Developer and UI/UX Designer from Nigeria. I
              design, build, and burnout. I'm dedicated to creating unique and
              fascinating user experiences. My goal is to deliver high-quality
              software solutions that meet user needs. Let's collaborate to
              bring your ideas to life.
            </p>
            <div className="cta-container">
              <Button text="View Portfolio" type="main" />
              <Button
                text="Get in touch"
                type="alt"
                action={handleGetInTouch}
              />
            </div>
          </div>
        </article>
        <article className={`get-in-touch ${toggled ? "active" : ""}`}>
          <h2 className={`${lexend.className} tracking-[1.6px]`}>
            Get in touch
          </h2>
          <form action="">
            <div className="input-container">
              <InputField name="name" placeholder="Name" />
              <InputField name="email" placeholder="Email" />
            </div>
            <InputField name="subject" placeholder="Subject" />
            <textarea name="message" placeholder="Message" />
          </form>
          <div className="cta-container">
            <Button id="send-btn" text="Send" type="main" />
            <Button text="Go Back" type="alt" action={handleGoBack} />
          </div>
        </article>
      </section>
    </main>
  );
}
