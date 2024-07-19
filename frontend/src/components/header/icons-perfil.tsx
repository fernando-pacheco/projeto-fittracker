import { Bell, BellPlus, Mail, MailPlus } from "lucide-react";
import { useState } from "react";

export function IconsPerfil() {
    const [notifications, setNotifications] = useState(false)
    const [emails, setEmails] = useState(false)

    function toggleNotification() {
        setNotifications(!notifications)
    }

    function toggleEmails() {
        setEmails(!emails)
    }

    return (
        <div className="flex gap-8 items-center h-full w-full">
            <button onClick={toggleNotification}>
                {notifications ? (
                    <BellPlus className="text-amber-600 bg-zinc-800 rounded-lg" />
                ) : (
                    <Bell className="text-zinc-200 rounded-lg bg-zinc-800" />
                )}
            </button>
            <button onClick={toggleEmails}>
                {emails ? (
                    <MailPlus className="size-5 rounded-lg text-amber-600 bg-zinc-800" />
                ) : (
                    <Mail className="text-zinc-200 size-5 rounded-lg bg-zinc-800" />
                )}
            </button>
        </div>
    )
}