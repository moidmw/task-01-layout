import Heading from "./heading";
import Image from "next/image";

type Props = {
  heading?: string | React.ReactNode;
  subHeading?: string | React.ReactNode;
};

const BorderImg = () => (
  <Image
    className="mx-auto"
    src="https://altcampus.github.io/training-studio/assets/media/line-dec.png"
    alt="border"
    width={45}
    height={15}
  />
);

const SectionHeader = (props: Props) => {
  const { heading, subHeading } = props;
  return (
    <div>
      <Heading className="mb-4">{heading}</Heading>
      <BorderImg />
      <p className="my-4 font-extralight max-w-md mx-auto">
        {subHeading}
      </p>
    </div>
  );
};

export default SectionHeader;
