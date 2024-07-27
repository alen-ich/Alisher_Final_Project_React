import "./skeleton.css";

export const SkeletonLoader = () => {
  return (
    <div className="skeleton-post">
      <div className="skeleton-img-and-author">
        <div className="skeleton-img skeleton-animation"></div>
        <div className="skeleton-name-and-tag">
          <div className="skeleton-name skeleton-animation"></div>
          <div className="skeleton-tags">
            <div className="skeleton-tag skeleton-animation"></div>
            <div className="skeleton-tag skeleton-animation"></div>
          </div>
        </div>
      </div>
      <div className="skeleton-quote skeleton-animation"></div>
    </div>
  );
};
