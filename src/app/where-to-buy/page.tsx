import type { Metadata } from "next";
import { TrackedPurchaseButton } from "@/components/TrackedButtons";

export const metadata: Metadata = {
  title: "أين أشتري",
  description:
    "اشترِ رواية في حبّك ثار الوطن - متوفرة للشحن في أوروبا والدول العربية.",
};

export default function WhereToBuyPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-amiri font-bold heading-primary mb-6">
            أين أشتري الرواية؟
          </h1>
          <p className="text-xl text-black/70 dark:text-gray-300 max-w-2xl mx-auto">
            اختر المتجر الأقرب إليك للحصول على شحن أسرع وتكلفة أقل
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Europe */}
          <section
            id="europe"
            className="bg-white dark:bg-gray-800 border-2 border-revolution-green/20 dark:border-revolution-green/30 rounded-2xl p-8 md:p-10 text-center hover:border-revolution-green/40 transition-colors scroll-mt-32"
          >
            <div className="w-20 h-20 bg-revolution-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-revolution-green dark:text-green-400"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <h2 className="text-2xl font-amiri font-bold heading-primary mb-4">
              أوروبا
            </h2>
            <p className="text-black/70 dark:text-gray-300 mb-8 text-lg">
              للشحن داخل أوروبا
            </p>
            <TrackedPurchaseButton
              region="europe"
              href="https://share.google/FA1GLVYEGmyFfArYK"
              className="btn-cta text-lg py-6 px-10 w-full"
            >
              شراء داخل أوروبا
            </TrackedPurchaseButton>
            <p className="text-sm text-black/50 dark:text-gray-400 mt-4">
              شحن سريع لجميع الدول الأوروبية
            </p>
          </section>

          {/* Arab Countries */}
          <section
            id="arab"
            className="bg-white dark:bg-gray-800 border-2 border-revolution-green/20 dark:border-revolution-green/30 rounded-2xl p-8 md:p-10 text-center hover:border-revolution-green/40 transition-colors scroll-mt-32"
          >
            <div className="w-20 h-20 bg-revolution-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-revolution-green dark:text-green-400"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h2 className="text-2xl font-amiri font-bold heading-primary mb-4">
              الدول العربية
            </h2>
            <p className="text-black/70 dark:text-gray-300 mb-8 text-lg">
              للشحن إلى الدول العربية
            </p>
            <TrackedPurchaseButton
              region="arab"
              href="https://bibliomaniapublishing.com/product/%D9%81%D9%8A-%D8%AD%D8%A8%D9%83-%D8%AB%D8%A7%D8%B1-%D8%A7%D9%84%D9%88%D8%B7%D9%86/"
              className="btn-cta text-lg py-6 px-10 w-full"
            >
              شراء في الدول العربية
            </TrackedPurchaseButton>
            <p className="text-sm text-black/50 dark:text-gray-400 mt-4">
              شحن لجميع الدول العربية
            </p>
          </section>
        </div>

        {/* Note */}
        <div className="max-w-2xl mx-auto mt-12 text-center bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
          <p className="text-black/70 dark:text-gray-300">
            <strong className="text-black dark:text-white">ملاحظة:</strong> اختر المتجر الأقرب إليك للحصول على شحن أسرع وتكلفة أقل.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12">
          <div className="flex flex-col items-center gap-2 text-revolution-green/80 dark:text-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
            <span className="text-sm font-medium text-black/80 dark:text-gray-200">شحن آمن</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-revolution-green/80 dark:text-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
            <span className="text-sm font-medium text-black/80 dark:text-gray-200">متاجر معتمدة</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-revolution-green/80 dark:text-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
            <span className="text-sm font-medium text-black/80 dark:text-gray-200">تحديثات مستمرة</span>
          </div>
        </div>
      </div>
    </div>
  );
}
