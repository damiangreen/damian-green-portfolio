import LinkedIn from "./LinkedIn";

const Footer = () => (
  <footer className="text-gray-600 body-font">
    <div className="bg-gray-100">
      <div className="container px-5 py-6 mx-auto flex items-center flex-row ">
        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
          © 2023 Damian Green
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            className="ml-3 text-gray-500"
            href="https://www.instagram.com/damian.green.art"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a
            className="ml-3 text-gray-500"
            href="https://www.linkedin.com/in/damian-green-1686288/"
          >
            <LinkedIn />
          </a>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
