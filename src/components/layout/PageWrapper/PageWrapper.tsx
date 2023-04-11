import React from "react";

export function PageWrapper({ children, className }: any) {
  return (
    <div className={`mx-auto w-full max-w-4xl px-4 ${className}`}>
      {children}
    </div>
  );
}
