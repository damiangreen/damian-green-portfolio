/* eslint-disable react/no-unescaped-entities */
import AboutMe from "./AboutMe";
import ThisSite from "./ThisSite";
import Footer from "./Footer";
import Painting from "./Painting";
import Header from "./Header";
import CaseStudyDatto from "./CaseStudyDatto";
import WoodsCover from "./WoodsCover";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <CaseStudyDatto />
        <WoodsCover />
        <AboutMe />
        <Painting />
        <header
          className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover "
          style={{ backgroundImage: `url("/gnome.png")`, height: "20vh" }}
        ></header>
        <ThisSite />
        <WoodsCover />
      </main>
      <Footer />
    </>
  );
}
