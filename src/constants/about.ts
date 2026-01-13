import { BellRing, CheckCircle, Map, Users, Shield, Zap, Lock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// StatsSection
export interface StatItem {
    id: number;
    icon: LucideIcon;
    count: string;
    label: string;
    bg: string;
    text: string;
    border: string
}

export const STATS: StatItem[] = [
    {
        id: 1,
        icon: CheckCircle,
        count: "+500",
        label: "حالة تم العثور عليها",
        bg: "bg-green-100",
        text: "text-green-600",
        border: "border-green-600",
    },
    {
        id: 2,
        icon: Users,
        count: "+10k",
        label: "عضو في المجتمع",
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-600",
    },
    {
        id: 3,
        icon: BellRing,
        count: "120",
        label: "بلاغ نشط حالياً",
        bg: "bg-red-100",
        text: "text-red-600",
        border: "border-red-600",
    },
    {
        id: 4,
        icon: Map,
        count: "25",
        label: "مدينة مغطاة",
        bg: "bg-purple-100",
        text: "text-purple-600",
        border: "border-purple-600",
    },
];

// valuesSection

export type ValueItem = {
  id:number
  icon: LucideIcon;
  title: string;
  description: string;
};

export const VALUES:ValueItem[] = [
    {
        id:1,
        icon: Shield,
        title: "الأمان أولاً",
        description:
            "نتحقق من جميع البلاغات لضمان بيئة آمنة وخالية من الاحتيال.",
    },
    {
        id:2,
        icon: Users,
        title: "المسؤولية المجتمعية",
        description:
            "نحن جزء من هذا المجتمع، ونجاح المنصة يعتمد على تكافل الجميع.",
    },
    {
        id:3,
        icon: Zap,
        title: "السرعة والكفاءة",
        description:
            "نطور أدواتنا باستمرار لضمان وصول المعلومة لمن يحتاجها في ثوانٍ.",
    },
    {
        id:4,
        icon: Lock,
        title: "الخصوصية",
        description:
            "نحترم خصوصية المبلغين والمفقودين ونلتزم بأعلى معايير حماية البيانات.",
    },
];

