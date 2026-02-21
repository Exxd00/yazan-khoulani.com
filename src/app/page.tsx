import Link from "next/link";
import { Button } from "@/components/ui/button";
import ExcerptModal from "@/components/modals/ExcerptModal";
import QuotesModal from "@/components/modals/QuotesModal";
import ShareButton from "@/components/ShareButton";
import FlipableBookCover from "@/components/FlipableBookCover";

const quotes = [
  "بعض الأوطان لا تطلب منك إلا شيئًا واحدًا… أن تصمت.",
  "القلب يُكسر مرة واحدة… لكن الوطن يستطيع أن يعيد كسره كل يوم.",
  "لم أكن أهرب من المكان… كنت أهرب من نفسي فيه.",
  "أحببتكِ كما لو أن الوطن سيغفر لنا هذا الحب.",
];

const whyDifferent = [
  "لأنها تنبض بواقعية موجعة.",
  "لأنها تُشعرك أن الكلمة قد تكون نجاة… أو تهمة.",
  "لأنها تضع القلب في مواجهة الخوف.",
  "لأنها تترك أثرًا طويلًا بعد الصفحة الأخيرة.",
];

// Animated trust icons without text
const trustIcons = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    animation: "animate-icon-bounce",
    delay: "0s",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    animation: "animate-icon-pulse",
    delay: "0.2s",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    animation: "animate-icon-wiggle",
    delay: "0.4s",
  },
  {
    // App icon - book/reading icon
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M12 6v7" />
        <path d="M9 9h6" />
      </svg>
    ),
    animation: "animate-icon-breathe",
    delay: "0.6s",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 transition-colors duration-300 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Book Cover */}
            <div className="w-full lg:w-1/2 flex justify-center animate-fade-in">
              <FlipableBookCover />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-right animate-slide-in-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-amiri font-bold heading-primary mb-6 leading-tight">
                في حبّك ثار الوطن
              </h1>
              <p className="text-xl md:text-2xl text-black/80 dark:text-gray-200 mb-6 font-tajawal leading-relaxed">
                رواية واقعية عن حبٍّ لم يحتمل الصمت…
                <br />
                ووطنٍ لم يحتمل الحقيقة.
              </p>
              <div className="text-lg text-black/70 dark:text-gray-300 mb-8 leading-relaxed font-tajawal">
                <p className="mb-2 animate-fade-in stagger-1">ليست حكاية تُروى…</p>
                <p className="mb-2 animate-fade-in stagger-2">بل تجربة تُعاش.</p>
                <p className="mb-2 animate-fade-in stagger-3">حين يصبح الحب موقفًا،</p>
                <p className="mb-2 animate-fade-in stagger-4">ويصبح الوطن اختبارًا،</p>
                <p className="animate-fade-in stagger-5">لا يبقى أمام القلب سوى أن يختار.</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                <Link href="/where-to-buy#europe">
                  <Button className="btn-cta w-full sm:w-auto text-lg py-6 px-8 hover-lift">
                    شراء النسخة الورقية – أوروبا
                  </Button>
                </Link>
                <Link href="/where-to-buy#arab">
                  <Button className="btn-cta w-full sm:w-auto text-lg py-6 px-8 hover-lift">
                    شراء النسخة الورقية – الدول العربية
                  </Button>
                </Link>
              </div>

              {/* Secondary Buttons */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <ExcerptModal />
                <QuotesModal />
                <ShareButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Strip */}
      <section className="py-12 bg-revolution-green/5 dark:bg-revolution-green/10 border-y border-revolution-green/10 dark:border-revolution-green/20 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-amiri font-bold heading-primary mb-3 animate-fade-in">
            تابع الكاتب لتصلك الاقتباسات والكواليس أولًا
          </h2>
          <p className="text-black/70 dark:text-gray-300 mb-6">
            اقتباسات جديدة، كواليس الكتابة، وتحديثات توفر الرواية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.facebook.com/share/18GLUxpXFg/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#1664d9] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook الرسمي
            </a>
            <a
              href="https://www.instagram.com/yazan.khoulani?igsh=MXV6Z3Fqb3l3bWk2Zw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram الرسمي
            </a>
          </div>
        </div>
      </section>

      {/* Animated Trust Icons */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {trustIcons.map((item, index) => (
              <div
                key={index}
                className={`text-revolution-green dark:text-green-400 ${item.animation} cursor-pointer hover:text-revolution-green/70 dark:hover:text-green-300 transition-colors`}
                style={{ animationDelay: item.delay }}
              >
                {item.icon}
              </div>
            ))}
          </div>
          {/* iPhone Instructions */}
          <div className="mt-6 text-center">
            <p className="text-xs text-black/50 dark:text-gray-400 flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
              لمستخدمي iPhone: اضغط على "مشاركة" ثم "إضافة للشاشة الرئيسية"
            </p>
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-amiri font-bold heading-primary text-center mb-12 animate-fade-in">
            لماذا هذه الرواية مختلفة؟
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyDifferent.map((reason, index) => (
              <div
                key={reason}
                className="flex items-start gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl border border-revolution-green/10 dark:border-revolution-green/20 hover:border-revolution-green/30 dark:hover:border-revolution-green/40 transition-colors shadow-sm hover:shadow-md animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
              >
                <span className="flex-shrink-0 w-8 h-8 bg-revolution-green text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <p className="text-lg text-black dark:text-gray-200 leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-amiri font-bold heading-primary text-center mb-4 animate-fade-in">
            اقتباسات من الرواية
          </h2>
          <p className="text-center text-black/60 dark:text-gray-400 mb-12">
            كلمات تترك أثرًا… دون أن تكشف الحكاية
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {quotes.map((quote, idx) => (
              <blockquote
                key={quote}
                className="card-quote animate-fade-in"
                style={{ animationDelay: `${idx * 0.1 + 0.1}s` }}
              >
                <p className="text-xl font-amiri italic text-black dark:text-gray-100 leading-relaxed">
                  "{quote}"
                </p>
              </blockquote>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/quotes">
              <Button variant="outline" className="btn-cta-secondary">
                عرض جميع الاقتباسات
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Excerpt Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-amiri font-bold heading-primary mb-8 animate-fade-in">
            مقطع مسرّب
          </h2>
          <div className="max-w-2xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-amiri italic text-black dark:text-gray-100 leading-relaxed mb-8 animate-fade-in">
              <p className="mb-4">"لم يكن الوطن يومًا مجرد خريطة…</p>
              <p className="mb-4">كان شيئًا يشبه القلب.</p>
              <p>لكن القلوب، حين تتعب، لا تعود كما كانت."</p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-revolution-green/5 dark:bg-revolution-green/15 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-amiri font-bold heading-primary mb-6 animate-fade-in">
            احصل على نسختك الآن
          </h2>
          <p className="text-lg text-black/70 dark:text-gray-200 mb-8 max-w-xl mx-auto">
            متوفر عبر متاجر معتمدة داخل أوروبا والدول العربية.
          </p>
          <Link href="/where-to-buy">
            <Button className="btn-cta text-xl py-7 px-12 hover-lift">
              اشترِ الآن
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
