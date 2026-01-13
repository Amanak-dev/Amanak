"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex bg-background" dir="rtl">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-[440px] animate-slide-left">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">امانتك</h1>
            <p className="text-lg text-text-secondary">
              أهلاً بعودتك! سجّل الدخول للمتابعة
            </p>
          </div>

          {/* Sign In Form */}
          <form className="bg-surface p-8 rounded-2xl shadow-[0_8px_24px_rgba(26,31,58,0.12)]">
            <h2 className="text-2xl font-semibold mb-6 text-text-primary">
              تسجيل الدخول
            </h2>

            <div className="mb-5">
              <label htmlFor="email"> البريد الالكتروني</label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>

            <div className="mb-5">
              <label htmlFor="password">كلمة المرور</label>
              <Input id="password" type="password" placeholder="****" />
            </div>

            <div className="flex justify-end items-center mb-4">
              <Link
                href="/forgot-password"
                className="text-sm text-primary font-medium hover:text-secondary-light cursor-pointer "
              >
                نسيت كلمة المرور؟
              </Link>
            </div>

            <Button type="submit" className="mb-4 cursor-pointer w-full">
              دخول
            </Button>
            <Button
              type="button"
              className="mb-4 w-full border border-primary bg-white text-primary hover:bg-primary cursor-pointer hover:text-white"
            >
              Google
            </Button>
            <div className="text-center text-sm text-text-secondary">
              ليس لديك حساب؟
              <Link
                href="/register"
                className="text-primary font-medium hover:text-primary-light text-lg "
              >
                سجّل الآن
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
