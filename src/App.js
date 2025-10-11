import { ToastContainer } from "react-toastify";
import { SidebarProvider } from "./context/SidebarContext";
import { UserProvider } from "./context/userContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./page/Home";
import ChatLayout from "./Layouts/ChatLayout";
import Chat from "./page/Chat";
import Companies from "./page/Companies";
import Interviews from "./page/Interviews";
import DNA from "./page/DNA";
import Contact from "./page/Contact";
import Feedback from "./page/Feedback";
import Game from "./page/Game";
import Games from "./page/game/Games";
import Leaderboard from "./page/game/Leaderboard";

function App() {
  return (
    <div>
      <UserProvider>
        <SidebarProvider>
          <Router>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />

                <Route path="chat" element={<ChatLayout />}>
                  <Route index element={<Chat />} />
                </Route>

                <Route path="/companies" element={<Companies />} />

                <Route path="/interviews" element={<Interviews />} />

                <Route path="/workdna" element={<DNA />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="/feedback" element={<Feedback />} />

                <Route path="/games" element={<Game />}>
                  <Route index element={<Game />} />
                  <Route path="allgame" element={<Games />} />
                  <Route path="leaderboard" element={<Leaderboard />} />
                </Route>
              </Route>
            </Routes>
          </Router>
          <ToastContainer />
        </SidebarProvider>
      </UserProvider>
    </div>
  );
}

export default App;
