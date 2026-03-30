"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (next: string) => {
    router.replace(pathname, { locale: next });
  };

  return (
    <div className="flex items-center gap-1">
      {(["en", "fr"] as const).map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && (
            <span className="font-sans text-[0.6rem] text-sage-muted/50 select-none">
              |
            </span>
          )}
          <button
            onClick={() => switchLocale(l)}
            className={`font-sans text-[0.6rem] tracking-[0.2em] uppercase transition-colors duration-300 ${
              locale === l
                ? "text-forest font-bold"
                : "text-warm-gray hover:text-forest"
            }`}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
