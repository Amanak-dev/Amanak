import { Baby, FilePenLine, Megaphone, MessageSquareText, ScanFace, Smartphone, UserCog, UserSearch } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type FeatureCategory = {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
};

export const categories: FeatureCategory[] = [
    {
        id: 1,
        title: "الإبلاغ عن مفقود",
        description:
            "كيفية إضافة بلاغ جديد عن طفل مفقود، هاتف مسروق، أو وثائق ضائعة.",
        icon: Megaphone,
    },
    {
        id: 2,
        title: "البحث والمتابعة",
        description:
            "استخدام أدوات البحث المتقدمة، التعرف على الوجوه، وتلقي الإشعارات.",
        icon: UserSearch,
    },
    {
        id: 3,
        title: "إدارة الحساب",
        description:
            "تعديل الملف الشخصي، إعدادات الخصوصية، وحذف البلاغات المغلقة.",
        icon: UserCog,
    },
];

//FQA

export type FAQ_DATA = {
    id: number; 
    value:string;
    icon: LucideIcon;
    question: string;
    answer: string;
};

export const FAQS = [
    {
        id:1,
        value:'item-1',
        icon: Baby,
        question: "ما هي الخطوات الأولى عند فقدان طفل؟",
        answer:
            "يجب عليك أولاً إبلاغ الجهات الأمنية المختصة فوراً (الشرطة) للحصول على رقم محضر رسمي. بعد ذلك، يمكنك استخدام منصتنا لنشر صورة ومعلومات الطفل للمساعدة في البحث المجتمعي، مع التأكد من إرفاق صورة حديثة وواضحة.",
    },
    {
        id:2,
        value:'item-2',
        icon: Smartphone,
        question: "كيف يمكنني الإبلاغ عن هاتف مسروق؟",
        answer:
            'قم بالدخول إلى حسابك واختيار "إبلاغ عن مفقود" ثم اختر فئة "أجهزة إلكترونية". ستحتاج إلى إدخال الرقم التسلسلي (IMEI) وصورة للجهاز إن وجدت. يساعد هذا في مطابقة جهازك مع الأجهزة التي يتم العثور عليها.',
    },
    {
        id:3,
        value:'item-3',
        icon: ScanFace,
        question: "كيف أستخدم خاصية التعرف على الوجه؟",
        answer:
            "عند البحث عن شخص مفقود، يمكنك رفع صورة للشخص في خانة البحث. ستقوم خوارزمياتنا بمقارنة الصورة مع قاعدة بيانات المفقودين وإظهار النتائج المطابقة بنسبة عالية. هذه الخاصية متاحة فقط للحسابات الموثقة.",
    },
    {
        id:4,
        value:'item-4',
        icon: FilePenLine,
        question: "هل يمكنني تعديل البلاغ بعد نشره؟",
        answer:
            'نعم، يمكنك الذهاب إلى "حسابي" ثم "بلاغاتي". اختر البلاغ الذي تريد تعديله واضغط على زر التعديل. يمكنك تحديث الحالة (مفقود/تم العثور عليه) أو إضافة صور ومعلومات جديدة في أي وقت.',
    },
    {
        id:5,
        value:'item-5',
        icon: MessageSquareText,
        question: "كيف أتواصل مع الشخص الذي وجد مفقوداتي؟",
        answer:
            "يتم التواصل عبر نظام الرسائل الآمن داخل المنصة. عندما يبلغ شخص عن العثور على ممتلكات تطابق بلاغك، سيصلك إشعار ويمكنك بدء المحادثة لترتيب الاستلام. لا نشارك رقم هاتفك إلا بموافقتك.",
    },
];
