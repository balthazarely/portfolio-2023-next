import React from "react";

interface IPageWrapper {
  children: React.ReactNode;
  className: string;
}

export function PageWrapper({ children, className }: IPageWrapper) {
  return (
    <div className={`mx-auto w-full max-w-4xl px-4 ${className}`}>
      {children}
    </div>
  );
}
