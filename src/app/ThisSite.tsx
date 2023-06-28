import Link from "next/link";

const ThisSite = () => (
  <div className="max-w-3xl m-auto py-8 px-2">
    <h2 className="mb-4 text-2xl">This site</h2>
    <p className="mb-6">
      This site was built in part to learn NextJS /{" "}
      <Link href="https://tailwindcss.com/">Tailwind</Link> / Vercel and partly
      as a web presence. The repository for this site can be found{" "}
      <Link href="https://github.com/damiangreen/damian-green-portfolio">
        here.
      </Link>{" "}
      Background images generated with{" "}
      <Link href="https://clipdrop.co/stable-diffusion">Stable Diffusion.</Link>
    </p>
  </div>
);

export default ThisSite;
