import { Megaphone, UserCog, UserSearch } from "lucide-react";
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