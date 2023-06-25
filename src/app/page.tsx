/* eslint-disable react/no-unescaped-entities */
import AboutMe from "./AboutMe";
import ThisSite from "./ThisSite";
import { Footer } from "./Footer";
import Painting from "./Painting";

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
            <p className="mb-1 text-slate-900 text-center">
              Software Developer
            </p>
          </div>
        </header>
        <AboutMe />
        <header
          className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover "
          style={{ backgroundImage: `url("/gnome.png")`, height: "20vh" }}
        ></header>
        <ThisSite />
        <header
          className="flex items-center justify-center bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url("/woods.jpeg")`, height: "10vh" }}
        ></header>
        <Painting />
        <header
          className="flex items-center justify-center bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url("/woods.jpeg")`, height: "10vh" }}
        ></header>
      </main>
      <Footer />
    </>
  );
}
