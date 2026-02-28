import { locales } from "@/lib/enums";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: locales,
  defaultLocale: "en",
});
