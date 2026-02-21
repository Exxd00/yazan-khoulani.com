import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "عن الرواية",
  description:
    "تعرف على رواية في حبّك ثار الوطن - رواية واقعية تقترب من الإنسان حين يُطلب منه أن يصمت.",
};

const bookData = [
  { label: "العنوان", value: "في حبّك ثار الوطن" },
  { label: "المؤلف", value: "يزن خولاني" },
  { label: "الناشر", value: "ببلومانيا للنشر والتوزيع – مصر" },
  { label: "الطبعة", value: "الطبعة الأولى، 2025" },
  { label: "ISBN", value: "9789779945980" },
  { label: "النوع", value: "رواية" },
];

const symbolicReading = [
  "الحب كموقف وجودي لا كعاطفة عابرة.",
  "الوطن كاختبار للإنسان وليس مجرد جغرافيا.",
  "الصمت كخيانة والكلمة كفعل مقاومة.",
];

export default function AboutNovelPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-amiri font-bold heading-primary mb-6">
            عن الرواية
          </h1>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            تعرف على القصة خلف الكلمات
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Book Cover */}
          <div className="flex justify-center lg:sticky lg:top-32">
            <div className="relative">
              <div className="absolute inset-0 bg-revolution-green/10 rounded-2xl transform rotate-3" />
              <div className="relative bg-gradient-to-br from-revolution-green/5 to-revolution-red/5 p-4 md:p-8 rounded-2xl shadow-2xl">
                <div className="relative w-64 md:w-72 h-auto aspect-[3/4.5] rounded-lg shadow-xl overflow-hidden">
                  <Image
                    src="/images/book-cover.svg"
                    alt="غلاف رواية في حبّك ثار الوطن - يزن خولاني"
                    fill
                    className="object-cover object-left transition-transform duration-500 hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 256px, 288px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-10">
            {/* About Text */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-black leading-relaxed mb-6">
                هذه الرواية تقترب من الإنسان حين يُطلب منه أن يصمت،
                وتضع الحب في اختبارٍ لا ينجو منه أحد بلا أثر.
              </p>
              <p className="text-xl text-black leading-relaxed">
                هي رواية عن المعنى قبل الحدث… وعن الأثر قبل الخاتمة.
              </p>
            </div>

            {/* Symbolic Reading */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-amiri font-bold heading-primary mb-6">
                قراءة رمزية
              </h2>
              <ul className="space-y-4">
                {symbolicReading.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-revolution-green rounded-full mt-2.5" />
                    <span className="text-lg text-black">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Book Data */}
            <div className="bg-white border border-revolution-green/20 rounded-2xl p-8">
              <h2 className="text-2xl font-amiri font-bold heading-primary mb-6">
                بيانات الكتاب
              </h2>
              <dl className="space-y-4">
                {bookData.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="text-black/60 font-medium min-w-[100px]">
                      {item.label}:
                    </dt>
                    <dd className="text-black font-bold">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* CTA */}
            <div className="text-center lg:text-right pt-6">
              <Link href="/where-to-buy">
                <Button className="btn-cta text-lg py-6 px-10">
                  احصل على نسختك الآن
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
