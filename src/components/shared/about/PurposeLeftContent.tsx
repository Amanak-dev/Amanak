import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { MISSION_DATA, MissionCard } from "@/constants/about";
import CoreValues from "./CoreValues";

export default function PurposeLeftContent(){
    return(
        <aside className="flex flex-1 flex-col gap-4 ">
            {/* Mission & Vission Content */}
            {MISSION_DATA.cards.map(({id,icon:Icon,title,content}:MissionCard)=>(
                <Card key={id} className="py-12 rounded-xl bg-white transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="flex flex-col gap-3">
                        <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-xl">
                            <Icon size={28} className="text-primary"/>
                        </div>
                        <CardTitle className="font-bold text-xl">{title}</CardTitle>
                        <CardDescription className="font-bold">{content}</CardDescription>
                    </CardContent>
                </Card>
                

            ))}
            {/* Core Values Content */}
            <CoreValues/>

        </aside>
    )
}