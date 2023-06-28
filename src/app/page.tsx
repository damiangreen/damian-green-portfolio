import AboutMe from "./AboutMe";
import ThisSite from "./ThisSite";
import Footer from "./Footer";
import Header from "./Header";
import CaseStudyDatto from "./CaseStudyDatto";
import WoodsCover from "./WoodsCover";
import Clients from "./Clients";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <CaseStudyDatto />
        <WoodsCover />
        <Clients />
        <AboutMe />
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
