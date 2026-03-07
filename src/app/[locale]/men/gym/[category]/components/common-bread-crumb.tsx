import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { CommonBreadcrumbProps } from "./types";

const CommonBreadcrumb = ({ breadcrumbsPath }: CommonBreadcrumbProps) => {
  return (
    <Breadcrumb className="mb-5">
      <BreadcrumbList>
        {breadcrumbsPath.map((item, index) => {
          const isLast = index === breadcrumbsPath.length - 1;

          return (
            <div key={index} className="flex items-center">
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <Link href={item.href!}>{item.label}</Link>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CommonBreadcrumb;
