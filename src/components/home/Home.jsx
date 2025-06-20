import React from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const Home = () => {
  const words = [
    {
      text: "How",
    },
    {
      text: "It",
    },
    {
      text: "Started?",
    },
  ];
  const newWords = [
    {
      text: "How",
    },
    {
      text: "It",
    },
    {
      text: "Going...",
    },
  ];

  return (
    <div className="w-full flex justify-start items-start flex-col gap-8">
      <div className="text-5xl font-md dark:text-white flex justify-start items-center gap-2">
        Gayatri Lavanyasdfsf{" "}
        <span className="text-5xl font-md dark:text-fuchsia-700">Ponnada</span>
      </div>
      <div className="w-full flex justify-start items-start gap-8">
        <div className="text-left w-[50%] p-4">
          <TypewriterEffectSmooth words={words} />
          <div>
            I was born in 2002 in a small village in India. During my childhood,
            I aspired to become a teacher. However, as I witnessed the rapid
            growth of technology and the evolving era of machines, my interests
            gradually shifted towards software development. While pursuing my
            degree, active participation in coding challenges and competitions
            further fueled my passion for programming, solidifying my aspiration
            to build a career as a software developer.
          </div>
        </div>
        <div className=" text-left w-[50%] bg-gradient-to-b from-zinc-800 via-zinc-800 to-zinc-900 border border-transparent rounded-md p-4  min-h-[50vh]">
          <TypewriterEffectSmooth words={newWords} />
          <div>
            For the past 11 months, I have worked as a Frontend Developer,
            building interactive and user-friendly websites with ERP
            functionality. During this time, I have gained hands-on experience
            in developing responsive interfaces, optimizing performance, and
            collaborating closely with backend teams to ensure seamless
            integration of complex business processes. My work has allowed me to
            strengthen my problem-solving skills, enhance user experience
            through intuitive design, and continuously adapt to evolving
            technologies in the frontend ecosystem.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
