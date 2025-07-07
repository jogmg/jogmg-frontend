interface ILoadingSkeleton {
  portfolio: boolean;
  workExp: boolean;
  education: boolean;
}

const LoadingSkeleton = ({
  portfolio,
  workExp,
  education,
}: Partial<ILoadingSkeleton>) => {
  return (
    <>
      {portfolio ? (
        <div className="portfolio-skeleton">
          <div className="details-skeleton">
            <div className="image-skeleton"></div>
            <div className="text-skeleton"></div>
          </div>
          <div className="cta-skeleton">
            <div className="btn-skeleton"></div>
            <div className="btn-skeleton"></div>
          </div>
        </div>
      ) : workExp ? (
        <div className="work-education-skeleton">
          <div className="image-skeleton"></div>
          <div className="work-education-container">
            <div className="title-skeleton"></div>
            <div className="role-date-skeleton"></div>
            <div className="desc-skeleton-container">
              <div className="desc-skeleton"></div>
              <div className="desc-skeleton"></div>
            </div>
          </div>
        </div>
      ) : education ? (
        <div className="work-education-skeleton">
          <div className="image-skeleton"></div>
          <div className="work-education-container">
            <div className="title-skeleton"></div>
            <div className="role-date-skeleton"></div>
          </div>
        </div>
      ) : undefined}
    </>
  );
};

export default LoadingSkeleton;
