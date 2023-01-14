import Image from "next/image";

type Props = {
  title: string;
  description: string;
  link: string;
};

const ProgramItem = ({ title, link, description }: Props) => {
  return (
    <div className="flex basis-1/2 text-left p-5">
      <div className="bg-white flex flex-row content-center">
        <Image
          className="h-[100px] top-1/2 mr-6"
          src="https://altcampus.github.io/training-studio/assets/media/features-first-icon.png"
          alt={title}
          width={100}
          height={100}
        />
        <div className="flex flex-col flex-initial justify-between">
          <h3 className="text-lg font-semibold leading-none">{title}</h3>
          <p className="text-base font-extralight leading-tight">{description}</p>
          <a className="text-orange-700 uppercase text-sm font-light leading-none">{link}</a>
        </div>
      </div>
    </div>
  );
};

export default ProgramItem;
