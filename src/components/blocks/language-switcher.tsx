"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(locale: string) {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
  }

  return (
    <div className="flex gap-2 text-sm">
      <button onClick={() => switchLocale("fr")}>FR</button>
      <button onClick={() => switchLocale("en")}>EN</button>
    </div>
  );
}
