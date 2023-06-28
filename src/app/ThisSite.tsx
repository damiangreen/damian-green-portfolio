import FancyLink from "@/FancyLink";

const ThisSite = () => (
  <div className="max-w-3xl m-auto py-8 px-2">
    <h2 className="mb-4 text-2xl">This site</h2>
    <p className="mb-6">
      This site was built in part to learn NextJS /{" "}
      <FancyLink href="https://tailwindcss.com/" target="_blank">
        Tailwind
      </FancyLink>{" "}
      / Vercel and partly as a web presence. The repository for this site can be
      found{" "}
      <FancyLink
        href="https://github.com/damiangreen/damian-green-portfolio"
        target="_blank"
      >
        here.
      </FancyLink>{" "}
      Background images generated with{" "}
      <FancyLink href="https://clipdrop.co/stable-diffusion" target="_blank">
        Stable Diffusion.
      </FancyLink>
    </p>
  </div>
);

export default ThisSite;
