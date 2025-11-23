import { motion } from "framer-motion";

const Products = () => {
  const categories = [
    {
      title: "الجرارات وقطع غيارها",
      description:
        "نوفر أحدث أنواع الجرارات وقطع الغيار الأصلية لضمان كفاءة الأداء واستمرارية العمل الزراعي.",
      icon: "/products/tractor.webp",
    },
    {
      title: "الآلات الزراعية ومستلزماتها",
      description:
        "مجموعة واسعة من الآلات والمعدات الزراعية لتلبية جميع احتياجات المزارعين والمحاصيل المختلفة.",
      icon: "/products/farm-machine.png",
    },
    {
      title: "أنظمة الري الحديثة",
      description:
        "حلول ري متقدمة وموفرة للمياه لضمان نمو المحاصيل بكفاءة عالية مع تقليل الهدر.",
      icon: "/products/irrigation.png",
    },
    {
      title: "المبيدات والأسمدة والمواد الزراعية",
      description:
        "نوفر أفضل المبيدات والأسمدة لضمان حماية النباتات وتحقيق إنتاجية عالية.",
      icon: "/products/fert.png",
    },
    {
      title: "معدات التخزين والنقل الزراعي",
      description:
        "معدات موثوقة لتخزين ونقل المحاصيل والمواد الزراعية بأمان وفعالية.",
      icon: "/products/tank.png",
    },
    {
      title: "الخدمات الفنية والدعم الزراعي",
      description:
        "فريق متخصص يقدم الدعم الفني والاستشارات لضمان استخدام أمثل للآلات والمعدات.",
      icon: "/products/support.png",
    },
  ];

  return (
    <section
      id="products"
      className="relative w-full py-28 md:py-36 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-12"
        >
          منتجاتنا وخدماتنا
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-5">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-muted p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-5">
                <img
                  src={cat.icon}
                  alt={cat.title}
                  className="w-64 h-64 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {cat.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
