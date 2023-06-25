/* eslint-disable react/no-unescaped-entities */
import AboutMe from "./AboutMe";
import ThisSite from "./ThisSite";
import { Footer } from "./Footer";
import Painting from "./Painting";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <main>
        <Header />
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
