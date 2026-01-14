import { BellRing, CheckCircle, Map, Users, Shield, Zap, Lock, Eye, Rocket,Lightbulb,Globe, Smile } from "lucide-react";
import type { LucideIcon } from "lucide-react";


// Stats Section
export interface StatItem {
    id: number;
    icon: LucideIcon;
    count: string;
    label: string;
    bg: string;
    textColor: string;
    border: string
}

export const STATS: StatItem[] = [
    {
        id: 1,
        icon: CheckCircle,
        count: "+500",
        label: "حالة تم العثور عليها",
        bg: "bg-green-100",
        textColor: "text-green-600",
        border: "border-green-600",
    },
    {
        id: 2,
        icon: Users,
        count: "+10k",
        label: "عضو في المجتمع",
        bg: "bg-blue-100",
        textColor: "text-blue-600",
        border: "border-blue-600",
    },
    {
        id: 3,
        icon: BellRing,
        count: "120",
        label: "بلاغ نشط حالياً",
        bg: "bg-red-100",
        textColor: "text-red-600",
        border: "border-red-600",
    },
    {
        id: 4,
        icon: Map,
        count: "25",
        label: "مدينة مغطاة",
        bg: "bg-purple-100",
        textColor: "text-purple-600",
        border: "border-purple-600",
    },
];

// Mission Section
export type MissionCard = {
    id: string;
    icon: LucideIcon;
    title: string;
    content: string;
};

export type MissionContent = {
    cards: MissionCard[];
    valuesTitle: string;
    values: string[];
};

export const MISSION_DATA: MissionContent = {
    cards: [
        {
            id: "vision",
            icon: Eye,
            title: "رؤيتنا",
            content:
                "أن نصبح المرجع الأول والأكثر موثوقية في المنطقة للمساعدة في حالات الفقدان، وخلق مجتمع واعٍ ومترابط يساهم بفاعلية في حماية أفراده وممتلكاتهم."
        },
        {
            id: "mission",
            icon: Rocket,
            title: "رسالتنا",
            content:
                "توظيف أحدث التقنيات لربط المفقودات بأصحابها بأسرع وقت، وتوفير أدوات سهلة وفعالة للإبلاغ والبحث، مع الحفاظ على خصوصية وأمن بيانات المستخدمين."
        }
    ],
    valuesTitle: "قيمنا الأساسية",
    values: [
        "الشفافية والمصداقية في كل بلاغ",
        "سرعة الاستجابة والتحرك الفوري",
        "الخصوصية وأمان المعلومات"
    ]
};


// values Section

export type ValueItem = {
    id: number
    icon: LucideIcon;
    title: string;
    description: string;
};

export const VALUES: ValueItem[] = [
    {
        id: 1,
        icon: Shield,
        title: "الأمان أولاً",
        description:
            "نتحقق من جميع البلاغات لضمان بيئة آمنة وخالية من الاحتيال.",
    },
    {
        id: 2,
        icon: Users,
        title: "المسؤولية المجتمعية",
        description:
            "نحن جزء من هذا المجتمع، ونجاح المنصة يعتمد على تكافل الجميع.",
    },
    {
        id: 3,
        icon: Zap,
        title: "السرعة والكفاءة",
        description:
            "نطور أدواتنا باستمرار لضمان وصول المعلومة لمن يحتاجها في ثوانٍ.",
    },
    {
        id: 4,
        icon: Lock,
        title: "الخصوصية",
        description:
            "نحترم خصوصية المبلغين والمفقودين ونلتزم بأعلى معايير حماية البيانات.",
    },
];


// TimeLine Section
export type TimelineStep = {
    id: number;
    year: string;
    title: string;
    description: string;
    icon: LucideIcon;
};

export const TIMELINE_STEPS: TimelineStep[] = [
    {
        id: 1,
        year: "2025",
        title: "بداية الفكرة",
        description:
            "انطلقت الفكرة عندما لاحظ المؤسسون صعوبة العثور على طفل مفقود في الحي، مما ألهمهم لإنشاء حل رقمي يجمع الجيران.",
        icon: Lightbulb
    },
    {
        id: 2,
        year: "2026",
        title: "إطلاق المنصة التجريبي",
        description:
            "تم إطلاق النسخة الأولى في مدينة واحدة، وسرعان ما انضم أكثر من 400 عضو في الشهر الأول.",
        icon: Rocket
    },
    {
        id: 3,
        year: "2026",
        title: "أول قصة نجاح كبرى",
        description:
            "احتفلنا بعودة طفل لعائلته خلال 3 ساعات فقط من نشر البلاغ بفضل تفاعل المجتمع.",
        icon: Smile
    },
    {
        id: 4,
        year: "2026 - اليوم",
        title: "التوسع والنمو",
        description:
            "توسعت الشبكة لتغطي معظم المدن الكبرى، مع إضافة ميزات الذكاء الاصطناعي للتعرف على الصور.",
        icon: Globe
    }
];


// Members Section
export type TeamMember = {
    id: number,
    name: string;
    role: string;
    stack: "Frontend" | "Backend";
    image: string;
    bio: string;
};

export const TEAM: TeamMember[] = [
    {
        id: 1,
        name: "مازن محمد",
        role: "Frontend Developer",
        stack: "Frontend",
        image: "/about/member1.png",
        bio: "يقود تطوير واجهات المستخدم مع تركيز على التجربة، الأداء، وتحويل الأفكار المعقدة إلى حلول بسيطة."
    },
    {
        id: 2,
        name: "سامح يسرى",
        role: "Backend Developer",
        stack: "Backend",
        image: "/about/member3.png",
        bio: "مسؤول عن بناء الأنظمة الخلفية القوية وضمان استقرار الأداء ومعالجة البيانات بكفاءة."
    },
    {
        id: 3,
        name: "محمد فكري",
        role: "Backend Developer",
        stack: "Backend",
        image: "/about/member1.png",
        bio: "يعمل على تصميم وتطوير الـ APIs وربط الأنظمة المختلفة مع التركيز على الأمان وقابلية التوسع."
    },
    {
        id: 4,
        name: "مارينا طارق",
        role: "Frontend Developer",
        stack: "Frontend",
        image: "/about/member2.png",
        bio: "متخصصة في بناء واجهات عصرية ومتجاوبة، مع تركيز قوي على التفاصيل البصرية وسلاسة التفاعل."
    },
    {
        id: 5,
        name: "ابانوب عبدالمسيح",
        role: "Frontend Developer",
        stack: "Frontend",
        image: "/about/member3.png",
        bio: "يهتم بتحسين تجربة المستخدم وتنفيذ الواجهات بدقة عالية مع مراعاة الأداء وإمكانية التوسع."
    },

];
