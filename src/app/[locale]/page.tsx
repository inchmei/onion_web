import Link from "next/link";
import { notFound } from "next/navigation";
import { localeName, locales, type Locale } from "../../i18n/config";
import { messages } from "../../i18n/messages";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const t = messages[currentLocale];

  return (
    <main>
      <h1>{t.title}</h1>
      <p>{t.description}</p>
      <p>Current locale: {localeName[currentLocale]}</p>
      <div className="switcher">
        {locales.map((item) => (
          <Link key={item} href={`/${item}`}>
            {localeName[item]}
          </Link>
        ))}
      </div>
    </main>
  );
}
