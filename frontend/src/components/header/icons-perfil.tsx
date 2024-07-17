import { Bell, BellPlus, CircleUserRound, Mail, MailPlus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function IconsPerfil() {
    const [notifications, setNotifications] = useState(false)
    const [emails, setEmails] = useState(false)
    const navigate = useNavigate()

    function toggleNotification() {
        setNotifications(!notifications)
    }

    function toggleEmails() {
        setEmails(!emails)
    }

    return (
        <div className="flex gap-8 items-center">
            <button onClick={toggleNotification}>
                {notifications ? (
                    <BellPlus className="text-yellow-300" />
                ) : (
                    <Bell />
                )}
            </button>
            <button onClick={toggleEmails}>
                {emails ? (
                    <MailPlus className="text-yellow-300" />
                ) : (
                    <Mail />
                )}
            </button>
            <div>
                <button onClick={() => navigate('/perfil')} className="flex gap-2 items-center">
                    Nome Sobrenome
                    <CircleUserRound />
                </button>
            </div>
        </div>
    )
}