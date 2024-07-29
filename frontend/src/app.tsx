import { Routes, Route } from "react-router-dom";
import { Programs } from "./pages/programs";
import { Perfil } from "./pages/perfil";
import { UserSettings } from "./pages/user-settings";
import { Home } from "./pages/home";
import { Dashboard } from "./pages/dashboard";
import { Login } from "./pages/login";
import { Register } from "./pages/register";

export function App() {
  return (
    <div className="flex-1 h-full">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-settings" element={<UserSettings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
