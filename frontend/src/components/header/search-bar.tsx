import { Search } from "lucide-react";

export function SearchBar() {
    return (
        <form className="group flex items-center rounded-xl bg-zinc-800 px-4 py-1 transition-all duration-300">
            <input
                placeholder="Pesquisa"
                className="w-0 bg-transparent outline-none transition-all duration-300 group-hover:w-52"
            />
            <button type="submit">
                <Search className="size-5 text-amber-600" />
            </button>
        </form>
    );
}
