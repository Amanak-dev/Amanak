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
    <section className="grid grid-cols-3 gap-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <Card key={index} className="max-w-sm bg-secondary/50">
            <CardContent className="flex flex-col items-center justify-center gap-3">
              <span className="bg-primary p-3 text-white rounded-full">
                <Icon />
              </span>

              <span className="font-extrabold text-4xl">{stat.value}</span>

              <p className="text-muted-foreground text-lg font-semibold">
                {stat.label}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}
