type Props = {
  text?: string;
  children?: React.ReactNode;
  className?: string,
};

const SectionHeading = ({ text, children, className }: Props) => {
  return (
    <h2 className={`text-3xl font-extrabold uppercase ${className}`}>{text || children}</h2>
  );
};

export default SectionHeading;
