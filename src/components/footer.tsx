import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="bg-gray-900 text-gray-200 py-16 border-t border-gray-800 mt-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <img
              src="/meta/logo-white.png"
              alt="Logo"
              className="w-70 h-auto"
            />
            <p className="text-gray-400 leading-relaxed">
              تأسست شركة الدرب البعيد لاستيراد الآلات والمستلزمات الزراعية وقطع
              غيارها لتكون شريكاً موثوقاً للمزارعين وأصحاب المشاريع الزراعية في
              ليبيا.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-white">تواصل معنا</h4>

            <div className="flex items-center gap-3">
              <Phone size={20} />
              <a
                href="tel:+218912186060"
                dir="ltr"
                className="text-gray-300 hover:text-white transition"
              >
                +218 91 218 6060
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={20} />
              <a
                href="mailto:info@aldarbalbaed.com.ly"
                className="text-gray-300 hover:text-white transition"
              >
                info@aldarbalbaed.com.ly
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={20} />
              <span className="text-gray-300">كرزاز - مصراتة - ليبيا</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-white">روابط سريعة</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#hero"
                  className="text-gray-300 hover:text-white transition"
                >
                  الصفحة الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition"
                >
                  من نحن
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-300 hover:text-white transition"
                >
                  المنتجات
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition"
                >
                  اتصل بنا
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} شركة الدرب البعيد — جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
