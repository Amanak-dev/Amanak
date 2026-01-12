import Hero from "@/components/shared/Home/Hero";
import Services from "@/components/shared/Home/Services";
import Status from "@/components/shared/Home/Status";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Main Content */}
      <main className="py-10">
        <Status />
        <Services />
      </main>
    </>
  );
}
