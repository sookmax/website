import React from "react";

export function A(props: React.ComponentPropsWithoutRef<"a">) {
  return <a target="_blank" {...props} />;
}
