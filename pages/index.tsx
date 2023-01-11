import Head from "next/head";
import Image from "next/image";
import Section from "../components/section";
import ProgramItem from "../components/programItem";
import Button from "../components/button";
import {
  programItems,
  ourClasses,
  days,
  schedule,
  trainer,
} from "../constants/programItems";
import SectionHeader from "../components/sectionHeader";
import Header from "../components/sectionHeader/heading";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <h3 className="text-xl font-bold">WORK HARDER, GET STRONGER</h3>
        <h2 className="text-7xl font-black pt-7 pb-9">EASY WITH OUT GYM</h2>
        <Button text="BECOME A MEMBER" />
      </Section>
      <Section>
        <SectionHeader
          heading={
            <>
              Choose <span className="text-orange-700">Program</span>
            </>
          }
          subHeading="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          rem nostrum, deserun dolor delectus."
        />
        <div className="flex flex-row flex-wrap">
          {programItems.map((item, index) => {
            return (
              <ProgramItem
                key={index}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            );
          })}
        </div>
      </Section>
      <Section>
        <SectionHeader
          heading={
            <>
              Don&apos;t <span className="text-orange-700">Think</span>, Begin{" "}
              <span className="text-orange-700">Today</span>
            </>
          }
          subHeading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
          provident dolores? Iste illo, aperiam sit dolore quis, nobis
          laudantium. Lorem ipsum dolor sit amet."
        />
        <Button text="Become a member" />
      </Section>
      <Section>
        <div className="w-full">
          <SectionHeader
            heading={
              <>
                Our <span className="text-orange-700">Classes</span>
              </>
            }
            subHeading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
          provident dolores? Iste illo, aperiam sit dolore quis, nobis
          laudantium. Lorem ipsum dolor sit amet."
          />
          <div className="flex flex-row w-full">
            <div className="flex flex-col">
              {ourClasses.map((item, index) => {
                return <div key={index}>{item}</div>;
              })}
            </div>
            <div className="w-full">
              <Image
                src="https://altcampus.github.io/training-studio/assets/media/training-image-01.jpg"
                alt="training image"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
              />
              <Header text="First Training Class" />
              <p className="my-4 font-extralight max-w-md mx-auto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
                delectus unde at accusantium optio perspiciatis deserunt.
                Ratione, iure praesentium tempora similique ut voluptatum
                doloremque nisi est aperiam quas architecto repellat!
              </p>
              <Button text="View schedule" />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div>
          <SectionHeader
            heading={
              <>
                Classes <span className="text-orange-700">Schedule</span>
              </>
            }
            subHeading="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore rem nostrum, deserunt eum dolor delectus."
          />
          <div className="flex flex-row justify-center">
            {days.map((item) => (
              <div key={item} className="group">
                {item}
                <span className="group-last:hidden mx-2">/</span>
              </div>
            ))}
          </div>
          <div>
            <table className="table-fixed w-full mt-10">
              {schedule.map((item, index) => {
                return (
                  <tr key={index} className="group">
                    <td className="p-5 border-l border-slate-700 border-t border-r group-last:border-b">
                      {item.type}
                    </td>
                    <td className="p-5 border-t border-slate-700 border-b border-r">
                      {item.slot1}
                    </td>
                    <td className="p-5 border-t border-slate-700 border-b border-r">
                      {item.slot2}
                    </td>
                    <td className="p-5 border-t border-slate-700 border-b border-r">
                      {item.trainer}
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </Section>
      <Section>
        <div className="w-full">
          <SectionHeader
            heading={
              <>
                Expert <span className="text-orange-700">Trainer</span>
              </>
            }
            subHeading="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore rem nostrum, deserunt eum dolor delectus."
          />
          <div className="flex flex-row">
            {trainer.map((item, index) => {
              return (
                <div key={index} className="flex basis-1/3 flex-col text-left bg-white p-6 m-5 rounded-lg shadow-sm">
                  <Image
                    src={item.profileImage}
                    alt="training image"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                  <p className="text-sm text-orange-700 mt-5">{item.type}</p>
                  <p className="text-xl font-medium mb-3">{item.name}</p>
                  <p className="text-sm font-light">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
};

export default HomePage;
