/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import GoogleDoc from "./GoogleDoc";
import StackOverflow from "./StackOverflow";
import Image from "next/image";
import instagram from "./instagram.png";

export default function Home() {
  return (
    <>
      <main>
        <header
          className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url("/woods.jpeg")` }}
        >
          <div className="p-5 text-black bg-white bg-opacity-50">
            <h2 className="px-5 text-4xl text-center uppercase mb-1 font-mono tracking-wide">
              Damian Green
            </h2>
            <p className="mb-1 text-slate-900">
              Software Developer | Father | Oil Painter
            </p>
          </div>
        </header>
        <div className="max-w-xl m-auto py-8">
          <h2 className="text-4xl text-center uppercase mb-10 font-mono tracking-wide">
            About Me
          </h2>
          <div className="flex mb-8 leading-relaxed">
            <div>
              <p className="mb-6">
                I've been coding since the Amiga 68K Assembler days and it has
                been my passion ever since.
              </p>
              <p className="mb-6">
                Recently, I've been coding mostly with Typescript and ReactJS,
                with a long history of full-stack development using C# and .Net.
                I strive to keep up-to-date with technology.
              </p>
              <p className="mb-6">
                If you're hiring my CV can be downloaded{" "}
                <Link href="https://shorturl.at/jwCX3">here.</Link>
              </p>
            </div>
            <div className="flex-1 flex">
              <div className="m-auto animate-pulse hover:animate-off flex flex-col">
                <Link href="https://shorturl.at/jwCX3">
                  <GoogleDoc />
                </Link>
                <div className="text-center">CV</div>
              </div>
            </div>
          </div>
          <div className="flex leading-relaxed flex-column">
            <div>
              I give back to the developer community by helping to answer
              questions on StackOverflow. My profile is found here.
            </div>
            <div>
              <Link href="https://stackoverflow.com/users/1801403/damian-green">
                <div className="bg-white px-2">
                  <StackOverflow />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <header
          className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover "
          style={{ backgroundImage: `url("/gnome.png")` }}
        ></header>
        <div className="max-w-lg m-auto py-8">
          <h2 className="mb-4 text-2xl">This site</h2>
          <p className="mb-8">
            This site was built in part to learn NextJS /{" "}
            <Link
              href="https://tailwindcss.com/"
              className="hover:underline decoration-dotted"
            >
              Tailwind
            </Link>{" "}
            / Vercel and partly as a web presence.{" "}
          </p>
          <p className="mb-8">
            The repository for this site can be found{" "}
            <Link
              href="https://github.com/damiangreen/damian-green-portfolio"
              className="hover:underline decoration-dotted"
            >
              here
            </Link>
          </p>
          <p className="mb-8">
            Background images were generated with{" "}
            <Link
              href="https://clipdrop.co/stable-diffusion"
              className="hover:underline decoration-dotted"
            >
              Stable Diffusion.
            </Link>
          </p>
          <p>This site is ongoing. More to come.</p>
        </div>
        <header
          className="flex items-center justify-center bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url("/woods.jpeg")`, height: "10vh" }}
        ></header>
        <div className="max-w-lg m-auto py-8">
          <h2 className="mb-4 text-2xl">Painting</h2>
          <div className="flex">
            <div>
              <p className="mb-8">
                When I'm not working or coding I like to paint. I've been
                painting with water-based oils for a few years now and I'm still
                learning.
              </p>
            </div>
            <div className="p-1">
              <Link
                href="https://www.instagram.com/damian.green.art"
                className="hover:underline decoration-dotted"
              >
                <Image src={instagram} alt="instagram" height={200} />
              </Link>
            </div>
          </div>
        </div>
        <header
          className="flex items-center justify-center bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url("/woods.jpeg")`, height: "10vh" }}
        ></header>
      </main>
      {/**https://github.com/damiangreen */}
      {/**https://www.linkedin.com/in/damian-green-1686288/ */}
      {/** https://stackoverflow.com/users/1801403/damian-green */}
      <footer className="text-gray-600 body-font">
        <div className="bg-gray-100">
          <div className="container px-5 py-6 mx-auto flex items-center flex-row ">
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2023 Damian Green
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a
                className="ml-3 text-gray-500"
                href="https://www.instagram.com/damian.green.art"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a
                className="ml-3 text-gray-500"
                href="https://www.linkedin.com/in/damian-green-1686288/"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
