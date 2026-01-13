"use client";

import { Separator } from "@/components/ui/separator";
import { HandHeart } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isSignIn = pathname.split("/").includes("login");

  return (
    <div
      className={`flex bg-background ${isSignIn ? "h-screen" : "min-h-screen"}`}
    >
      {/* Form */}
      <div
        className={`flex-1 flex items-center justify-center p-8
        ${isSignIn ? "order-1" : "order-2"}`}
      >
        {children}
      </div>

      {/* Image */}
      {/* Left Side - Image/Brand Section */}
      <div
        className={`hidden lg:flex flex-1 bg-secondary items-center justify-center  relative overflow-hidden ${
          isSignIn ? "order-2" : "order-1"
        }`}
      >
        <div className="relative  h-full w-full">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwFSQSzrq8U3c5_zJB3kKGLElsAAtOfUEBXjshricLx1Q3_2vyMyNvjwniFPqNqViHecLzum0F9fpmfWstKMSTmYBNEiiR2IIpnkvFOVJjZVIAWb_vMbraWyTLqGm5IOpb9H8RqKuM3L80GXuX_NsIHJbxDunASGEhlb_B5xd6SoYWkzS-qFwAbc-ghE385RN87IIGRc6EFWOQJO8SYGg2G0asdr8gAfIrsiLWZmeV4dWrq5AQBzCI4UzTY-ID-R3tQmlnhT2JUlw"
            alt="Sign Up Image"
            fill
            className="object-cover"
          />
          {/* gradient layout  */}
          <div className="absolute inset-0 bg-linear-to-t from-[#137fec]/90 to-transparent mix-blend-multiply"></div>
          {/* Brand Section */}
          <div
            className="text-white flex flex-col justify-end align-bottom h-full p-12 space-y-4 absolute inset-0"
            dir="rtl"
          >
            <div className="bg-gray-400 rounded-lg w-fit p-1">
              <HandHeart size={40} absoluteStrokeWidth />
            </div>
            <h2 className="font-bold text-2xl">معا نعيد الامل</h2>
            <p className="text-[#C5DAED] text-lg max-w-md">
              انضم الي الاف المتطوعين وساعد في اعادة المفقودات لاصحابها. كل
              معلومة تساهم في صناعة فرق
            </p>
            <Separator className="bg-border/60" />
            <div className="flex gap-3">
              <div className="flex flex-col">
                <span className="font-bold text-xl">10K+</span>
                <span className="text-[#C5DAED] text-sm">غرض تم ايجاده</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl">500+</span>
                <span className="text-[#C5DAED] text-sm">متطوع نشط</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
