import { Search } from "lucide-react";

export function SearchBar() {
    return (
        <form className="w-[500px] flex gap-2 rounded-full bg-zinc-800 items-center px-4 py-1">
            <input
                // disabled={true}
                placeholder="Pesquisa"
                className="w-full bg-transparent outline-none"
                />
            <button type="submit">
                <Search className="size-5 text-yellow-300" />
            </button>
        </form>
    )
}