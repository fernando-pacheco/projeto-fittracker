import { AreaChart, CalendarRange, Dumbbell, LayoutPanelTop, MessageSquareCode, Users } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import favicon from "../assets/favicon-logo-sf.png";

export function SideBar() {
    const navigate = useNavigate();

    function handleNavigation(path: string) {
        navigate(path);
    };

    return (
        <div className="w-72 flex flex-col justify-between">
            <div className="space-y-5">
                <button onClick={() => handleNavigation('/dashboard')} className="flex gap-2 items-center">
                    <img src={favicon} alt="favicon-logo" className="w-[36px] h-[48px]" />
                    <p className="text-yellow-300 font-bold text-2xl">
                        FIT-TRACK.ER
                    </p>
                </button>
                <nav className="space-y-5">
                    <button onClick={() => handleNavigation('/dashboard')} className="flex gap-2 items-center flex-1">
                        <AreaChart className="w-5 h-5" />
                        Dashboard
                    </button>
                    <button onClick={() => handleNavigation('/programs')} className="flex gap-2 items-center flex-1">
                        <Dumbbell className="w-5 h-5" />
                        Programas
                    </button>
                    <button onClick={() => handleNavigation('/groups')} className="flex gap-2 items-center flex-1">
                        <Users className="w-5 h-5" />
                        Grupos
                    </button>
                    <button onClick={() => handleNavigation('/templates')} className="flex gap-2 items-center flex-1">
                        <LayoutPanelTop className="w-5 h-5" />
                        Modelos
                    </button>
                    <button onClick={() => handleNavigation('/calendar')} className="flex gap-2 items-center flex-1">
                        <CalendarRange className="w-5 h-5" />
                        Calendario
                    </button>
                    <button onClick={() => handleNavigation('/chats')} className="flex gap-2 items-center flex-1">
                        <MessageSquareCode className="w-5 h-5" />
                        Chats
                    </button>
                </nav>
            </div>
            <div className="flex flex-col space-y-2">
                <button onClick={() => handleNavigation('/settings')} className="text-zinc-200 text-left">
                    Configurações
                </button>
                <button onClick={() => handleNavigation('/logout')} className="text-red-600 text-left">
                    Sair
                </button>
            </div>
        </div>
    );
}
