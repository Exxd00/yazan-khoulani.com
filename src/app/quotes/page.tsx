import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "الاقتباسات",
  description:
    "اقتباسات مختارة من رواية في حبّك ثار الوطن - كلمات تترك أثرًا.",
};

const quotes = [
  "بعض الأوطان لا تطلب منك إلا شيئًا واحدًا… أن تصمت.",
  "القلب يُكسر مرة واحدة… لكن الوطن يستطيع أن يعيد كسره كل يوم.",
  "لم أكن أهرب من المكان… كنت أهرب من نفسي فيه.",
  "أحببتكِ كما لو أن الوطن سيغفر لنا هذا الحب.",
  "الحب في زمن الحرب ليس ترفًا… إنه نجاة.",
  "حين يصبح الصمت خيانة، تصبح الكلمة ثورة.",
  "الذاكرة ليست ماضيًا… إنها حاضرٌ يرفض أن يموت.",
  "لم أختر الغربة… لكنني اخترت ألا أنساك.",
  "الوطن ليس مكانًا… إنه شعور لا يغادر.",
  "بعض الحقائق تُقال همسًا… لأن الصراخ قد يقتل.",
  "كل خطوة بعيدًا عنكِ كانت خطوة نحو الجنون.",
  "الحب الحقيقي لا يُهزم… لكنه قد يُجرح حتى الموت.",
  "حين فقدت كل شيء، وجدتكِ أنتِ.",
  "الوطن يسكن القلب حتى حين يُطرد من الأرض.",
  "لم أكتب لأُنسي… كتبت لأتذكر.",
  "في الغربة، كل شيء يبدأ من الصفر… حتى الحزن.",
  "بعض الناس يحملون أوطانًا على أكتافهم.",
  "الحب هو الوطن الوحيد الذي لا يُصادَر.",
  "حين يخونك الجميع، يبقى القلم صادقًا.",
  "الثورة تبدأ من الداخل قبل أن تخرج للشوارع.",
  "لم أعد أخاف الموت… أخاف أن أموت دون أن أقول ما أريد.",
  "بعض الكلمات تُكتب بالدم لا بالحبر.",
  "الصمت أحيانًا أعلى صوتًا من الصراخ.",
  "حين تُغلق كل الأبواب، تصبح الكتابة نافذة.",
  "لم أكن أبحث عن الحرية… كنت أبحث عن نفسي.",
];

export default function QuotesPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-amiri font-bold heading-primary mb-6">
            اقتباسات من الرواية
          </h1>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            كلمات تترك أثرًا… دون أن تكشف الحكاية
          </p>
        </div>

        {/* Quotes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {quotes.map((quote, index) => (
            <blockquote
              key={quote}
              className="card-quote group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <p className="text-lg font-amiri italic text-black leading-relaxed group-hover:text-revolution-green transition-colors">
                "{quote}"
              </p>
            </blockquote>
          ))}
        </div>

        {/* Social CTA */}
        <div className="text-center bg-gray-50 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto mb-12">
          <p className="text-xl text-black/80 mb-6">
            للمزيد من الاقتباسات، تابع صفحات الكاتب الرسمية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.facebook.com/share/18GLUxpXFg/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#1664d9] text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
            <a
              href="https://www.instagram.com/yazan.khoulani?igsh=MXV6Z3Fqb3l3bWk2Zw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/where-to-buy">
            <Button className="btn-cta text-lg py-6 px-10">
              اقرأ الرواية كاملة
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
