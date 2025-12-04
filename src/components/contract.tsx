"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const contracts = [
  {
    title: "عقد استثمار مزرعة قرارة القطف - بني وليد",
    desc: "عقد استثمار رسمي بشأن استثمار مزرعة قرارة القطف ببني وليد، بما في ذلك شروط التشغيل، وإدارة الإنتاج، والمسؤوليات المالية والتنظيمية.",
    file: "/contract/1.pdf",
  },
];

const Contract = () => {
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

        <div className="space-y-4 max-w-3xl mx-auto">
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
      </div>
    </section>
  );
};

export default Contract;
