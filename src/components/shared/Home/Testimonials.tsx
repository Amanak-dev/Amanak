"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "أحمد المحمد",
        avatar: "/testimonials/avatar1.png",
        rating: 4,
        quote:
            "بفضل أمانك، عثرت على ابني في أقل من ساعة. سرعة استجابة المجتمع كانت مدهشة، لا أستطيع شكركم بما فيه الكفاية.",
    },
    {
        name: "سارة العلي",
        avatar: "/testimonials/avatar2.png",
        rating: 5,
        quote:
            "لم أتوقع استعادة هاتفي المسروق، لكن التنبيهات الفورية صنعت الفرق. تطبيق يعيد الثقة في الخير الموجود بالناس.",
    },
    {
        name: "خالد يوسف",
        avatar: "/testimonials/avatar3.png",
        rating: 5,
        quote:
            "تطبيق يعيد الأمان للقلوب. فكرة عبقرية وتنفيذ ممتاز، أنصح الجميع بتحميله ليكونوا جزءاً من شبكة الحماية.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-16 md:py-20 bg-gray-50">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        قصص صنعت الفرق
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                        نفخر بكوننا جزءاً من قصص نجاح أعادت الأمل والابتسامة للكثير من العائلات.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface TestimonialCardProps {
    name: string;
    avatar: string;
    rating: number;
    quote: string;
}

function TestimonialCard({ name, avatar, rating, quote }: TestimonialCardProps) {
    return (
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
            {/* User Info */}
            <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-gray-200">
                    <Image
                        src={avatar}
                        alt={name}
                        fill
                        className="object-cover"
                        sizes="56px"
                    />
                </div>
                <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base md:text-lg">{name}</h3>
                    {/* Star Rating */}
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-4 h-4 ${i < rating
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Quote */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                &quot;{quote}&quot;
            </p>
        </div>
    );
}
