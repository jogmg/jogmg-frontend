"use client";

import TitleCard from "./components/TitleCard";
import { lexend } from "./fonts";
import Button from "./components/Button";
import InputField from "./components/InputField";
import { useState } from "react";
import Link from "next/link";

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
            <p className="text-balance">
              I'm a Software Developer and UI/UX Designer from Nigeria,
              dedicated to delivering high-quality software solutions that meet
              user needs. I design, build, and burnout. Let's collaborate to
              bring your ideas to life.
            </p>
            <div className="cta-container">
              <Link href={"/portfolio"}>
                <Button
                  id="view-btn"
                  text="View Portfolio"
                  type="main"
                  iconType="link"
                />
              </Link>
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
          <h2 className={`${lexend.className} tracking-[1.6px]`}>Contact Me</h2>
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
    </main>
  );
}
