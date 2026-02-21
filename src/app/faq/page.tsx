import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "الأسئلة الشائعة",
  description:
    "إجابات على الأسئلة الشائعة حول رواية في حبّك ثار الوطن.",
};

const faqs = [
  {
    question: "هل الرواية واقعية؟",
    answer:
      "نعم، الرواية مستوحاة من أحداث وتجارب واقعية، مع لمسات أدبية تحافظ على روح القصة وعمقها الإنساني.",
  },
  {
    question: "هل هي رواية حب؟",
    answer:
      "الرواية تجمع بين الحب والوطن في نسيج واحد. هي رواية عن الحب الذي يُختبر في أصعب الظروف، وعن الوطن الذي يسكن القلب حتى في الغربة.",
  },
  {
    question: "أين يمكن شراء الرواية؟",
    answer:
      "الرواية متوفرة للشحن في أوروبا والدول العربية عبر متاجر معتمدة. يمكنك زيارة صفحة 'أين أشتري' لاختيار المتجر الأنسب لموقعك.",
  },
  {
    question: "هل تتوفر نسخة إلكترونية؟",
    answer:
      "حاليًا متوفرة النسخة الورقية فقط. سيتم الإعلان عن أي إصدارات جديدة عبر صفحات الكاتب الرسمية.",
  },
  {
    question: "كم صفحة في الرواية؟",
    answer:
      "الرواية تقع في حدود مناسبة للقراءة المتأنية، مع تركيز على العمق بدلاً من الطول.",
  },
  {
    question: "هل هذه الرواية الأولى للكاتب؟",
    answer:
      "نعم، 'في حبّك ثار الوطن' هي الرواية الأولى للكاتب يزن خولاني.",
  },
  {
    question: "لمن تُنصح هذه الرواية؟",
    answer:
      "لكل من يبحث عن قراءة عميقة تلامس القلب والعقل. لمحبي الروايات الواقعية التي تتناول موضوعات الحب والهوية والانتماء.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-amiri font-bold heading-primary mb-6">
            الأسئلة الشائعة
          </h1>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            إجابات على أكثر الأسئلة شيوعًا
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="bg-white border border-revolution-green/10 rounded-xl px-6 data-[state=open]:border-revolution-green/30"
              >
                <AccordionTrigger className="text-lg font-bold text-black hover:text-revolution-green py-6 text-right">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-black/80 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center bg-revolution-green/5 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-amiri font-bold heading-primary mb-4">
            لم تجد إجابة لسؤالك؟
          </h2>
          <p className="text-lg text-black/70 mb-8">
            تواصل مع الكاتب مباشرة عبر صفحاته الرسمية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://www.facebook.com/share/18GLUxpXFg/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#1664d9] text-white px-6 py-3 rounded-xl font-bold transition-all"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/yazan.khoulani?igsh=MXV6Z3Fqb3l3bWk2Zw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white px-6 py-3 rounded-xl font-bold transition-all"
            >
              Instagram
            </a>
          </div>
          <Link href="/where-to-buy">
            <Button className="btn-cta text-lg py-6 px-10">
              اشترِ الرواية الآن
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
