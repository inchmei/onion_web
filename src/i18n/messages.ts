import type { Locale } from "./config";

type Messages = {
  title: string;
  description: string;
};

export const messages: Record<Locale, Messages> = {
  zh: {
    title: "欢迎使用 Onion Web",
    description: "这是一个使用 Next.js 初始化并支持国际化的项目框架。"
  },
  en: {
    title: "Welcome to Onion Web",
    description: "This is a Next.js starter project with built-in internationalization support."
  }
};
