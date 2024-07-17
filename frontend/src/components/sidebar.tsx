import { AreaChart, CalendarRange, Dumbbell, LayoutPanelTop, LogOut, MessageSquareCode, Settings, Users } from "lucide-react";
import { useNavigate, useLocation } from 'react-router-dom';
import favicon from "../assets/favicon-logo-sf.png";

export function SideBar() {
    const navigate = useNavigate();
    const location = useLocation();

    function handleNavigation(path: string) {
        navigate(path);
    }

    function getNavButtonClass(path: string) {
        return `flex gap-2 items-center flex-1 w-10/12 rounded p-2 ${location.pathname === path ? 'bg-zinc-800 rounded' : ''}`;
    }

    return (
        <div className="w-72 flex flex-col justify-between">
            <div className="space-y-4">
                <button onClick={() => handleNavigation('/dashboard')} className="flex gap-2 items-center">
                    <img src={favicon} alt="favicon-logo" className="w-[36px] h-[48px]" />
                    <p className="text-yellow-300 font-bold text-2xl">
                        FIT-TRACK.ER
                    </p>
                </button>
                <nav className="space-y-2">
                    <button onClick={() => handleNavigation('/dashboard')} className={getNavButtonClass('/dashboard')}>
                        <AreaChart className="size-5" />
                        Dashboard
                    </button>
                    <button onClick={() => handleNavigation('/programs')} className={getNavButtonClass('/programs')}>
                        <Dumbbell className="size-5" />
                        Programas
                    </button>
                    <button onClick={() => handleNavigation('/groups')} className={getNavButtonClass('/groups')}>
                        <Users className="size-5" />
                        Grupos
                    </button>
                    <button onClick={() => handleNavigation('/templates')} className={getNavButtonClass('/templates')}>
                        <LayoutPanelTop className="size-5" />
                        Modelos
                    </button>
                    <button onClick={() => handleNavigation('/calendar')} className={getNavButtonClass('/calendar')}>
                        <CalendarRange className="size-5" />
                        Calendario
                    </button>
                    <button onClick={() => handleNavigation('/chats')} className={getNavButtonClass('/chats')}>
                        <MessageSquareCode className="size-5" />
                        Chats
                    </button>
                </nav>
            </div>
            <div className="flex flex-col space-y-2">
                <button onClick={() => handleNavigation('/settings')} className={`text-zinc-200 text-left flex items-center gap-2 w-10/12 rounded p-2 ${location.pathname === '/settings' ? 'bg-zinc-800' : ''}`}>
                    <Settings className="size-5" />
                    Configurações
                </button>
                <button onClick={() => handleNavigation('/logout')} className={'text-red-600 text-left flex items-center gap-2 w-10/12 rounded p-2'}>
                    <LogOut className="size-5" />
                    Sair
                </button>
            </div>
        </div>
    );
}
