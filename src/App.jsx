import { Main } from "./UI/pages/Main.jsx";
import { Profile } from "./UI/pages/Profile.jsx";
// import { Friends } from "./UI/pages/Friends.jsx";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/profile" element={<Profile />} />
        {/* <Route path="/friends" element={<Friends />} /> */}
      </Routes>
    </div>
  );
};
