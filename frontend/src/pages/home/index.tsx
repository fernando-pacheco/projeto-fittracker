import { HomeTabs } from "@/components/home-tab/tabs";
import { CarouselPlugin } from "./carousel";


export function Home() {
    return (
        <div className="bg-zinc-900 flex h-full space-x-1">
            <HomeTabs />
            <div className="flex w-1/4 items-center justify-end">
                <CarouselPlugin />
            </div>
        </div>
    );
}
