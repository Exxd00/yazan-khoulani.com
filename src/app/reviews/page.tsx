import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "المراجعات",
  description:
    "آراء القراء حول رواية في حبّك ثار الوطن.",
};

const reviews = [
  {
    name: "سارة أحمد",
    country: "مصر",
    text: "رواية تلامس القلب بشكل لا يُوصف. شعرت وكأنني أعيش كل لحظة مع الشخصيات.",
    rating: 5,
  },
  {
    name: "محمد الخالدي",
    country: "السعودية",
    text: "من أجمل ما قرأت في السنوات الأخيرة. أسلوب سردي مميز وعمق في المعاني.",
    rating: 5,
  },
  {
    name: "ليلى عبدالرحمن",
    country: "الأردن",
    text: "بكيت في أكثر من موضع. رواية حقيقية تتحدث عن واقع مؤلم بصدق.",
    rating: 5,
  },
  {
    name: "أحمد يوسف",
    country: "ألمانيا",
    text: "كمغترب، وجدت في هذه الرواية كل ما لم أستطع التعبير عنه.",
    rating: 5,
  },
  {
    name: "نور الشامي",
    country: "سوريا",
    text: "الكاتب يعرف كيف يصل للقلب مباشرة. رواية ستبقى معي طويلًا.",
    rating: 5,
  },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-amiri font-bold heading-primary mb-6">
            آراء القراء
          </h1>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            ماذا قال القراء عن الرواية
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white border border-revolution-green/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <svg
                    // biome-ignore lint/suspicious/noArrayIndexKey: rating stars
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#FFB800"
                    stroke="#FFB800"
                    strokeWidth="1"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <blockquote className="text-lg text-black leading-relaxed mb-4">
                "{review.text}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-black">{review.name}</p>
                <p className="text-sm text-black/60">{review.country}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-revolution-green/5 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-amiri font-bold heading-primary mb-4">
            انضم لعائلة القراء
          </h2>
          <p className="text-lg text-black/70 mb-8">
            احصل على نسختك واكتشف لماذا أحبها القراء
          </p>
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
