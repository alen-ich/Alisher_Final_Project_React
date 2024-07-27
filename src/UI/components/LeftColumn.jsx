import { Link } from "react-router-dom";

import "./styles.css";

export const LeftColumn = () => {
  return (
    <div className="left-column">
      <Link to="/profile">
        <div className="left-column-elem">My Profile</div>
      </Link>
      <Link to="/">
        <div className="left-column-elem">Quotes</div>
      </Link>
      {/* <Link to="/friends">
        <div className="left-column-elem">Friends</div>
      </Link> */}
    </div>
  );
};
