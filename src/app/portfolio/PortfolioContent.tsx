"use client";

import { useQuery } from "@tanstack/react-query";
import calenderIcon from "../../../public/icons/calendar-week.svg";
import gridIcon from "../../../public/icons/grid-fill.svg";
import personIcon from "../../../public/icons/person-bounding-box.svg";
import stackIcon from "../../../public/icons/stack.svg";
import LoadingSkeleton from "../components/LoadingSkeleton";
import Portfolio from "../components/Portfolio";
import { getPortfolios } from "../queries/query";

const PortfolioContent = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ["portfolios"],
    queryFn: getPortfolios,
    staleTime: 24 * 60 * 60 * 1000,
  });

  const icons = [personIcon, calenderIcon, stackIcon, gridIcon];

  const portfolios = data?.map((item) => ({
    ...item,
    descs: item.descs.map((desc, idx) => ({
      ...desc,
      iconUrl: icons[idx],
    })),
  }));

  return (
    <main className="portfolio">
      {isSuccess
        ? portfolios?.map((portfolio) => (
            <Portfolio
              key={portfolio._id}
              title={portfolio.title}
              bgUrl={portfolio.bgUrl}
              mainUrl={portfolio.mainUrl}
              ctaUrl={portfolio.ctaUrl}
              ctaType={portfolio.ctaType}
              descs={portfolio.descs}
            />
          ))
        : Array.from({ length: 6 }).map((_, idx) => (
            <LoadingSkeleton key={idx} portfolio />
          ))}
    </main>
  );
};

export default PortfolioContent;
