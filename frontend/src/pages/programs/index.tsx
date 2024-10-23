import { ProgramBoard } from "@/components/program-board"

export function Programs() {
    return (
        <div className="flex flex-col gap-4 px-4 h-full rounded-3xl">
            <span className="text-xl">Programa de treinos</span>
            <ProgramBoard />
        </div>
    )
}
