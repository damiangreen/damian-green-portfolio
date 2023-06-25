import Image from "next/image";
import "./Datto.css";
/* eslint-disable react/no-unescaped-entities */
import rmmDashboard from "./datto/rmm-dashboard.png";

const CaseStudyDatto = () => (
  <div className="m-auto py-8">
    <h2 className="text-4xl text-center mb-10 tracking-tight datto-title font-bold">
      Case Study | Datto
    </h2>
    <div className="flex mb-8 leading-relaxed max-w-screen-lg m-auto flex-wrap">
      <div className="flex-1">
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
          cloud based tech leveraging the power and simplicity of GraphQL.
        </p>
      </div>
      <div className="flex-1">
        <Image src={rmmDashboard} alt="rmm dashboard" className="w-full" />
      </div>
    </div>
  </div>
);

export default CaseStudyDatto;
