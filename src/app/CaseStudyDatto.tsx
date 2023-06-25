import Image from "next/image";
import "./Datto.css";
import rmmDashboard from "./datto/rmm-dashboard.png";
import Link from "next/link";
import topology from "./datto/topology.png";

const CaseStudyDatto = () => (
  <div className="m-auto py-32 px-8">
    <h2 className="text-4xl text-center mb-10 tracking-tight datto-title font-bold">
      Case Study <span className="pipe font-normal">|</span>{" "}
      <span className="font-normal">Datto</span>
    </h2>
    <div className="flex mb-8 leading-relaxed max-w-screen-lg m-auto flex-wrap gap-4 ">
      <div className="flex-1 max-w-lg basis-96">
        <p className="mb-6">
          Datto reached out with a requirement to rebuild their flagship RMM
          product.
        </p>
        <p className="mb-6">
          Datto Remote Monitoring and Management (RMM) is a secure cloud-based
          RMM platform. You can remotely secure, monitor, and manage endpoints
          to reduce costs and improve network efficiency.
        </p>
        <p className="mb-6">
          The initial brief was to build out a new piece of dashboarding
          functionality to allow customers to gain insight into their estate of
          devices.
        </p>
        <p className="mb-6">
          This was achieved by building a Typescript ReactJS application hosted
          alongside their existing product. It allowed for resizable, draggable
          widgets which gave instant insight into offline device counts, patch
          status, and more. Customer feedback was positive and we were able to
          iterate quickly in response to feedback. On the back of this success
          we continued to work to build out their entire product using latest
          cloud based tech, leveraging the power and simplicity of GraphQL and
          the type safety and refactorability of Typescript.
        </p>
      </div>
      <div className="flex-1 basis-96">
        <Image src={rmmDashboard} alt="rmm dashboard" className="w-full" />
      </div>
    </div>
    <h2 className="text-4xl text-center mb-10 tracking-tight datto-title">
      Network Discovery
    </h2>
    <div className="flex mb-8 leading-relaxed max-w-screen-lg m-auto flex-wrap gap-8 flex-column">
      <div className="flex-1 basis-96">
        <Image src={topology} alt="rmm dashboard" className="w-full" />
      </div>
      <div className="flex-1 basis-96">
        <p className="mb-6">
          Another notable feature that we built out was a network discovery
          feature. This allows customers to see a topology of their network
          through an SNMP scan from the RMM Network Node agent. Device types /
          operating systems are visually represented and user-configured device
          alerts are easily identifiable. The topology can be drilled into and
          collapsed to investigate certain regions of the network. There were
          interesting challenges to be tackled here with regard to how best to
          represent this data visually in a performant manner.
        </p>
      </div>
    </div>
    <div className="m-auto max-w-screen-lg text-center">
      More information can be found here{" "}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link
          href="https://rmm.datto.com/help/en/Content/3NEWUI/NEWUI.htm"
          className="no-underline"
        >
          Datto RMM
        </Link>
      </button>
    </div>
  </div>
);

export default CaseStudyDatto;
