import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { MISSION_DATA } from "@/constants/about";
import { CheckCircle, Star } from "lucide-react";

export default function CoreValues() {
    const { valuesTitle, values } = MISSION_DATA;

    return (
        <Card className="bg-primary py-12">
            <CardContent className="flex flex-col gap-4">
                <CardTitle className="text-white text-2xl flex items-center gap-2">
                    <Star fill="white" />
                    {valuesTitle}
                </CardTitle>
                <ul className="flex flex-col gap-3">
                    {values.map((value, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <span className=" rounded-2xl p-1 bg-white/20">
                                <CheckCircle size={18} className="text-white" />
                            </span>
                            <CardDescription className="text-white font-bold">{value}</CardDescription>
                        </li>

                    ))}
                </ul>

            </CardContent>
        </Card>
    );
}
