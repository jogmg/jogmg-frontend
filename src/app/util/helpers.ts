import gsap from "gsap";

export const normalizeText = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatToWAT = (date: Date) => {
  return `${date.toLocaleTimeString("en-US", {
    timeZone: "Africa/Lagos",
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  })} WAT`;
};

interface HorizontalLoopConfig {
  repeat?: number;
  paused?: boolean;
  speed?: number;
  snap?: boolean | number | ((value: number) => number);
  paddingRight?: number;
}

export function horizontalLoop(
  items: HTMLElement[] | NodeListOf<HTMLElement>,
  config: HorizontalLoopConfig
): gsap.core.Timeline {
  items = gsap.utils.toArray(items) as HTMLElement[];
  config = config || {};

  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => {
        tl.totalTime(tl.rawTime() + tl.duration() * 100);
      },
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times: number[] = [],
    widths: number[] = [],
    xPercents: number[] = [],
    pixelsPerSecond = (config.speed || 1) * 100,
    snap =
      typeof config.snap === "number" || Array.isArray(config.snap)
        ? gsap.utils.snap(config.snap)
        : typeof config.snap === "function"
        ? config.snap
        : (v: number) => v,
    totalWidth: number,
    curX: number,
    distanceToStart: number,
    distanceToLoop: number,
    item: HTMLElement,
    i: number;

  gsap.set(items, {
    xPercent: (i, target) => {
      let w = (widths[i] = parseFloat(
        gsap.getProperty(target, "width", "px") as string
      ));
      xPercents[i] = snap(
        (parseFloat(String(gsap.getProperty(target, "x", "px"))) / w) * 100 +
          parseFloat(gsap.getProperty(target, "xPercent") as string)
      );
      return xPercents[i];
    },
  });

  gsap.set(items, { x: 0 });
  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      Number(gsap.getProperty(items[length - 1], "scaleX")) +
    (parseFloat(config.paddingRight?.toString() || "0") || 0);

  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft - startX;
    distanceToLoop =
      distanceToStart +
      widths[i] * (gsap.getProperty(item, "scaleX") as number);
    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }

  return tl;
}
