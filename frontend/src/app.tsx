import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Programs } from "./pages/programs";
import { Header } from "./components/header";
import { Groups } from "./pages/groups";
import { Templates } from "./pages/templates";
import { Calendar } from "./pages/calendar";
import { Chats } from "./pages/chats";

export function App() {
  return (
    <div className="flex flex-col flex-1 space-y-5">
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
    </div>
  );
}
