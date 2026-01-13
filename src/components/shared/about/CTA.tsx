import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="py-16 bg-primary/80 ">
            <div className="container flex flex-col items-center justify-center gap-6 ">
                 {/* CTA Content */}
                <h2 className="text-3xl lg:text-5xl text-white font-black tracking-tight leading-tight">كن بطلاً في قصة أحدهم</h2>
                <p className="text-lg lg:text-xl text-gray-100 max-w-[570px] text-center">
                    مساهمتك قد تكون السبب في إعادة البسمة لعائلة أو استعادة حق ضائع. لا تتردد في أن تكون جزءاً من الحل.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex gap-3 mt-5">
                    <Button asChild size={"lg"} className="text-lg">
                        <Link href={'/register'}>سجـل الآن</Link>
                    </Button>
                    <Button asChild size={"lg"} variant={"outline"}>
                        <Link href={'/'} className="text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30">بلغ عن مفقود</Link>
                    </Button>

                </div>

            </div>

        </section>
    );
}
