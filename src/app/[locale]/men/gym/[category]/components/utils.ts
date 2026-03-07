import { GenerateBreadCumbsProps } from "./types";

export const generateBreadcrumb = ({
  locale,
  segments,
}: GenerateBreadCumbsProps) => {
  const rootHref = `/${locale}`;

  const breadcrumbs = [{ label: "Home", href: rootHref }];

  segments.forEach((segment) => {
    breadcrumbs.push({
      label: segment.label,
      href: `${rootHref}/${segment.href}`,
    });
  });

  return breadcrumbs;
};
