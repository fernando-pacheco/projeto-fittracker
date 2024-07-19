import { Routes, Route } from "react-router-dom";
import { Programs } from "./pages/programs";
import { Perfil } from "./pages/perfil";
import { UserSettings } from "./pages/user-settings";
import { Home } from "./pages/home";
import { Dashboard } from "./pages/dashboard";

export function App() {
  return (
    <div className="flex-1">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-settings" element={<UserSettings />} />
      </Routes>
    </div>
  );
}
