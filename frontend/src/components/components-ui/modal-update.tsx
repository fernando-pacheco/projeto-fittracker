import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Save, Trash2 } from "lucide-react";
import { FormEvent, ReactNode } from "react";

interface ModalUpdateProps {
    title: string
    description: string
    children: ReactNode
    onSubmit: (event: FormEvent<HTMLFormElement>) => void
    onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void
    isOpen: boolean
    onOpenChange: (open: boolean) => void
    icon: ReactNode
}

export function ModalUpdate({
    title,
    description,
    children,
    onSubmit,
    isOpen,
    onDelete,
    onOpenChange,
    icon,
}: ModalUpdateProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <button className='bg-zinc-800 rounded-md p-1 hover:bg-amber-600'>
                    {icon}
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px] bg-zinc-800 border-amber-600">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={onSubmit}>
                    <div className="grid gap-4 py-4">
                        {children}
                    </div>
                    <DialogFooter>
                        <Button onClick={onDelete} className="gap-2 bg-amber-800 hover:bg-amber-600">
                            <Trash2 className="size-5" />
                            Excluir
                        </Button>
                        <Button type="submit" className="gap-2 hover:bg-amber-600">
                            <Save className="size-5" />
                            Salvar
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}