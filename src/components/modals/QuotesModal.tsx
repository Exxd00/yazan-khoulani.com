"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const quotes = [
  "بعض الأوطان لا تطلب منك إلا شيئًا واحدًا… أن تصمت.",
  "القلب يُكسر مرة واحدة… لكن الوطن يستطيع أن يعيد كسره كل يوم.",
  "لم أكن أهرب من المكان… كنت أهرب من نفسي فيه.",
  "أحببتكِ كما لو أن الوطن سيغفر لنا هذا الحب.",
  "الحب في زمن الحرب ليس ترفًا… إنه نجاة.",
  "حين يصبح الصمت خيانة، تصبح الكلمة ثورة.",
];

interface QuotesModalProps {
  trigger?: React.ReactNode;
}

export default function QuotesModal({ trigger }: QuotesModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextQuote = () => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className="btn-cta-secondary">
            اقتباسات سريعة
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-amiri heading-primary text-center">
            اقتباسات من الرواية
          </DialogTitle>
        </DialogHeader>
        <div className="py-8">
          <blockquote className="text-xl leading-relaxed text-black font-amiri italic text-center min-h-[100px] flex items-center justify-center">
            "{quotes[currentIndex]}"
          </blockquote>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={prevQuote}
              className="p-2 rounded-full bg-revolution-green/10 hover:bg-revolution-green/20 transition-colors"
              aria-label="الاقتباس السابق"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            <span className="text-sm text-muted-foreground">
              {currentIndex + 1} / {quotes.length}
            </span>
            <button
              type="button"
              onClick={nextQuote}
              className="p-2 rounded-full bg-revolution-green/10 hover:bg-revolution-green/20 transition-colors"
              aria-label="الاقتباس التالي"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-center pt-4 border-t border-gray-100">
          <p className="text-sm text-muted-foreground">
            للمزيد من الاقتباسات، تابع صفحات الكاتب الرسمية
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
