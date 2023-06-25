import Link from "next/link";
import GoogleDoc from "./GoogleDoc";
import LinkedIn from "./LinkedIn";
import StackOverflow from "./StackOverflow";
/* eslint-disable react/no-unescaped-entities */
const cvUrl = "https://tinyurl.com/damian-green";

const AboutMe = () => (
  <div className="max-w-xl m-auto py-8">
    <h2 className="text-4xl text-center uppercase mb-10 font-mono tracking-wide">
      About Me
    </h2>
    <div className="flex mb-8 leading-relaxed">
      <div>
        <p className="mb-6">
          I've been coding since the Amiga 68K Assembler days and it has been my
          passion ever since.
        </p>
        <p className="mb-6">
          Recently, I've been coding mostly with Typescript and ReactJS, with a
          long history of full-stack development using C# and .Net. I strive to
          keep up-to-date with technology.
        </p>
        <p className="mb-6">
          If you're hiring my CV can be downloaded{" "}
          <Link href={cvUrl}>here.</Link>
        </p>
      </div>
      <div className="flex-1 flex">
        <div className="m-auto animate-pulse hover:animate-off flex flex-col">
          <Link href={cvUrl}>
            <GoogleDoc />
          </Link>
          <div className="text-center">CV</div>
        </div>
      </div>
    </div>
    <div className="flex leading-relaxed flex-column mb-8">
      <div>
        I give back to the developer community by helping to answer questions on
        StackOverflow. My profile is found here.
      </div>
      <div className="m-2">
        <Link href="https://stackoverflow.com/users/1801403/damian-green">
          <div className="bg-white px-2 m-2">
            <StackOverflow />
          </div>
        </Link>
      </div>
    </div>
    <div className="flex leading-relaxed flex-column gap-2">
      <div className="flex-auto">My LinkedIn profile can be found</div>
      <div className="flex-1 flex p-2">
        <Link href="https://www.linkedin.com/in/damian-green-1686288/">
          <LinkedIn />
        </Link>
      </div>
    </div>
  </div>
);

export default AboutMe;
