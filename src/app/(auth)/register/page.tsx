"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-row-reverse bg-background">
      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-[440px] animate-slide-right" dir="rtl">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">امانتك</h1>
            <p className="text-lg text-text-secondary">
              ادخل بياناتك ادناه للبدأ في استخدام المنصة
            </p>
          </div>

          {/* Sign Up Form */}
          <form className="bg-surface p-8 rounded-2xl shadow-[0_8px_24px_rgba(26,31,58,0.12)]">
            <h2 className="text-2xl font-semibold mb-6 text-text-primary">
              انشاء حساب جديد
            </h2>

            <div className="mb-5">
              <Label htmlFor="name" className="mb-2">اسم المستخدم</Label>
              <Input id="name" type="text" placeholder="ادخل اسم المستخدم" />
            </div>

            <div className="mb-5">
              <Label htmlFor="email" className="mb-2">البريد الالكتروني</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="mb-5">
              <Label htmlFor="password" className="mb-2">كلمة المرور</Label>
              <Input id="password" type="password" placeholder="*******" />
            </div>
            <div className="mb-5">
              <Label htmlFor="rePassword" className="mb-2">تأكيد كلمة المرور</Label>
              <Input id="rePassword" type="password" placeholder="********" />
            </div>

            <div className="mb-6">
              <Label className="flex items-start gap-2 text-sm text-text-secondary cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="mt-1 cursor-pointer"
                />
                <span>
                  اوافق علي الشروط والاحكام وسياسة الخصوصية الخاصة بالمنصة
                </span>
              </Label>
            </div>

            <Button type="submit" className="mb-4 w-full cursor-pointer">
              تسجيل حساب جديد
            </Button>
            <Button
              type="button"
              className="mb-4 w-full border border-primary bg-white text-primary hover:bg-primary cursor-pointer hover:text-white"
            >
              Google
            </Button>
            <div className="text-center text-sm text-text-secondary">
              هل لديك حساب بالفعل؟
              <Link
                href="/login"
                className="text-primary font-medium hover:text-secondary-light text-lg"
              >
                تسجيل الدخول
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
