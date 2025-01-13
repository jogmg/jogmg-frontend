import TitleCard from "./components/TitleCard";
import { lexend } from "./fonts";
import Button from "./components/Button";

export default function Home() {
  return (
    <main className="intro">
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
          A Software Engineer and UI/UX Designer who excels in creating
          intuitive digital experiences and top-notch software solutions. My
          skills extend to Video Editing and Graphic Design, enabling me to
          create visually engaging narratives and brand identities.
        </p>
        <div className="cta-container">
          <Button text="View Portfolio" type="main" />
          <Button text="Get in touch" type="alt" />
        </div>
      </div>
    </main>
  );
}
