export function Summary() {
    return (
        <div className="h-full flex flex-col gap-4">
            <div className="flex h-1/2 gap-4">
                <div className="flex flex-col w-2/3 gap-4">
                    <div className="h-1/4 bg-zinc-800 rounded-3xl p-4">
                        Hello
                    </div>
                    <div className="flex flex-1 gap-4">
                        <div className="w-1/2 bg-zinc-800 rounded-3xl p-4">
                            Steps
                        </div>
                        <div className="bg-zinc-800 rounded-3xl p-4 flex-1">
                            Hydratation
                        </div>
                    </div>
                </div>
                <div className="bg-zinc-800 rounded-3xl p-4 flex-1">
                    AI Calorie Intake
                </div>
            </div>
            <div className="flex flex-row flex-1 gap-4">
                <div className="w-1/3 bg-zinc-800 rounded-3xl p-4 h-full">
                    Upcoming
                </div>
                <div className="bg-zinc-800 rounded-3xl p-4 flex-1 h-full">
                    Shadow Score
                </div>
            </div>
        </div>
    );
}
