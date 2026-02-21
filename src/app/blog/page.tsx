import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "المدونة",
  description:
    "مقالات عن الأدب العربي، الروايات، الحب والوطن - مدونة يزن خولاني.",
};

const articles = [
  {
    slug: "best-arabic-novels-love-homeland",
    title: "أفضل روايات عربية عن الحب والوطن",
    excerpt: "استكشف أجمل الروايات العربية التي تجمع بين الحب والانتماء للوطن في نسيج أدبي فريد.",
  },
  {
    slug: "realistic-arabic-novels",
    title: "روايات عربية واقعية مؤثرة",
    excerpt: "رحلة في عالم الروايات الواقعية التي تلامس القلب وتعكس تجارب حقيقية.",
  },
  {
    slug: "meaning-of-homeland-arabic-literature",
    title: "معنى الوطن في الأدب العربي",
    excerpt: "كيف تناول الأدباء العرب مفهوم الوطن عبر العصور المختلفة.",
  },
  {
    slug: "why-we-love-sad-novels",
    title: "لماذا نحب الروايات الحزينة؟",
    excerpt: "تحليل نفسي لسبب انجذابنا للروايات التي تُبكينا وتؤثر فينا.",
  },
  {
    slug: "exile-in-modern-literature",
    title: "الغربة في الأدب الحديث",
    excerpt: "كيف عبّر الأدباء المعاصرون عن تجربة الغربة والاغتراب.",
  },
  {
    slug: "love-in-times-of-turmoil",
    title: "الحب في زمن الاضطرابات",
    excerpt: "الحب كملاذ وكفعل مقاومة في أوقات الأزمات.",
  },
  {
    slug: "literature-as-resistance",
    title: "الأدب كوسيلة مقاومة",
    excerpt: "دور الكلمة في مواجهة الظلم والتعبير عن الحقيقة.",
  },
  {
    slug: "realistic-novel-impact",
    title: "الرواية الواقعية وتأثيرها",
    excerpt: "لماذا تترك الروايات المستوحاة من الواقع أثرًا أعمق.",
  },
  {
    slug: "how-to-choose-impactful-novel",
    title: "كيف تختار رواية مؤثرة؟",
    excerpt: "نصائح لاختيار الروايات التي ستترك أثرًا في حياتك.",
  },
  {
    slug: "deepest-arabic-novels",
    title: "أكثر الروايات العربية عمقًا",
    excerpt: "جولة في أعماق الروايات العربية الأكثر تأثيرًا.",
  },
  {
    slug: "love-homeland-duality",
    title: "ثنائية الحب والوطن في الأدب",
    excerpt: "العلاقة المعقدة بين الحب الشخصي وحب الوطن في الأدب.",
  },
  {
    slug: "power-of-word-in-novel",
    title: "قوة الكلمة في الرواية",
    excerpt: "كيف تصبح الكلمات أسلحة وملاذات في عالم الرواية.",
  },
  {
    slug: "novels-that-leave-lasting-impact",
    title: "الروايات التي تترك أثرًا طويلًا",
    excerpt: "ما الذي يجعل بعض الروايات تبقى معنا للأبد.",
  },
  {
    slug: "psychological-reading-realistic-novel",
    title: "قراءة نفسية للرواية الواقعية",
    excerpt: "تحليل نفسي لتأثير الروايات الواقعية على القارئ.",
  },
  {
    slug: "memory-impact-literature",
    title: "أثر الذاكرة في الأدب",
    excerpt: "كيف تشكل الذاكرة جوهر الأعمال الأدبية.",
  },
  {
    slug: "why-reread-painful-novels",
    title: "لماذا نعود لقراءة الروايات المؤلمة؟",
    excerpt: "سر عودتنا المتكررة للروايات التي أبكتنا.",
  },
  {
    slug: "symbolism-arabic-novel",
    title: "الرمزية في الرواية العربية",
    excerpt: "استخدام الرموز والدلالات في الأدب العربي.",
  },
  {
    slug: "how-literature-changes-us",
    title: "كيف يغيّرنا الأدب؟",
    excerpt: "التأثير العميق للقراءة على شخصياتنا وحياتنا.",
  },
  {
    slug: "writing-between-reality-fiction",
    title: "الكتابة بين الواقع والخيال",
    excerpt: "الخط الرفيع بين الحقيقة والتخييل في الكتابة.",
  },
  {
    slug: "novel-as-mirror-society",
    title: "الرواية كمرآة للمجتمع",
    excerpt: "كيف تعكس الروايات واقع المجتمعات وتحولاتها.",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-amiri font-bold heading-primary mb-6">
            المدونة
          </h1>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            مقالات عن الأدب، الروايات، الحب والوطن
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-white border border-revolution-green/10 rounded-2xl p-6 hover:border-revolution-green/30 hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-amiri font-bold text-black group-hover:text-revolution-green transition-colors mb-3 leading-tight">
                {article.title}
              </h2>
              <p className="text-black/70 leading-relaxed">
                {article.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-revolution-green font-medium mt-4 group-hover:gap-3 transition-all">
                اقرأ المزيد
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
