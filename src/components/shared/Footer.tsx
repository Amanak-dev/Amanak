import { Facebook, Linkedin, Twitter, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white pt-16 pb-8 border-t border-gray-100" dir="rtl">
            <div className="container px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-primary">
                            <ShieldCheck className="w-8 h-8" />
                            <span className="text-2xl font-black">أمانك</span>
                        </div>
                        <p className="text-gray-500 leading-relaxed max-w-xs">
                            نحن نبني مجتمعاً آمناً ومتصلاً. مهمتنا هي مساعدة الناس في العثور
                            على ما فقدوه من خلال قوة المجتمع.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-6 text-lg">روابط سريعة</h3>
                        <ul className="flex flex-col gap-4 text-gray-500">
                            <li>
                                <Link href="/about" className="hover:text-primary transition-colors">
                                    عن أمانك
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    كيف نعمل
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    الوظائف
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    المدونة
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-6 text-lg">الدعم</h3>
                        <ul className="flex flex-col gap-4 text-gray-500">
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    مركز المساعدة
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    شروط الخدمة
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    سياسة الخصوصية
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    اتصل بنا
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-6 text-lg">تابعنا</h3>
                        <div className="flex gap-4">
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-gray-100 text-center text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} أمانك. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
}
