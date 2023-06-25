import Link from "next/link";

const ThisSite = () => (
  <div className="max-w-lg m-auto py-8">
    <h2 className="mb-4 text-2xl">This site</h2>
    <p className="mb-6">
      This site was built in part to learn NextJS /{" "}
      <Link
        href="https://tailwindcss.com/"
        className="hover:underline decoration-dotted"
      >
        Tailwind
      </Link>{" "}
      / Vercel and partly as a web presence.{" "}
    </p>
    <p className="mb-6">
      The repository for this site can be found{" "}
      <Link
        href="https://github.com/damiangreen/damian-green-portfolio"
        className="hover:underline decoration-dotted"
      >
        here.
      </Link>
    </p>
    <p className="mb-6">
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
);

export default ThisSite;
