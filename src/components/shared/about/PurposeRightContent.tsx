import Image from "next/image";

export default function PurposeRightContent() {
    return (
        <section className="w-full flex-1 space-y-8 ">
            <h2 className="text-2xl lg:text-4xl font-bold leading-tight">
                الدافع وراء كل ما نقوم به هو <span className="text-primary">الإنسانية</span>
            </h2>
            <p className="text-lg  leading-relaxed">
                نحن لا ندير مجرد موقع إلكتروني، بل ندير شبكة أمل. عندما يضيع شيء ثمين أو يغيب شخص عزيز، يكون الوقت هو العدو. نحن هنا لنجعل الوقت حليفاً من خلال التواصل الفوري.
            </p>
            <div className="w-full h-[45vh] sm:h-[55vh] lg:h-[70vh] relative rounded-2xl  overflow-hidden group">
                <Image
                    src="/about/mission.png"
                    alt="مهمتنا"
                    fill
                    sizes="100vw"
                    priority
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

            </div>



        </section>
    )
}