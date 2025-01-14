import TitleCard from "./components/TitleCard";
import { lexend } from "./fonts";
import Button from "./components/Button";
import InputField from "./components/InputField";


export default function Home() {
  return (
    <main className="intro-container">
      {/* <section className="intro">
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
      </section> */}
      <section className="get-in-touch">
        <h2 className={`${lexend.className} tracking-[1.6px]`}>Get in touch</h2>
        <form action="">
          <div className="input-container">
            <InputField name="name" placeholder="Name"/>
            <InputField name="email" placeholder="Email"/>
          </div>
          <InputField name="subject" placeholder="Subject"/>
          <textarea
            name="message"
            cols={20}
            rows={5}
            placeholder="Message"
          />
        </form>
        <div className="cta-container">
          <Button text="Send" type="main" />
          <Button text="Go Back" type="alt" />
        </div>
      </section>
    </main>
  );
}
