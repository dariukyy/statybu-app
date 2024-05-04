import { type ReactNode } from "react";

type LabelProps = { children: ReactNode; htmlFor: string };

function Label({ children, htmlFor }: LabelProps) {
  return (
    <label className="w-full" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export default Label;
