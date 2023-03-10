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
      <div className="bg-white relative">
        <video
          autoPlay
          muted
          loop
          src="https://altcampus.github.io/training-studio/assets/media/gym-video.mp4"
        />
        <Section className="absolute top-0 left-0 bottom-0 w-full !bg-black/50 text-white">
          <div>
            <h3 className="text-xl font-extrabold tracking-wider">
              WORK HARDER, GET STRONGER
            </h3>
            <h2 className="text-7xl font-black pt-7 pb-9 tracking-wide">
              EASY WITH OUT <span className="text-orange-700">GYM</span>
            </h2>
            <Button text="BECOME A MEMBER" />
          </div>
        </Section>
      </div>
      <Section>
        <div>
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
        </div>
      </Section>
      <Section className="bg-[url('https://altcampus.github.io/training-studio/assets/media/cta-bg.jpg')] text-white">
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
            <div className="flex flex-col basis-2/4 mr-10 flex-wrap">
              {ourClasses.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row w-full text-left shadow-md p-7 mb-8 items-center"
                  >
                    <Image
                      className="mr-4 w-9 h-9 flex"
                      src="https://altcampus.github.io/training-studio/assets/media/tabs-first-icon.png"
                      alt="image"
                      width="35"
                      height="35"
                    />
                    <p className="font-semibold text-2xl">{item}</p>
                  </div>
                );
              })}
            </div>
            <div className="w-full text-left">
              <Image
                src="https://altcampus.github.io/training-studio/assets/media/training-image-01.jpg"
                alt="training image"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto mb-10"
              />
              <p className="font-bold text-2xl">First Training Class</p>
              <p className="my-4 font-extralight mx-auto">
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
      <Section className="bg-[url('https://altcampus.github.io/training-studio/assets/media/schedule-bg.jpg')] text-white">
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
          <div className="table table-fixed w-full mt-10">
            {schedule.map((item, index) => {
              return (
                <div key={index} className="group table-row">
                  <div className="table-cell p-5 border-l border-slate-700 border-t border-r group-last:border-b">
                    {item.type}
                  </div>
                  <div className="table-cell p-5 border-t border-slate-700 border-r group-last:border-b">
                    {item.slot1}
                  </div>
                  <div className="table-cell p-5 border-t border-slate-700 border-r group-last:border-b">
                    {item.slot2}
                  </div>
                  <div className="table-cell p-5 border-t border-slate-700  border-r group-last:border-b">
                    {item.trainer}
                  </div>
                </div>
              );
            })}
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
          <div className="flex flex-row flex-wrap justify-center">
            {trainer.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex max-w-xs flex-col text-left p-6 m-5 rounded-lg shadow-md shadow-slate-300 flex-0"
                >
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
