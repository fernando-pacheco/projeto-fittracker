import { useState } from 'react';
import { Root, List, Trigger, Content } from "@radix-ui/react-tabs";
import { Separator } from "../ui/separator";
import { Header } from "../header";
import { Summary } from './tab/summary';

export function HomeTabs() {
    const [selectedValue, setSelectedValue] = useState("summary");

    const selectTabStyle = (value: string) => (
        `px-4 pb-6 rounded border-4 text-zinc-500 hover:text-zinc-100 ${selectedValue === value ?
            'border-zinc-900 text-zinc-100 border-b-amber-600 shadow-bottom-inner' :
            'border-transparent'}`
    );

    return (
        <Root
            className="flex flex-1 flex-col h-full"
            value={selectedValue}
            onValueChange={setSelectedValue}
            defaultValue="summary"
        >
            <List className="flex justify-between ml-10 mt-5">
                <div className="flex space-x-20">
                    <Trigger
                        value="summary"
                        className={selectTabStyle('summary')}
                    >
                        Resumo
                    </Trigger>
                    <Trigger
                        value="programs"
                        className={selectTabStyle('programs')}
                    >
                        Programas
                    </Trigger>
                    <Trigger
                        value="nutrition"
                        className={selectTabStyle('nutrition')}
                    >
                        Nutrição
                    </Trigger>
                    <Trigger
                        value="ai-coach"
                        className={selectTabStyle('ai-coach')}
                    >
                        AI Coach
                    </Trigger>
                    <Trigger
                        value="metrics"
                        className={selectTabStyle('metrics')}
                    >
                        Medidas
                    </Trigger>
                </div>
                <div>
                    <Header />
                </div>
            </List>

            <Separator className="bg-zinc-800 size-0.5 w-full" />

            <div className="flex-1 flex flex-col pt-4 pl-4 h-full">
                <Content value="summary" className="flex-1 h-full">
                    <Summary />
                </Content>

                <Content value="programs" className="flex-1 h-full">
                    Programas de treino
                </Content>

                <Content value="nutrition" className="flex-1 h-full">
                    Nutrição
                </Content>
                <Content value="ai-coach" className="flex-1 h-full">
                    AI Coach
                </Content>
                <Content value="metrics" className="flex-1 h-full">
                    Medidas
                </Content>
            </div>
        </Root>
    );
}
