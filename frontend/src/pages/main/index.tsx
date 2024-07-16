import { MainContent } from "./main-content";
import { SideBar } from "./sidebar";

export function MainInfo() {
    return (
        <div className="flex">
            <SideBar />
            <MainContent />
        </div>
    );
}
