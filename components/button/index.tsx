type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
    <button className="w-fit bg-orange-700 text-white mx-auto px-5 py-4 font-normal uppercase">
      {text}
    </button>
  );
};

export default Button;
