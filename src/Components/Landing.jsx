import React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = () => {
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:item-center md:h-full gap-16 py-10"
    >
      <motion.div initial="hidden" whileInView="visible"></motion.div>
    </section>
  );
};

export default Landing;
