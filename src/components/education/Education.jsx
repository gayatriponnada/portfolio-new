import React from "react";
import { Timeline } from "../ui/timeline";
import DegreeCollegeLogo from "../../assets/degree.jpeg";
import JuniorCollegeLogo from "../../assets/pre-university.jpeg";
import SchoolingLogo from "../../assets/sssvn.jpeg";
import {
  Card,
  CardDescription,
  CardTitle,
  HoverEffect,
} from "../ui/card-hover-effect";
const Education = () => {
  const data = [
    {
      title: "Bachelors",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-left text-neutral-800 md:text-sm dark:text-neutral-200">
            Graduated in 2023 from Aditya Women's Degree, Rajhmundry, India with
            a Bachelor's degree in Computer Applications.
          </p>
          <div className="grid grid-cols-2 gap-4 ">
            <a
              href="https://aditya.ac.in/adcrjy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={DegreeCollegeLogo}
                alt="Aditya Degree College"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 filter grayscale"
              />
            </a>
            <div>
              <Card>
                <div className="flex items-center gap-4 mb-2 ">
                  <div className="bg-black border border-transparent dark:border-white/[0.2] p-2 rounded-md">
                    <i class="fa-solid fa-graduation-cap"></i>
                  </div>
                  <div className="flex flex-col gap-[0.8px] justify-start items-start">
                    <div>CGPA</div>
                    <div>with distinction</div>
                  </div>
                </div>
                <CardDescription>8.3</CardDescription>
              </Card>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Pre-University",
      content: (
        <div>
          <p className=" text-left mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Completed Pre-University in 2020 from Sri Chaitanya Junior College,
            Rajhmundry, India with a focus on Mathematics, Physics, Chemistry.
          </p>
          <div className="grid grid-cols-2 gap-4 ">
            <img
              src={JuniorCollegeLogo}
              alt="Sri Chaitanya Junior College"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 filter grayscale"
            />
            <div>
              <Card>
                <div className="flex items-center gap-4 mb-2 ">
                  <div className="bg-black border border-transparent dark:border-white/[0.2] p-2 rounded-md">
                    <i class="fa-solid fa-graduation-cap"></i>
                  </div>
                  <div className="flex flex-col gap-[0.8px] justify-start items-start">
                    <div>CGPA</div>
                    <div>with distinction</div>
                  </div>
                </div>
                <CardDescription>9.5</CardDescription>
              </Card>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Schooling",
      content: (
        <div>
          <p className=" text-left mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Completed Schooling in 2018 from Sri Shiridi Sai Vidhya Niketan
            School, Kadiyam, India.
          </p>
          <div className="grid grid-cols-2 gap-4 ">
            <a
              href="https://srishirdisaischools.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={SchoolingLogo}
                alt="Sri Shiridi Sai Vidhya Niketan School"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 filter grayscale"
              />
            </a>
            <div>
              <Card>
                <div className="flex items-center gap-4 mb-2 ">
                  <div className="bg-black border border-transparent dark:border-white/[0.2] p-2 rounded-md">
                    <i class="fa-solid fa-graduation-cap"></i>
                  </div>
                  <div className="flex flex-col gap-[0.8px] justify-start items-start">
                    <div>CGPA</div>
                    <div>with distinction</div>
                  </div>
                </div>
                <CardDescription>10.00</CardDescription>
              </Card>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-md mb-2 text-left text-black dark:text-fuchsia-700 ">
          My Learning Journey
        </h2>
      </div>
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </>
  );
};

export default Education;
