import { type ReactNode } from "react";

export function PageContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-content px-6 py-10 sm:py-12 ${className}`}>
      {children}
    </div>
  );
}
