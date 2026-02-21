import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";

interface Article {
  slug: string;
  title: string;
  content: string;
}

const articles: Article[] = [
  {
    slug: "best-arabic-novels-love-homeland",
    title: "أفضل روايات عربية عن الحب والوطن",
    content: `الأدب العربي غني بالروايات التي تجمع بين الحب والوطن في نسيج واحد. هذه الروايات لا تتحدث عن الحب كعاطفة منعزلة، بل كموقف وجودي مرتبط بالأرض والهوية والانتماء.

## الحب كامتداد للوطن

في كثير من الروايات العربية، نجد أن الحب الشخصي يصبح رمزًا للحب الأكبر - حب الوطن. البطل لا يحب فقط شخصًا، بل يحب من خلاله كل ما يمثله من قيم وذكريات وأحلام.

## روايات تستحق القراءة

الأدب العربي الكلاسيكي والمعاصر قدم لنا روايات خالدة تجمع بين الحب والنضال. روايات مثل "في حبّك ثار الوطن" تقدم هذا المزج بين الشخصي والوطني بشكل معاصر ومؤثر.

## الخلاصة

الروايات التي تجمع بين الحب والوطن هي من أعمق ما كُتب في الأدب العربي. إنها تذكرنا بأن الحب ليس ترفًا، بل هو جزء من هويتنا ووجودنا.`,
  },
  {
    slug: "realistic-arabic-novels",
    title: "روايات عربية واقعية مؤثرة",
    content: `الرواية الواقعية في الأدب العربي تحمل قوة خاصة. إنها لا تكتفي بسرد قصة، بل تنقل تجربة حية يمكن للقارئ أن يشعر بها.

## قوة الواقعية

الروايات الواقعية تستمد قوتها من صدقها. حين يكتب الكاتب من تجربة حقيقية، تنتقل هذه الحقيقة إلى الكلمات وتصل إلى القارئ بشكل مباشر.

## خصائص الرواية الواقعية المؤثرة

أهم ما يميز الرواية الواقعية هو الصدق العاطفي والتفاصيل الحية والشخصيات المعقدة.

## أمثلة من الأدب العربي المعاصر

روايات مثل "في حبّك ثار الوطن" تقدم نموذجًا معاصرًا للرواية الواقعية.`,
  },
  {
    slug: "meaning-of-homeland-arabic-literature",
    title: "معنى الوطن في الأدب العربي",
    content: `الوطن في الأدب العربي ليس مجرد جغرافيا أو حدود على خريطة. إنه كيان روحي يسكن القلب ويشكل الهوية.

## الوطن كمفهوم متعدد الأبعاد

الوطن الجغرافي والعاطفي والروحي يتشابكون في الأدب العربي ليشكلوا صورة معقدة للانتماء.

## الوطن في الغربة

الأدباء الذين كتبوا من الغربة قدموا رؤية فريدة للوطن. حين تبتعد عن الوطن، تراه بوضوح أكبر.

## خلاصة

الوطن في الأدب العربي هو أكثر من مكان - إنه جزء من الذات لا يمكن فصله عنها.`,
  },
  {
    slug: "why-we-love-sad-novels",
    title: "لماذا نحب الروايات الحزينة؟",
    content: `قد يبدو غريبًا أننا ننجذب للروايات التي تُبكينا وتجعلنا نشعر بالألم. لكن هذا الانجذاب له جذور نفسية عميقة.

## التنفيس العاطفي

الروايات الحزينة تمنحنا مساحة آمنة للبكاء والحزن.

## الشعور بالمشاركة

حين نقرأ عن شخص يعاني، نشعر أننا لسنا وحدنا في آلامنا.

## الخلاصة

نحب الروايات الحزينة لأنها تجعلنا نشعر بأننا أحياء.`,
  },
  {
    slug: "exile-in-modern-literature",
    title: "الغربة في الأدب الحديث",
    content: `الغربة موضوع محوري في الأدب العربي الحديث. ملايين العرب يعيشون خارج أوطانهم، والأدب يعكس هذه التجربة.

## أنواع الغربة

الغربة الجغرافية والنفسية والوجودية كلها حاضرة في الأدب المعاصر.

## الكتابة كعودة للوطن

بالنسبة لكثير من الكتّاب، الكتابة هي طريقة للعودة للوطن.`,
  },
  {
    slug: "love-in-times-of-turmoil",
    title: "الحب في زمن الاضطرابات",
    content: `هل يمكن للحب أن يزدهر في زمن الحروب والأزمات؟ الأدب يقدم إجابات مختلفة.

## الحب كفعل مقاومة

في أوقات الظلم والقمع، يصبح الحب فعل مقاومة.

## الحب كملاذ

في وسط الفوضى والخوف، يصبح الحب ملاذًا آمنًا.`,
  },
  {
    slug: "literature-as-resistance",
    title: "الأدب كوسيلة مقاومة",
    content: `الكلمة سلاح. هذه ليست مجرد عبارة شعرية، بل حقيقة يعرفها كل من واجه قمعًا أو ظلمًا.

## قوة الكلمة

الطغاة يخافون الكلمة أكثر من السلاح.

## الكاتب كشاهد

الكاتب الذي يعيش في زمن صعب يحمل مسؤولية الشهادة.`,
  },
  {
    slug: "realistic-novel-impact",
    title: "الرواية الواقعية وتأثيرها",
    content: `الرواية الواقعية تترك أثرًا مختلفًا عن الخيالية. القارئ يعرف أن ما يقرأه حدث فعلًا.

## لماذا الواقعية أقوى؟

الصدق والارتباط والتأثير هي ما يميز الرواية الواقعية.`,
  },
  {
    slug: "how-to-choose-impactful-novel",
    title: "كيف تختار رواية مؤثرة؟",
    content: `بين آلاف الروايات المتاحة، كيف تختار تلك التي ستترك أثرًا حقيقيًا في حياتك؟

## معايير اختيار الرواية المؤثرة

اختر رواية تتناول موضوعًا قريبًا من قلبك، بأسلوب يصل إليك.`,
  },
  {
    slug: "deepest-arabic-novels",
    title: "أكثر الروايات العربية عمقًا",
    content: `العمق في الرواية لا يعني التعقيد. بل يعني القدرة على الوصول إلى طبقات من المعنى.

## ما الذي يجعل الرواية عميقة؟

تعدد المستويات والأسئلة بدلًا من الأجوبة والبعد الإنساني.`,
  },
  {
    slug: "love-homeland-duality",
    title: "ثنائية الحب والوطن في الأدب",
    content: `الحب والوطن ثنائية متكررة في الأدب العربي. أحيانًا يتصالحان، وأحيانًا يتصارعان.

## العلاقة بين الحب والوطن

الحب كامتداد للوطن، أو الصراع بينهما، أو الحب في الغربة كوطن بديل.`,
  },
  {
    slug: "power-of-word-in-novel",
    title: "قوة الكلمة في الرواية",
    content: `الكلمة في الرواية ليست مجرد أداة للتواصل. إنها قوة يمكنها تغيير القارئ.

## الكلمة كسلاح وملاذ وجسر

الكلمة تربط بين الكاتب والقارئ، بين الماضي والحاضر.`,
  },
  {
    slug: "novels-that-leave-lasting-impact",
    title: "الروايات التي تترك أثرًا طويلًا",
    content: `بعض الروايات تُنسى بعد أسابيع. وبعضها يبقى معنا سنوات.

## ما الذي يجعل الرواية لا تُنسى؟

اللحظات المؤثرة والشخصيات الحية والأسئلة المعلقة.`,
  },
  {
    slug: "psychological-reading-realistic-novel",
    title: "قراءة نفسية للرواية الواقعية",
    content: `القراءة ليست مجرد استهلاك للكلمات. إنها عملية نفسية معقدة.

## التماهي مع الشخصيات

حين نقرأ رواية واقعية، نتماهى مع شخصياتها.`,
  },
  {
    slug: "memory-impact-literature",
    title: "أثر الذاكرة في الأدب",
    content: `الذاكرة هي المادة الخام للأدب. الكاتب يستدعي ذكرياته ويحولها إلى فن.

## الذاكرة كمقاومة

في أوقات القمع، تصبح الذاكرة فعل مقاومة.`,
  },
  {
    slug: "why-reread-painful-novels",
    title: "لماذا نعود لقراءة الروايات المؤلمة؟",
    content: `قد يبدو غريبًا أن نعود لقراءة رواية أبكتنا. لكن هذا السلوك له تفسيرات نفسية عميقة.

## البحث عن الفهم

في القراءات اللاحقة، نبحث عن فهم أعمق.`,
  },
  {
    slug: "symbolism-arabic-novel",
    title: "الرمزية في الرواية العربية",
    content: `الرمزية أداة قوية في يد الروائي العربي. تتيح له قول ما لا يمكن قوله صراحة.

## لماذا يستخدم الكتّاب الرمزية؟

لتجاوز الرقابة وتعميق المعنى وإشراك القارئ.`,
  },
  {
    slug: "how-literature-changes-us",
    title: "كيف يغيّرنا الأدب؟",
    content: `القراءة ليست مجرد تسلية. الأدب الجيد يمكن أن يغيرنا بطرق عميقة ودائمة.

## توسيع الوعي وتنمية التعاطف

الأدب يتيح لنا أن نعيش حيوات أخرى ونفهم تجارب مختلفة.`,
  },
  {
    slug: "writing-between-reality-fiction",
    title: "الكتابة بين الواقع والخيال",
    content: `أين ينتهي الواقع ويبدأ الخيال في الرواية؟ سؤال يشغل الكتّاب والقراء.

## الصدق العاطفي

الأهم من الدقة الحرفية هو الصدق العاطفي.`,
  },
  {
    slug: "novel-as-mirror-society",
    title: "الرواية كمرآة للمجتمع",
    content: `الرواية ليست مجرد قصة فردية. إنها مرآة تعكس المجتمع الذي أنتجها.

## ما الذي تعكسه الرواية؟

القيم السائدة والصراعات الاجتماعية والأحلام والمخاوف.`,
  },
];

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return { title: "مقال غير موجود" };
  }

  return {
    title: article.title,
    description: article.content.slice(0, 160).replace(/\n/g, " "),
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const paragraphs = article.content
    .split("\n\n")
    .filter((p) => p.trim())
    .map((p) => {
      if (p.startsWith("## ")) {
        return { type: "h2", content: p.replace("## ", "") };
      }
      return { type: "p", content: p };
    });

  return (
    <div className="min-h-screen py-8 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <article className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-revolution-green hover:text-revolution-green/80 mb-6 md:mb-8 text-sm md:text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
            العودة للمدونة
          </Link>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-amiri font-bold heading-primary mb-6 md:mb-8 leading-tight">
            {article.title}
          </h1>

          <div className="prose prose-lg max-w-none">
            {paragraphs.map((p, index) => {
              if (p.type === "h2") {
                return (
                  <h2 key={`h2-${index}`} className="text-xl md:text-2xl font-amiri font-bold heading-primary mt-8 md:mt-10 mb-3 md:mb-4">
                    {p.content}
                  </h2>
                );
              }
              return (
                <p key={`p-${index}`} className="text-base md:text-lg text-black/80 leading-relaxed mb-4">
                  {p.content}
                </p>
              );
            })}
          </div>

          <div className="mt-12 md:mt-16 bg-revolution-green/5 rounded-xl md:rounded-2xl p-6 md:p-8 text-center">
            <h2 className="text-xl md:text-2xl font-amiri font-bold heading-primary mb-3 md:mb-4">
              اقرأ رواية "في حبّك ثار الوطن"
            </h2>
            <p className="text-sm md:text-base text-black/70 mb-4 md:mb-6">
              رواية واقعية عن حبٍّ لم يحتمل الصمت… ووطنٍ لم يحتمل الحقيقة.
            </p>
            <Link href="/where-to-buy">
              <Button className="btn-cta text-base md:text-lg py-4 md:py-6 px-6 md:px-10 w-full sm:w-auto">
                اطلب رواية في حبّك ثار الوطن
              </Button>
            </Link>
          </div>

          <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-200">
            <h3 className="text-lg md:text-xl font-amiri font-bold heading-primary mb-4 md:mb-6">
              مقالات ذات صلة
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {articles
                .filter((a) => a.slug !== article.slug)
                .slice(0, 4)
                .map((relatedArticle) => (
                  <Link
                    key={relatedArticle.slug}
                    href={`/blog/${relatedArticle.slug}`}
                    className="block p-3 md:p-4 bg-white border border-revolution-green/10 rounded-lg md:rounded-xl hover:border-revolution-green/30 transition-colors"
                  >
                    <h4 className="text-sm md:text-base font-bold text-black hover:text-revolution-green transition-colors leading-tight">
                      {relatedArticle.title}
                    </h4>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
