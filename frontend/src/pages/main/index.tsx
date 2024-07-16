import { MainContent } from "./main-content";
import { SideBar } from "./sidebar";

export function MainInfo() {
    return (
        <div className="h-screen flex px-8 py-6">
            <SideBar />
            <MainContent />
        </div>
    );
}
