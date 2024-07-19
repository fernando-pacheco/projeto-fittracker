import { BarChart2, House, LayoutGrid, User, UserCog } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import favicon from '../../public/favicon-logo-sf.png';
import { NavButton } from './sidebar/nav-button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function SideBar() {
    const navigate = useNavigate();

    function handleNavigation(path: string) {
        navigate(path);
    }

    return (
        <div className="w-20 flex flex-col bg-zinc-800 rounded-3xl py-6">
            <div className="flex justify-between flex-col flex-1 items-center">
                <button onClick={() => handleNavigation('/home')} className="flex gap-2 items-center">
                    <img src={favicon} alt="favicon-logo" className="w-[50px] h-[62px]" />
                </button>
                <nav className="space-y-6 items-center w-full">
                    <NavButton path="/home" icon={<House />} />
                    <NavButton path="/programs" icon={<LayoutGrid />} />
                    <NavButton path="/perfil" icon={<User />} />
                    <NavButton path="/dashboard" icon={<BarChart2 />} />
                    <NavButton path="/user-settings" icon={<UserCog />} />
                </nav>
                <Avatar>
                    <AvatarImage className='w-10 h-10' src="https://github.com/shadcn.png" alt="@avatar" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    );
}