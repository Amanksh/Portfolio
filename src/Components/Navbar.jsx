import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQueries";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Lottie from "lottie-react";
import comp1 from "../assets/Comp1.json";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowserCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={` ${
        selectedPage == lowserCasePage ? "text-yellow " : " "
      } sm:hover:text-mainBtn sm:hover:border-b-2 text-headColor hover:text-primary sm:hover:border-mainBtn transition duration-500 text-xl`}
      href={`#${lowserCasePage}`}
      onClick={() => setSelectedPage(lowserCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width : 768px)");

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav
      className={` ${
        color ? "bg-primary shadow-lg" : " "
      } z-40 w-full fixed top-0 py-2  shadow-slate-100`}
    >
      <div className="flex items-center justify-between mx-auto w-5/6  ">
        {/* <h3 className="font-playfair text-xl font-bold text-headColor">
        </h3> */}
        <Lottie loop={true} animationData={comp1} className="w-[80px]" />

        {/* {Desktop mav} */}

        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            className="text-headColor"
          >
            <AiOutlineMenu size={20} />
          </button>
        )}

        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full  bg-mainBtn border-l-2 shadow-md shadow-slate-600 w-[300px]">
            <div className="flex justify-end p-10">
              <button onClick={() => setIsMenuToggled(!setIsMenuToggled)}>
                <AiOutlineCloseCircle size={25} color="black" />
              </button>
            </div>

            <div className="flex flex-col gap-10 ml-[33%] text-3xl text-headcolor font-bold">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
