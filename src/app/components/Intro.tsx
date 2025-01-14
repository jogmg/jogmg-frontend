import { lexend } from "../fonts";
import TitleCard from "./TitleCard";
import Button from "./Button";

export default function Intro() {
  return (
    <>
      {getInTouch && (
        <section className="intro">
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
              I specialize in Software Development enhanced by my UI/UX Design
              background. I design, build, and burnout.
            </p>
            <div className="cta-container">
              <Button text="View Portfolio" type="main" />
              <Button text="Get in touch" type="alt" />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
