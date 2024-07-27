import { Main } from "./UI/pages/Main.jsx";
import { Profile } from "./UI/pages/Profile.jsx";
// import { Friends } from "./UI/pages/Friends.jsx";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/friends" element={<Friends />} /> */}
      </Routes>
    </div>
  );
};
