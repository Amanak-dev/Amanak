import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { categories, FeatureCategory } from "@/constants/help_center";

export default function FeatureCategories() {
    return (
        <section className="py-12">
            <div className="container">
                <h2 className="text-2xl md:text-5xl font-bold leading-tight mb-4">تصفح حسب <span className="text-primary">الموضوع</span></h2>
                <p className="text-xl  opacity-70">اختر القسم الذي يتعلق باستفسارك للوصول السريع للإجابات</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                    {categories.map(({ id, icon: Icon, title, description }: FeatureCategory) => (
                        <Card className="bg-white rounded-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-xl" key={id}>
                            <CardContent className="flex flex-col gap-3">
                                <div className="w-11 h-11 rounded-xl bg-primary/30 text-primary flex items-center justify-center">
                                    <Icon size={22} />
                                </div>
                                <CardTitle className="font-bold text-xl">{title}</CardTitle>
                                <CardDescription className="text-slate-500 text-sm leading-relaxed font-medium">{description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

        </section>

    );
}
