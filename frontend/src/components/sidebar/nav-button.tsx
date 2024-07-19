import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { tv, VariantProps } from "tailwind-variants"

const buttonVariants = tv({
    base: 'flex gap-2 items-center justify-center rounded text-zinc-600 size-10 w-full h-8',
    variants: {
        variant: {
            primary: 'hover:text-zinc-200',
            secondary: 'text-yellow-300 hover:bg-yellow-300 hover:text-zinc-950',
            active: 'text-zinc-200 border-4 border-zinc-800 border-l-amber-600 shadow-left-inner'
        }
    },
    defaultVariants: {
        variant: 'primary'
    }
})

interface NavButtonProps extends VariantProps<typeof buttonVariants> {
    path: string
    icon: React.ReactElement
}

export function NavButton ({ 
    path, 
    icon,
    variant 
}: NavButtonProps) {
    const navigate = useNavigate()
    const location = useLocation()

    function handleNavigation() {
        navigate(path)
    }

    function isActive() {
        if (location.pathname === path) {
            return 'active'
        } else {
            return variant || 'primary'
        }
    }

    return (
        <button
            onClick={handleNavigation}
            className={buttonVariants({variant: isActive()})}
        >
            {icon}
        </button>
    )
}