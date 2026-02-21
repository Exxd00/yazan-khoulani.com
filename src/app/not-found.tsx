import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-8xl md:text-9xl font-amiri font-bold heading-primary mb-6">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-amiri font-bold text-black mb-6">
          الصفحة غير موجودة
        </h2>
        <p className="text-xl text-black/70 mb-10 max-w-md mx-auto">
          ربما انتقلت الصفحة… لكن الرواية ما زالت هنا.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="outline" className="btn-cta-secondary text-lg py-6 px-8">
              العودة للرئيسية
            </Button>
          </Link>
          <Link href="/where-to-buy">
            <Button className="btn-cta text-lg py-6 px-8">
              أين أشتري الرواية
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
