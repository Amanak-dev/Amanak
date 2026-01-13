import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Hero() {
    return (
        <header className='w-full relative py-12 lg:py-20'>
            <div className="container px-4">
                            <div className="flex flex-col-reverse lg:flex-row gap-10 items-center ">
                {/* Hero Content */}
                <div className="flex-1 flex flex-col gap-6 ">
                    <div className="flex flex-col gap-4">
                        <span className="w-fit px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full ">قصتنا</span>
                        <h1 className="font-black text-4xl lg:text-7xl leading-tight tracking-[-0.033em]">نحن هنا لنعيد <span className="text-primary">الأمـل</span> ونجمع الشمـل</h1>
                        <p className=" text-lg lg:text-xl font-normal leading-relaxed ">
                            منصة مجتمعية رائدة سخرت التكنولوجيا لخدمة الإنسانية. مهمتنا مساعدة العائلات في العثور على أحبائهم واستعادة الممتلكات المفقودة بأسرع وقت، لأننا نؤمن أن كل دقيقة تصنع فرقاً.
                        </p>
                    </div>
                    {/* Buttons */}
                    <div className="flex gap-4 ">
                        <Button size={"lg"} className="text-lg">انضم لمجتمعنا</Button>
                        <Button size={"lg"} className=" text-lg transition-all " variant={'outline'}>تعرف على الفريق</Button>
                    </div>

                </div>

                {/* Hero Image  */}
                <div className="flex-1 w-full">
                    <div className="relative w-full h-[45vh] sm:h-[55vh] lg:h-[70vh] rounded-xl overflow-hidden shadow-2xl group ">
                        <Image
                            src="/about/hero.png"
                            alt="من نحن - أمانك"
                            fill
                            sizes="100vw"
                            priority
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                        
                        {/* Image Content */}
                        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-white max-w-[80%]">
                            <p className="font-bold sm:text-lg">قوة المجتمع</p>
                            <p className="text-xs sm:text-sm opacity-90">حيث يساهم الجميع في الأمان</p>
                        </div>

                    </div>
                </div>
            
            </div>
            </div>


        </header>
    )
}

