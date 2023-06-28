import FancyLink from "@/FancyLink";
const cvUrl = "https://tinyurl.com/damian-green";
const soUrl = "https://stackoverflow.com/users/1801403/damian-green";
const linkedInUrl = "https://www.linkedin.com/in/damian-green-1686288/";
const instagramUrl = "https://www.instagram.com/damian.green.art";

const AboutMe = () => (
  <div className="max-w-3xl m-auto py-8 px-8">
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
          technology. My CV can be found{" "}
          <FancyLink href={cvUrl}>here.</FancyLink>
        </p>
      </div>
    </div>
    <div className="flex leading-relaxed flex-column mb-8">
      <div>
        I give back to the developer community by helping to answer questions on
        StackOverflow. My StackOverflow profile is{" "}
        <FancyLink href={soUrl} target="_blank">
          here
        </FancyLink>
        . My LinkedIn profile can be found{" "}
        <FancyLink href={linkedInUrl} target="_blank">
          here{" "}
        </FancyLink>
      </div>
    </div>
    <div className="flex">
      <div>
        When I'm not working or parenting I like to paint. I've been painting
        with water-based oils for a few years now and I continue to learn.{" "}
        <FancyLink href={instagramUrl} target="_blank">
          See my Instagram
        </FancyLink>
      </div>
    </div>
  </div>
);

export default AboutMe;
