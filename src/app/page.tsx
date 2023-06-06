/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import GoogleDoc from "./GoogleDoc";

export default function Home() {
  return (
    <>
      <main>
        <header
          className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover "
          style={{ backgroundImage: `url("/woods.jpeg")` }}
        >
          <div className="p-5 text-black bg-white bg-opacity-50 rounded-xl">
            <h2 className="p-5 text-4xl text-center uppercase mb-1 font-mono">
              Damian Green
            </h2>
            <p className="mb-1 text-gray">
              Software Developer | Father | Oil Painter
            </p>
          </div>
        </header>
        <div className="max-w-xl m-auto">
          <div className="flex mb-4">
            <div>
              <p className="mb-4">
                I've been coding since the Amiga 68000 Assembler days and it has
                been my passion ever since.
              </p>
              <p className="mb-4">
                Recently I've been coding mostly with Typescript and ReactJs,
                with a long history of full-stack development using C# and .Net.
                I strive to keep up-to-date with technology.
              </p>
              <p className="mb-4 ">
                If you're hiring my cv can be found here{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </p>
            </div>
            <div className="flex-1 flex">
              <div className="m-auto">
                <Link href="https://shorturl.at/jwCX3">
                  <GoogleDoc />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <header
          className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover "
          style={{ backgroundImage: `url("/woods.jpeg")` }}
        >
          <div className="p-5 text-black bg-white bg-opacity-50 rounded-xl">
            <h2 className="p-5 text-4xl text-center uppercase mb-1">
              Damian Green
            </h2>
            <p>Welcome to my corner of the web.</p>
          </div>
        </header>
        <div className="max-w-lg m-auto">
          <h2 className="mb-4 text-2xl">This site</h2>
          <p className="mb-4">
            I built this site partly to learn NextJS / Tailwind / Vercel and
            partly as a web presence. The repository for this site can be found{" "}
            <Link href="https://github.com/damiangreen/damian-green-portfolio">
              here
            </Link>
            . The background images were generated with Stable Diffusion.
          </p>
        </div>
      </main>
      {/**https://github.com/damiangreen */}
      {/**https://www.linkedin.com/in/damian-green-1686288/ */}
      {/** https://stackoverflow.com/users/1801403/damian-green */}
      <footer className="text-gray-600 body-font">
        <div className="bg-gray-100">
          <div className="container px-5 py-6 mx-auto flex items-center flex-row ">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Tailblocks</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2020 Tailblocks —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @knyttneve
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
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
              <a className="ml-3 text-gray-500">
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
