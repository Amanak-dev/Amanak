import { Card, CardContent } from "@/components/ui/card";
import { CircleCheck, FileCheck, Users } from "lucide-react";

const stats = [
  {
    icon: CircleCheck,
    value: "500+",
    label: "حالة عثور ناجحة",
  },

  {
    icon: Users,
    value: "10,000+",
    label: "متطوع نشط",
  },
  {
    icon: FileCheck,
    value: "98%",
    label: "بلاغ تم حله",
  },
];

export default function Status() {
  return (
    <section className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <Card key={index} className="w-full bg-secondary/50">
              <CardContent className="flex flex-col items-center justify-center gap-2 sm:gap-3 py-6 sm:py-8">
                <span className="bg-primary p-2 sm:p-3 text-white rounded-full">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </span>

                <span className="font-extrabold text-2xl sm:text-3xl md:text-4xl">{stat.value}</span>

                <p className="text-muted-foreground text-sm sm:text-base md:text-lg font-semibold text-center">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
