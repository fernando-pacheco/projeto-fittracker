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
import { CirclePlus, Save } from "lucide-react";
import { FormEvent, ReactNode } from "react";

interface ModalRegisterProps {
    buttonTitle: string;
    title: string;
    description: string;
    children: ReactNode;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    key: string
}

export function ModalRegister({
    buttonTitle,
    title,
    description,
    children,
    onSubmit,
    isOpen,
    onOpenChange,
    key,
}: ModalRegisterProps) {
    return (
        <Dialog key={key} open={isOpen} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <Button className='flex bg-zinc-800 gap-2 items-center p-2 border rounded-md hover:bg-amber-600'>
                    <CirclePlus className='size-5' />
                    {buttonTitle}
                </Button>
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