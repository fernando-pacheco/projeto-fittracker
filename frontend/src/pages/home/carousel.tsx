import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 10000, stopOnInteraction: false })
    );

    return (
        <Carousel
            plugins={[plugin.current]}
            className="h-full w-[430px] max-w-[435px] bg-zinc-800 flex-1 rounded-3xl"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="h-full flex-1">
                            <Card className="h-full bg-zinc-200">
                                <CardContent className="flex h-full aspect-square items-center justify-center p-0.5">
                                    {/* <img className="rounded-xl" src="https://blogdoiphone.com/wp-content/uploads/2020/10/iPhone-12-white-light-wallpaper.png" alt="img" /> */}
                                    <span className="text-zinc-800 font-bold text-5xl">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="bg-zinc-900 border-none hover:text-amber-600 hover:bg-transparent" />
            <CarouselNext className="bg-zinc-900 border-none hover:text-amber-600 hover:bg-transparent" />
        </Carousel>
    );
}
