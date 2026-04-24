import { lexend } from "@app/util/fonts";
import { horizontalLoop } from "@app/util/helpers";
import { ISkillData } from "@app/util/query";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import { useRef } from "react";
import LoadingSkeleton from "../LoadingSkeleton";
import SkillCard from "./SkillCard";

interface ISkillMarqueeProps {
  skills?: ISkillData[];
  isSkillsSuccessful: boolean;
  className?: string;
}

gsap.registerPlugin(useGSAP, Draggable);

export default function SkillMarquee({
  skills,
  isSkillsSuccessful,
  className,
}: ISkillMarqueeProps) {
  const containerRef = useRef(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!isSkillsSuccessful || !skills?.length) return;

      let loop: gsap.core.Timeline;
      const items = gsap.utils.toArray(".skill_card") as HTMLElement[];
      const stopLoop = () => {
        gsap.to(loop, { timeScale: 0, duration: 1, overwrite: true });
      };
      const startLoop = () => {
        gsap.to(loop, { timeScale: 1, duration: 1, overwrite: true });
      };
      const wrapper = wrapperRef.current;

      const createLoop = () => {
        // Kill existing loop and reset positions before recalculating
        if (loop) {
          loop.kill();
          gsap.set(".skill_card", { clearProps: "all" });
        }

        loop = horizontalLoop(items, {
          repeat: -1,
          speed: 0.3,
          paddingRight: 7,
        });
      };

      // Initial creation
      createLoop();

      // Only re-run logic on window resize if width changes (prevents mobile address bar issues)
      let lastWidth = window.innerWidth;
      const handleResize = () => {
        if (window.innerWidth !== lastWidth) {
          lastWidth = window.innerWidth;
          createLoop();
        }
      };

      window.addEventListener("resize", handleResize);

      if (wrapper) {
        wrapper.addEventListener("mouseenter", stopLoop);
        wrapper.addEventListener("mouseleave", startLoop);
        // For touch devices, you might want to pause on touch
        wrapper.addEventListener("touchstart", stopLoop);
        wrapper.addEventListener("touchend", startLoop);
      }

      const draggables = Draggable.create(document.createElement("div"), {
        trigger: wrapperRef.current,
        type: "x",
        onPress() {
          gsap.killTweensOf(loop);
          loop.pause();
        },
        onDrag() {
          const totalWidth = items.length * (items[0].offsetWidth + 7); // include gap/padding
          const ratio = this.deltaX / totalWidth;
          loop.progress(loop.progress() - ratio);
        },
        onRelease() {
          loop.play();
        },
      });

      // Cleanup on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
        draggables.forEach((d) => d.kill());

        if (wrapper) {
          wrapper.removeEventListener("mouseenter", stopLoop);
          wrapper.removeEventListener("mouseleave", startLoop);
          wrapper.removeEventListener("touchstart", stopLoop);
          wrapper.removeEventListener("touchend", startLoop);
        }
      };
    },
    { dependencies: [skills], scope: containerRef }
  );

  return (
    <aside className={`skill_container ${className || ""}`} ref={containerRef}>
      <h4 className={`h4 ${lexend.className}`}>Skills</h4>
      <div className="skills_wrapper" ref={wrapperRef}>
        <div className="skills_track">
          {isSkillsSuccessful && skills
            ? skills.map((skill) => (
              <SkillCard
                key={skill._id}
                title={skill.title}
                imgSrc={skill.imgSrc}
              />
            ))
            : Array.from({ length: 3 }).map((_, idx) => (
              <LoadingSkeleton key={idx} skill />
            ))}
        </div>
      </div>
    </aside>
  );
}
