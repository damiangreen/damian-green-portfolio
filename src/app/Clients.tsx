import dattoLogo from "./images/datto-logo-blue-datto.svg";
import electroRentLogo from "./images/electrorent-logo.png";
import pokerStarsLogo from "./images/pokerstars-live-logo.png";
import telefonicaLogo from "./images/telefonica.png";
import umgLogo from "./images/Universal-Music-Group.png";
import jatoLogo from "./images/jato-logo.png";
import metiaLogo from "./images/metialogo.svg";
import Image from "next/image";

const flexClass = "flex flex-1 basis-48 justify-center items-center mx-8 my-8";

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
          className="grayscale hover:grayscale-0"
        />
      </div>
      <div className={flexClass}>
        <Image
          src={pokerStarsLogo}
          alt="datto"
          height={100}
          className="grayscale hover:grayscale-0"
        />
      </div>
      <div className={flexClass}>
        <Image
          src={telefonicaLogo}
          alt="datto"
          height={100}
          className="grayscale hover:grayscale-0"
        />
      </div>
      <div className={flexClass}>
        <Image
          src={umgLogo}
          alt="datto"
          height={100}
          className="grayscale hover:grayscale-0"
        />
      </div>
      <div className={flexClass}>
        <Image
          src={jatoLogo}
          alt="datto"
          height={100}
          className="grayscale hover:grayscale-0"
        />
      </div>
      <div className={flexClass}>
        <Image
          src={metiaLogo}
          alt="datto"
          height={100}
          className="grayscale hover:grayscale-0 bg-slate-800 p-2"
        />
      </div>
    </div>
  </div>
);

export default Clients;
