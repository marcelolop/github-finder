import React from "react";
import SearchGithub from "../components/SearchGitHub";
import { motion } from "framer-motion";

const Search = () => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <SearchGithub />
    </motion.div>
  );
};

export default Search;
