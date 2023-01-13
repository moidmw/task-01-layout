import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Section = ({ children, className }: Props) => {
  return (
    <div className={`flex flex-col flex-wrap text-center h-screen items-center justify-center bg-gray-300 border-b-2 border-slate-600 px-32 ${className}`}>
      {children}
    </div>
  );
};

export default Section;
