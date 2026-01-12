"use client";

import Link from "next/link";
import { Users, Bell, MapPin, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Bell,
    title: "تنبيهات جغرافية فورية",
    description:
      "إرسال إشعارات فورية للمستخدمين في نطاق موقع الفقدان لسرعة الاستجابة وتقليل وقت البحث.",
    color: "bg-sky-100 text-sky-600",
  },
  {
    icon: Users,
    title: "شبكة بحث مجتمعية",
    description:
      "آلاف المتطوعين والأعضاء جاهزون للمساعدة في البحث والتبليغ فور وصول الإشعار.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: ShieldCheck,
    title: "سرية وخصوصية تامة",
    description:
      "نحافظ على بياناتك ومعلوماتك الشخصية بأعلى معايير الأمان، مع التحقق من هوية المبلغين.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: MapPin,
    title: "تتبع مباشر",
    description:
      "خريطة تفاعلية تظهر آخر المشاهدات وتحديثات الحالة بشكل لحظي للأعضاء المصرح لهم.",
    color: "bg-rose-100 text-rose-600",
  },
];

export default function Services() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-start">
          {/*  Services Grid */}
          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          {/*  Header Content */}
          <div className="lg:w-2/5 lg:sticky lg:top-24">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-600 text-sm font-medium mb-4">
              خدماتنا
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              كيف نساعدك
              <br />
              <span className="text-primary">في استعادة الأمان؟</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              نقدم حلولاً ذكية وسريعة لربطك بالمجتمع من حولك. تقنياتنا المتقدمة
              تضمن وصول صوتك لأكبر عدد ممكن من الأشخاص في الوقت المناسب.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
            >
              تعرف على المزيد
              <span className="text-lg">←</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  color,
}: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1">
      <div
        className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
