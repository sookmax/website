import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-[21cm] h-[29.7cm] mx-auto">{children}</div>
    </div>
  );
}
