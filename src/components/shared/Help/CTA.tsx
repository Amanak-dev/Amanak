import { Button } from "@/components/ui/button";
import { Headset, Mail } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="py-16 bg-primary/80 ">
            <div className="container flex flex-col md:flex-row items-center justify-center md:gap-4 lg:gap-48 p-8 md:p-5">
                {/* CTA Content */}
                <div className="flex flex-col gap-3">
                    <h2 className="text-2xl lg:text-3xl text-white font-black tracking-tight leading-tight">لم تجد الإجابة التي تبحث عنها؟</h2>
                    <p className="text-lg lg:text-xl text-gray-100 ">
                        فريق الدعم لدينا متاح 24/7 لمساعدتك في الحالات الطارئة.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3 mt-5">
                    <Button size={"xl"} >
                        <Link href={'/register'} className="flex items-center gap-3">
                            <Mail size={48}/>  

                            سجـل الآن
                        </Link>
                    </Button>

                    <Button asChild size={"xl"} variant={"outline"} className="flex items-center gap-3 ">
                        <Link href={'/'} className="flex items-center gap-3 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30">
                            <Headset />
                            محادثة مباشرة

                        </Link>
                    </Button>

                </div>

            </div>

        </section>
    );
}
