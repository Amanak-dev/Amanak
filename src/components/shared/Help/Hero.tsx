import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";


export default function Hero() {
    return (
        <header className="py-12 bg-linear-to-b from-primary to-primary/70">

            <div className="container flex flex-col items-center gap-5 text-center ">
                <h1 className="text-3xl md:text-5xl font-bold text-white "> مركز المساعدة والدعم</h1>
                <p className="text-lg font-normal text-white opacity-80 "> كيف يمكننا مساعدتك اليوم؟ ابحث في الأسئلة الشائعة أو تصفح المواضيع أدناه</p>
                <div className="w-full max-w-[560px] h-14 md:h-16 shadow-xl flex items-center justify-between gap-2 p-3 bg-white rounded-xl">
                    <Search size={22} className="text-primary"/>
                    <input type="text" className="flex-1  bg-transparent border-none  outline-0 h-full placeholder:text-slate-400 px-2 text-base font-normal leading-normal" placeholder="ابحث عن سؤالك هنا (مثلاً: كيفية الإبلاغ عن طفل)..." />
                    <Button className="rounded-xl" size={"lg"}>بحث</Button>
                </div>
            </div>

        </header>
    );
}
