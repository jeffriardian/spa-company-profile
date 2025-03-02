const Navbar = () => (
  <nav className="w-full p-4 bg-primary text-white fixed top-0 shadow-md">
    <div className="container mx-auto flex justify-between">
      <h1 className="text-xl font-bold">SPA Company</h1>
      <div className="space-x-4">
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>
);
export default Navbar;