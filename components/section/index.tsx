import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Section = ({ children, className }: Props) => {
  return (
    <div className={`flex flex-col flex-wrap text-center items-center justify-center px-10 py-32 ${className}`}>
      {children}
    </div>
  );
};

export default Section;
