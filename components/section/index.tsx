import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Section = ({ children }: Props) => {
  return (
    <div className="flex flex-col flex-wrap text-center h-screen content-center justify-center bg-gray-300 border-b-2 border-slate-600 px-32">
      {children}
    </div>
  );
};

export default Section;
