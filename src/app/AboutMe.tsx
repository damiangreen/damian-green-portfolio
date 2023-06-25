import Link from "next/link";
import StackOverflow from "./StackOverflow";
const cvUrl = "https://tinyurl.com/damian-green";

const AboutMe = () => (
  <div className="max-w-screen-lg m-auto py-8 px-8">
    <h2 className="text-4xl text-center uppercase mb-10 font-mono tracking-wide">
      About Me
    </h2>
    <div className="flex mb-1 leading-relaxed">
      <div>
        <p className="mb-6">
          I've been coding since 1987 starting with the Amiga 68K Assembler days
          and it has been my passion ever since. Recently, I've been coding
          mostly with Typescript and ReactJS, with a long history of full-stack
          development using C# and .Net. I strive to keep up-to-date with
          technology. My CV can be found <Link href={cvUrl}>here.</Link>
        </p>
      </div>
    </div>
    <div className="flex leading-relaxed flex-column mb-8">
      <div>
        I give back to the developer community by helping to answer questions on
        StackOverflow. My StackOverflow profile is{" "}
        <Link
          href="https://stackoverflow.com/users/1801403/damian-green"
          className="bg-white p-0 m-0 inline-block"
        >
          here
        </Link>
        . My LinkedIn profile can be found{" "}
        <Link
          href="https://www.linkedin.com/in/damian-green-1686288/"
          className="p-0 m-0"
        >
          here{" "}
        </Link>
      </div>
    </div>
  </div>
);

export default AboutMe;
