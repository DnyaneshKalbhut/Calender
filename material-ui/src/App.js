import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Chat from "./pages/Chat";
// import Groups1 from "./pages/Groups1";
import Quiz from "./pages/Quiz";
import CalendarComponent from "./pages/Calendar";
import MeetingManager from "./components/Meeting";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Chat />}></Route>
          <Route path="/calendar" exact element={<CalendarComponent />}></Route>
          <Route path="/groups" exact element={<MeetingManager  />}></Route>
          <Route path="/quiz" exact element={<Quiz />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
