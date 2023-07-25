import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQueries";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";

import React from "react";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowserCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={` ${
        selectedPage == lowserCasePage ? "sm:text-yellow text-gray-200" : " "
      } sm:hover:text-btncolor sm:hover:border-b-2  hover:text-primary sm:hover:border-btncolor transition duration-500`}
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
  console.log(isMenuToggled);

  return (
    <nav className={`z-40 w-full fixed top-0 py-6 `}>
      <div className="flex items-center justify-between mx-auto w-5/6  ">
        <h3 className="font-playfair text-3xl font-bold">Aman</h3>

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
          <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <AiOutlineMenu size={20} />
          </button>
        )}

        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-btncolor border-l-2 shadow-md w-[300px]">
            <div className="flex justify-end p-10">
              <button onClick={() => setIsMenuToggled(!setIsMenuToggled)}>
                <AiOutlineCloseCircle size={25} color="black" />
              </button>
            </div>

            <div className="flex flex-col gap-10 ml-[33%] text-3xl text-headcolor">
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
