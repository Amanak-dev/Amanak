import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative h-[60vh] w-full bg-linear-to-t from-black/90 to-black/30 rounded-[50px] overflow-hidden flex flex-col justify-center items-center text-white gap-8 group">
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
    <div className="flex flex-col justify-center items-center gap-8 text-center">
      <h1 className="font-extrabold text-6xl">امانك: مجتمعك هو حمايتك</h1>
      <p className="max-w-lg text-lg">
        لمنصة الاولي للمساعدة في العثور على الاطفال المفقودين و الهواتف المسروقة
        بسرعة وكفاءة عبر شبكة مجتمعية متكاتفة.
      </p>
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="flex gap-2">
      <Button size={"xl"}>انضم الينا الان</Button>
      <Button
        size={"xl"}
        className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white transition-all"
      >
        شاهد فيديو
      </Button>
    </div>
  );
}
