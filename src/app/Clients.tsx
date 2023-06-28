import dattoLogo from "./images/datto-logo-blue-datto.svg";
import electroRentLogo from "./images/electrorent-logo.png";
import pokerStarsLogo from "./images/pokerstars-live-logo.png";
import telefonicaLogo from "./images/telefonica.png";
import umgLogo from "./images/Universal-Music-Group.png";
import jatoLogo from "./images/jato-logo.png";
import metiaLogo from "./images/metialogo.svg";
import Image from "next/image";
import globalGigLogo from "./images/globalGig-logo.svg";
import cannesLionsLogo from "./images/cannes_lions_logo_3703.gif";
import tescoLogo from "./images/tesco-logo.png";
import regusLogo from "./images/regus-logo.png";
import totalObjectsLogo from "./images/total-objects.jpeg";

const flexClass =
  "flex flex-1 basis-48 justify-center items-center mx-8 my-8 max-h-16";
const imgClass = "grayscale hover:grayscale-0 ";

const Clients = () => (
  <div className="max-w-screen-xl m-auto py-16 px-8">
    <h2 className="text-6xl text-center uppercase mb-10 font-mono tracking-wide">
      Clients
    </h2>
    <div className="flex mb-1 leading-relaxed gap-4 flex-wrap">
      <div className={flexClass}>
        <Image
          src={dattoLogo}
          alt="datto"
          height={100}
          className="grayscale hover:grayscale-0 min-w-[120px]"
        />
      </div>
      <div className={flexClass}>
        <Image
          src={electroRentLogo}
          alt="datto"
          height={100}
          className={imgClass}
        />
      </div>
      <div className={flexClass}>
        <Image
          src={pokerStarsLogo}
          alt="poker-stars"
          height={100}
          className={imgClass}
        />
      </div>
      <div className={flexClass}>
        <Image
          src={telefonicaLogo}
          alt="telefonica"
          height={100}
          className={imgClass}
        />
      </div>
      <div className={flexClass}>
        <Image src={umgLogo} alt="umg" height={100} className={imgClass} />
      </div>
      <div className={flexClass}>
        <Image src={jatoLogo} alt="jato" height={100} className={imgClass} />
      </div>
      <div className={flexClass}>
        <Image
          src={metiaLogo}
          alt="metia"
          height={100}
          className="grayscale hover:grayscale-0 bg-slate-800 p-2"
        />
      </div>
      <div className={flexClass}>
        <Image
          src={globalGigLogo}
          alt="globalGig"
          height={100}
          className={imgClass}
        />
      </div>{" "}
      <div className={flexClass}>
        <Image
          src={cannesLionsLogo}
          alt="cannesLions"
          height={100}
          className={imgClass}
        />
      </div>
      <div className={flexClass}>
        <Image src={tescoLogo} alt="tesco" height={100} className={imgClass} />
      </div>
      <div className={flexClass}>
        <Image src={regusLogo} alt="regus" height={100} className={imgClass} />
      </div>
      <div className={flexClass}>
        <Image
          src={totalObjectsLogo}
          alt="total Objects"
          height={100}
          className={imgClass}
        />
      </div>
    </div>
  </div>
);

export default Clients;
