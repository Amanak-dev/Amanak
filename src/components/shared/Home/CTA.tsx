"use client";

import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="bg-primary/70 rounded-[40px] p-10 md:p-16 text-center text-white shadow-xl relative overflow-hidden">
          {/* Background decoration*/}

          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              جاهز لتكون جزءاً من التغيير؟
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
              انضم اليوم لشبكة أمانك وساعد في جعل مجتمعنا أكثر أماناً للجميع.
              التطوع يبدأ بخطوة.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <Button size="lg" className="bg-primary">
                سجل الآن مجاناً
              </Button>
              <Button
                size="lg"
                variant={"outline"}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30"
              >
                تحميل التطبيق
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
