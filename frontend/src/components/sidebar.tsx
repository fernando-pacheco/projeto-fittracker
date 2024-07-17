import { AreaChart, CalendarRange, Dumbbell, LayoutPanelTop, LogOut, MessageSquareCode, Settings, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import favicon from '../assets/favicon-logo-sf.png';
import { NavButton } from './sidebar/nav-button';

export function SideBar() {
    const navigate = useNavigate();

    function handleNavigation(path: string) {
        navigate(path);
    }

    return (
        <div className="w-72 flex flex-col justify-between">
            <div className="space-y-5">
                <button onClick={() => handleNavigation('/dashboard')} className="flex gap-2 items-center">
                    <img src={favicon} alt="favicon-logo" className="w-[36px] h-[48px]" />
                    <p className="text-yellow-300 font-bold text-2xl">
                        FIT-TRACK.ER
                    </p>
                </button>
                <nav className="space-y-2">
                    <NavButton path="/dashboard" icon={<AreaChart className="size-5" />} label="Dashboard" />
                    <NavButton path="/programs" icon={<Dumbbell className="size-5" />} label="Programas" />
                    <NavButton path="/groups" icon={<Users className="size-5" />} label="Grupos" />
                    <NavButton path="/templates" icon={<LayoutPanelTop className="size-5" />} label="Modelos" />
                    <NavButton path="/calendar" icon={<CalendarRange className="size-5" />} label="Calendário" />
                    <NavButton path="/chats" icon={<MessageSquareCode className="size-5" />} label="Chats" />
                </nav>
            </div>
            <div className="flex flex-col space-y-2">
                <NavButton path="/settings" icon={<Settings className="size-5" />} label="Configurações" />
                <NavButton path="/logout" variant="secondary" icon={<LogOut className="size-5" />} label="Sair" />
            </div>
        </div>
    );
}
