import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] w-full bg-linear-to-t from-black/90 to-black/30 rounded-2xl sm:rounded-3xl md:rounded-[50px] overflow-hidden flex flex-col justify-center items-center text-white gap-4 sm:gap-6 md:gap-8 group px-4 sm:px-6">
      <Image
        src={"/home/hero.png"}
        alt="people image"
        fill
        className="object-cover -z-10 group-hover:scale-105 duration-300"
        sizes="100vw"
        priority
      />

      {/* Hero Details component */}
      <HeroDetails />

      {/* Hero Action Buttons component */}
      <ActionButtons />
    </header>
  );
}

function HeroDetails() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 text-center">
      <h1 className="font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl">امانك: مجتمعك هو حمايتك</h1>
      <p className="max-w-lg text-sm sm:text-base md:text-lg px-2">
        لمنصة الاولي للمساعدة في العثور على الاطفال المفقودين و الهواتف المسروقة
        بسرعة وكفاءة عبر شبكة مجتمعية متكاتفة.
      </p>
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto px-4 sm:px-0">
      <Button size={"lg"} className="w-full sm:w-auto md:text-base lg:text-lg">انضم الينا الان</Button>
      <Button
        size={"lg"}
        className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white transition-all md:text-base lg:text-lg"
      >
        شاهد فيديو
      </Button>
    </div>
  );
}
