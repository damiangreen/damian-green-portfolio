import Link from "next/link";
import Image from "next/image";
import instagram from "./instagram.png";

const Painting = () => (
  <div className="max-w-lg m-auto py-8 px-2">
    <h2 className="mb-4 text-2xl">Painting</h2>
    <div className="flex">
      <div>
        <p className="mb-8">
          When I'm not working or parenting I like to paint. I've been painting
          with water-based oils for a few years now and I continue to learn.
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
);

export default Painting;
