const Header = () => (
  <header
    className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover"
    style={{ backgroundImage: `url("/woods.jpeg")` }}
  >
    <div className="p-5 text-black bg-white bg-opacity-50">
      <h2 className="px-5 text-4xl text-center uppercase mb-1 font-mono tracking-wide">
        Damian Green
      </h2>
      <p className="mb-1 text-slate-900 text-center">Software Developer</p>
    </div>
  </header>
);

export default Header;
