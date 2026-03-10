"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

// Simple hash function for password verification (client-side only)
const verifyPassword = (input: string): boolean => {
  return input === "Leavemealone2003+";
};

const assets = [
  {
    category: "الشعار والأيقونات",
    items: [
      { name: "Favicon", path: "/favicon.png", type: "image" },
      { name: "App Icon SVG", path: "/icons/icon.svg", type: "image" },
      { name: "Apple Touch Icon", path: "/icons/apple-touch-icon.png", type: "image" },
      { name: "Icon 72x72", path: "/icons/icon-72x72.png", type: "image" },
      { name: "Icon 96x96", path: "/icons/icon-96x96.png", type: "image" },
      { name: "Icon 128x128", path: "/icons/icon-128x128.png", type: "image" },
      { name: "Icon 144x144", path: "/icons/icon-144x144.png", type: "image" },
      { name: "Icon 152x152", path: "/icons/icon-152x152.png", type: "image" },
      { name: "Icon 192x192", path: "/icons/icon-192x192.png", type: "image" },
      { name: "Icon 384x384", path: "/icons/icon-384x384.png", type: "image" },
      { name: "Icon 512x512", path: "/icons/icon-512x512.png", type: "image" },
    ],
  },
  {
    category: "الصور",
    items: [
      { name: "صورة الكاتب", path: "/images/author.jpg", type: "image" },
      { name: "غلاف الكتاب", path: "/images/book-cover.svg", type: "image" },
    ],
  },
  {
    category: "ملفات الموقع",
    items: [
      { name: "Manifest (PWA)", path: "/manifest.json", type: "json" },
      { name: "Service Worker", path: "/sw.js", type: "code" },
    ],
  },
];

const externalLinks = [
  { name: "رابط شراء أوروبا", url: "https://share.google/FA1GLVYEGmyFfArYK" },
  { name: "رابط شراء الدول العربية", url: "https://bibliomaniapublishing.com/product/في-حبك-ثار-الوطن/" },
  { name: "Facebook", url: "https://www.facebook.com/share/18GLUxpXFg/?mibextid=wwXIfr" },
  { name: "Instagram", url: "https://www.instagram.com/yazan.khoulani?igsh=MXV6Z3Fqb3l3bWk2Zw==" },
];

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if already authenticated in session
    const auth = sessionStorage.getItem("admin-auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyPassword(password)) {
      setIsAuthenticated(true);
      sessionStorage.setItem("admin-auth", "true");
      setError("");
    } else {
      setError("كلمة المرور غير صحيحة");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("admin-auth");
    setPassword("");
  };

  const downloadFile = async (path: string, filename: string) => {
    try {
      const response = await fetch(path);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      console.error("Download failed:", err);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (!mounted) return null;

  // Login Form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-amiri font-bold text-black dark:text-white mb-2">
              لوحة التحكم
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              أدخل كلمة المرور للوصول
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="كلمة المرور"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-revolution-green focus:border-transparent outline-none transition-all"
                dir="ltr"
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <Button type="submit" className="btn-cta w-full py-3">
              دخول
            </Button>
          </form>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-amiri font-bold text-black dark:text-white">
            لوحة التحكم
          </h1>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          >
            تسجيل الخروج
          </Button>
        </div>

        {/* Assets Sections */}
        {assets.map((section) => (
          <div
            key={section.category}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6"
          >
            <h2 className="text-xl font-bold text-black dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              {section.category}
            </h2>
            <div className="grid gap-3">
              {section.items.map((item) => (
                <div
                  key={item.path}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    {item.type === "image" && (
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded overflow-hidden flex items-center justify-center">
                        <img
                          src={item.path}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    {item.type === "json" && (
                      <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded flex items-center justify-center text-yellow-600 dark:text-yellow-400 font-mono text-xs">
                        JSON
                      </div>
                    )}
                    {item.type === "code" && (
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded flex items-center justify-center text-blue-600 dark:text-blue-400 font-mono text-xs">
                        JS
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-black dark:text-white">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400" dir="ltr">
                        {item.path}
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() =>
                      downloadFile(item.path, item.path.split("/").pop() || "file")
                    }
                    size="sm"
                    className="bg-revolution-green hover:bg-revolution-green/90 text-white"
                  >
                    تحميل
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* External Links */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-black dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
            الروابط الخارجية
          </h2>
          <div className="grid gap-3">
            {externalLinks.map((link) => (
              <div
                key={link.name}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div>
                  <p className="font-medium text-black dark:text-white">
                    {link.name}
                  </p>
                  <p
                    className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-[300px]"
                    dir="ltr"
                  >
                    {link.url}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => copyToClipboard(link.url)}
                    size="sm"
                    variant="outline"
                    className="border-gray-300 dark:border-gray-600"
                  >
                    نسخ
                  </Button>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      className="bg-revolution-green hover:bg-revolution-green/90 text-white"
                    >
                      فتح
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Site Info */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-black dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
            معلومات الموقع
          </h2>
          <div className="grid gap-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <p className="font-medium text-black dark:text-white">Sitemap</p>
                <p className="text-sm text-gray-500 dark:text-gray-400" dir="ltr">
                  /sitemap.xml
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => copyToClipboard("https://yazan-khoulani.com/sitemap.xml")}
                  size="sm"
                  variant="outline"
                  className="border-gray-300 dark:border-gray-600"
                >
                  نسخ
                </Button>
                <a href="/sitemap.xml" target="_blank">
                  <Button
                    size="sm"
                    className="bg-revolution-green hover:bg-revolution-green/90 text-white"
                  >
                    فتح
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <p className="font-medium text-black dark:text-white">Robots.txt</p>
                <p className="text-sm text-gray-500 dark:text-gray-400" dir="ltr">
                  /robots.txt
                </p>
              </div>
              <div className="flex gap-2">
                <a href="/robots.txt" target="_blank">
                  <Button
                    size="sm"
                    className="bg-revolution-green hover:bg-revolution-green/90 text-white"
                  >
                    فتح
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <p className="font-medium text-black dark:text-white">Google Analytics</p>
                <p className="text-sm text-gray-500 dark:text-gray-400" dir="ltr">
                  G-C361J0CGYS
                </p>
              </div>
              <Button
                onClick={() => copyToClipboard("G-C361J0CGYS")}
                size="sm"
                variant="outline"
                className="border-gray-300 dark:border-gray-600"
              >
                نسخ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
