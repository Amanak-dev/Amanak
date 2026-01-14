import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { VALUES, ValueItem } from "@/constants/about";

export default function ValuesSection() {
    return (
        <section className="py-16 bg-white ">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">ما نؤمن به</h2>
            <p className="text-gray-500 font-semibold text-center">قيمنا هي البوصلة التي توجهنا في كل خطوة ومبادرة.</p>
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
                {VALUES.map(({ id, icon: Icon, title, description }: ValueItem) => {
                    return (
                        <Card key={id} className="transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                            <CardContent className="flex flex-col gap-4">
                                <Icon size={36} className="text-primary" />
                                <CardTitle className="font-bold text-xl">{title}</CardTitle>
                                <CardDescription className="font-bold ">{description}</CardDescription>
                            </CardContent>
                        </Card>
                    )

                }

                )}
            </div>
        </section>
    );
}
