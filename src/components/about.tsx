import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-28 md:py-36 bg-linear-to-b from-background via-muted/10 to-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,139,34,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.12),transparent_65%)] pointer-events-none" />
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-7"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
            من نحن
          </h2>
          <p className="text-base text-muted-foreground text-justify leading-relaxed">
            تأسست{" "}
            <span className="font-semibold text-foreground">
              شركة الدرب البعيد لاستيراد الآلات والمستلزمات الزراعية وقطع غيارها
            </span>{" "}
            لتكون شريكاً موثوقاً للمزارعين وأصحاب المشاريع الزراعية في ليبيا،
            حيث نحرص على توفير أحدث المعدات والآلات الزراعية، بالإضافة إلى
            المستلزمات وقطع الغيار الأصلية لضمان استمرارية وكفاءة العمل الزراعي.
          </p>

          <p className="text-base text-muted-foreground text-justify leading-relaxed">
            نؤمن في الدرب البعيد بأن نجاح الزراعة يعتمد على جودة المعدات
            والخدمات المصاحبة لها. لذلك نقدم خدمات متكاملة تشمل الاستيراد،
            الصيانة، الدعم الفني، والتدريب على استخدام الآلات، لنضمن لعملائنا
            تجربة مهنية وموثوقة في كل خطوة من عملهم الزراعي.
          </p>

          <a
            href="#contact"
            className="px-12 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
          >
            تواصل معنا
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-lg h-[460px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,139,34,0.15),transparent_70%)] blur-3xl rounded-full" />
            <div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-3xl overflow-hidden shadow-2xl border border-border">
              <img
                src="/images/about.png"
                alt="شركة الدرب البعيد لاستيراد الآلات والمستلزمات الزراعية"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-green-500/20 blur-2xl" />
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-black/20 blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
