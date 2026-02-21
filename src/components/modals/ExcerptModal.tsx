"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ExcerptModalProps {
  trigger?: React.ReactNode;
}

export default function ExcerptModal({ trigger }: ExcerptModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className="btn-cta-secondary">
            اقرأ مقطعًا مسربًا
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-amiri heading-primary text-center">
            مقطع مسرّب من الرواية
          </DialogTitle>
        </DialogHeader>
        <div className="py-6">
          <blockquote className="text-lg leading-relaxed text-black font-amiri italic text-center border-r-4 border-revolution-green pr-4">
            <p className="mb-4">لم يكن الوطن يومًا مجرد خريطة…</p>
            <p className="mb-4">كان شيئًا يشبه القلب.</p>
            <p>لكن القلوب، حين تتعب، لا تعود كما كانت.</p>
          </blockquote>
        </div>
        <div className="flex justify-center pt-4 border-t border-gray-100">
          <Link href="/where-to-buy">
            <Button className="btn-cta">اشترِ الرواية الآن</Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
