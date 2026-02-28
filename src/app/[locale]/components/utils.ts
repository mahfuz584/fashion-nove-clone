import { GenerateBreadCumbsProps } from "./types";

export const generateBreadcrumb = ({
  locales,
  gender,
  section,
  category,
}: GenerateBreadCumbsProps) => {
  const rootHref = `/${locales}`;
  return [
    { label: "Home", href: rootHref },
    { label: gender, href: `${rootHref}/${gender}` },
    { label: section, href: `${rootHref}/${gender}/${section}` },
    { label: category },
  ];
};
