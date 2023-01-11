import Button from "../button";

const Navbar = () => {
  return (
    <header className="absolute w-full top-0 left-0 z-10 text-white shadow-md bg-white/30">
      <div className="flex flex-row justify-between py-3 lg:px-5">
        <a href="#" className="flex items-center">
          <h1 className="text-3xl font-bold">
            <strong>
              TRAINING <span className="text-orange-700">STUDIO</span>
            </strong>
          </h1>
        </a>
        <nav>
          <ul className="flex items-center flex-wrap font-semibold">
            <li className="ml-8"><a href="#">HOME</a></li>
            <li className="ml-8"><a href="#">ABOUT</a></li>
            <li className="ml-8"><a href="#">CLASSES</a></li>
            <li className="ml-8"><a href="#">SCHEDULE</a></li>
            <li className="ml-8"><a href="#">CONTACT</a></li>
            <li className="ml-8">
              <Button text="SIGNUP" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
