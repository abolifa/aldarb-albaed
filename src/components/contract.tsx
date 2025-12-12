"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FileText, X, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

const contracts = [
  {
    title: "عقد استثمار مزرعة قرارة القطف - بني وليد",
    desc: "عقد استثمار رسمي بشأن استثمار مزرعة قرارة القطف ببني وليد، بما في ذلك شروط التشغيل، وإدارة الإنتاج، والمسؤوليات المالية والتنظيمية.",
    file: "/contract/1.pdf",
  },
];

const images = [
  "/projects/1.jpeg",
  "/projects/2.jpeg",
  "/projects/17.jpeg",
  "/projects/3.jpeg",
  "/projects/4.jpeg",
  "/projects/5.jpeg",
  "/projects/6.jpeg",
  "/projects/7.jpeg",
  "/projects/8.jpeg",
  "/projects/9.jpeg",
  "/projects/10.jpeg",
  "/projects/11.jpeg",
  "/projects/12.jpeg",
  "/projects/13.jpeg",
  "/projects/14.jpeg",
  "/projects/15.jpeg",
  "/projects/16.jpeg",
  "/projects/18.jpeg",
  "/projects/19.jpeg",
  "/projects/20.jpeg",
  "/projects/21.jpeg",
];

const Contract = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const next = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  };

  const prev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  };

  return (
    <section
      id="contract"
      className="relative w-full py-20 md:py-26 bg-linear-to-b from-background via-muted/10 to-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,139,34,0.12),transparent_65%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-green-700 text-center mb-4"
        >
          عقود الشركة الرسمية
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-2xl mx-auto text-center leading-relaxed mb-16 text-lg"
        >
          مجموعة العقود المعتمدة رسمياً.
        </motion.p>

        <div className="space-y-4 w-full mx-auto">
          {contracts.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="flex items-center justify-between bg-white dark:bg-muted border border-green-300 rounded-xl p-5 shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <FileText className="w-8 h-8 text-green-600" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={c.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-green-600 text-white font-medium text-sm hover:bg-green-700 transition"
                >
                  عرض
                </a>

                <a
                  href={c.file}
                  download
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full border border-green-600 text-green-700 font-medium text-sm hover:bg-green-600 hover:text-white transition"
                >
                  تحميل
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt=""
              onClick={() => setLightboxIndex(i)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="w-full h-72 object-cover rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-9999 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full max-w-4xl flex items-center justify-center">
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/40 hover:bg-black/60 transition"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={prev}
                className="absolute left-2 md:left-4 text-white p-3 rounded-full bg-black/40 hover:bg-black/60 transition"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>

              <button
                onClick={next}
                className="absolute right-2 md:right-4 text-white p-3 rounded-full bg-black/40 hover:bg-black/60 transition"
              >
                <ChevronRight className="w-7 h-7" />
              </button>

              <motion.img
                key={lightboxIndex}
                src={images[lightboxIndex]}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="max-h-[85vh] max-w-full rounded-lg shadow-xl object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contract;
