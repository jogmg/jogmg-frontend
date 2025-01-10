import TitleCard from "./components/TitleCard";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-start px-[70px] py-[50px] bg-background-(alt) gap-[14px] w-[646px] h-[451px] rounded-[25px]">
        <p>Hey there! 👋</p>
        <h1>I'm Joshua Attah</h1>
        <div className="flex gap-[10px] items-center">
          <TitleCard />
          <TitleCard />
        </div>
        <p>
          A Software Engineer and UI/UX Designer who excels in creating
          intuitive digital experiences and top-notch software solutions. My
          skills extend to Video Editing and Graphic Design, enabling me to
          create visually engaging narratives and brand identities.
        </p>
      </div>
    </main>
  );
}
