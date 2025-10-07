import { ToastContainer } from "react-toastify";
import { SidebarProvider } from "./context/SidebarContext";
import { UserProvider } from "./context/userContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./page/Home";
import ChatLayout from "./Layouts/ChatLayout";
import Chat from "./page/Chat";
import Companies from "./page/Companies";

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
