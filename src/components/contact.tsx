import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("جاري الإرسال...");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("to", "info@aldarbalbaed.com.ly");

    try {
      const res = await fetch("https://eratech.com.ly/send-form.php", {
        method: "POST",
        body: formData,
      });

      const text = await res.text();

      if (res.ok) {
        setStatus("تم إرسال رسالتك بنجاح!");
        (form as HTMLFormElement).reset();
      } else {
        console.error("Error submitting form:", text);
        setStatus(text || "حدث خطأ أثناء الإرسال");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setStatus("حدث خطأ أثناء الإرسال");
    }
  };

  return (
    <section
      id="contact"
      dir="rtl"
      className="relative py-40 bg-white text-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,197,94,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[url('/patterns/arabesque-grid.png')] opacity-[0.1]" />

      <div className="mx-auto max-w-7xl px-6 relative z-5">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-black tracking-tight text-center mb-20 text-green-600"
        >
          تواصل معنا
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="h-full bg-white/80 backdrop-blur-xl rounded-3xl border border-green-200 p-10 shadow-lg flex flex-col gap-6"
          >
            <input
              name="name"
              type="text"
              placeholder="الاسم الكامل"
              className="h-14 rounded-xl border border-green-300 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="البريد الإلكتروني"
              className="h-14 rounded-xl border border-green-300 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              name="phone"
              type="text"
              placeholder="رقم الهاتف"
              className="h-14 rounded-xl border border-green-300 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              name="message"
              placeholder="اكتب رسالتك هنا"
              className="h-40 rounded-xl border border-green-300 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>

            <button
              type="submit"
              className="h-14 rounded-xl bg-linear-to-l from-green-600 to-green-700 text-white font-semibold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition mt-auto"
            >
              إرسال
              <Send size={20} />
            </button>

            {status && (
              <p className="text-center mt-2 text-green-600">{status}</p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="h-full flex flex-col gap-6"
          >
            {/* Info Card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-green-200 p-10 shadow-lg flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-linear-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <a
                  href="tel:+218912186060"
                  dir="ltr"
                  className="text-lg font-medium tracking-tight underline text-gray-900"
                >
                  +218 91 218 6060
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-linear-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <a
                  href="mailto:info@aldarbalbaed.com.ly"
                  className="text-lg font-medium tracking-tight underline text-gray-900"
                >
                  info@aldarbalbaed.com.ly
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-linear-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div className="text-lg font-medium tracking-tight text-gray-900">
                  كرزاز - مصراتة - ليبيا
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-3xl overflow-hidden border border-green-200 shadow-lg flex-1">
              <iframe
                src="https://maps.google.com/maps?q=32.32614041014396,15.097577528089914&z=15&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
