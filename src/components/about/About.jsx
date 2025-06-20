import React from "react";
import { useInView } from "../../assets/self-tags/useInView";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

// const words = [
//   {
//     text: "About",
//   },
//   {
//     text: "Me",
//   },
// ];

const Section = ({ title, children }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ease-in-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } flex justify-start items-start flex-col gap-4`}
    >
      <div className="font-normal text-2xl">{title}</div>
      <div className="text-left">{children}</div>
    </div>
  );
};

const About = () => {
  return (
    <div className="w-full flex justify-start items-center">
      <div className="w-[50%] flex justify-start items-start flex-col gap-8 ">
        <div className="text-5xl text-left  dark:text-fuchsia-700 font-md">
          About
        </div>

        <Section title="Professional Experience 👩🏻‍💻">
          I am a passionate Frontend Developer with professional experience as
          an Associate Consultant at Peirsoft Technologies, where I worked for
          11 months. My expertise spans both web and mobile development, with a
          strong focus on building efficient, scalable, and user-friendly
          interfaces.
        </Section>

        <Section title="Web Development Skills 💻">
          In web development, I have hands-on experience with React.js (using
          both Create React App and Vite), along with extensive knowledge of
          Styled Components and Tailwind CSS for crafting responsive and modern
          UI designs. I have a strong ability to create custom reusable
          components, ensuring code reusability, maintainability, and
          consistency across applications.
        </Section>

        <Section title="Mobile Development Skills 📱">
          In mobile development, I have built applications using React Native
          with Expo Go, leveraging Expo's file-based routing to create
          well-structured and scalable mobile solutions.
        </Section>

        <Section title="Continuous Learning & Growth">
          I am highly motivated to learn new technologies, stay updated with
          industry trends, and continuously improve my skill set. My eagerness
          to solve problems and deliver high-quality solutions drives my
          professional growth.
        </Section>
      </div>
    </div>
  );
};

export default About;
