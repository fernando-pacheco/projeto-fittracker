import { IconsPerfil } from "./header/icons-perfil";
import { SearchBar } from "./header/search-bar";

export function Header() {
    return (
        <div className="flex justify-between items-center">
            <SearchBar />
            <IconsPerfil />
        </div>
    )
}