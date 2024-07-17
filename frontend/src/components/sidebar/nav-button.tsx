import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { tv, VariantProps } from "tailwind-variants"

const buttonVariants = tv({
    base: 'flex gap-2 items-center flex-1 w-10/12 rounded p-2 ',
    variants: {
        variant: {
            primary: 'hover:bg-zinc-600',
            secondary: 'text-yellow-300 hover:bg-yellow-300 hover:text-zinc-950',
            active: 'bg-zinc-800'
        }
    },
    defaultVariants: {
        variant: 'primary'
    }
})

interface NavButtonProps extends VariantProps<typeof buttonVariants> {
    path: string
    icon: React.ReactElement
    label: string
}

export function NavButton ({ 
    path, 
    icon, 
    label, 
    variant 
}: NavButtonProps) {
    const navigate = useNavigate()
    const location = useLocation()

    function handleNavigation() {
        navigate(path);
    }

    function isActive() {
        if (location.pathname === path) {
            return 'active';
        } else {
            return variant || 'primary';
        }
    }

    return (
        <button
            onClick={handleNavigation}
            className={buttonVariants({variant: isActive()})}
        >
            {icon}
            {label}
        </button>
    )
}
