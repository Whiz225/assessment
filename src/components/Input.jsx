import { motion } from "framer-motion";

function Input({ className = "", ...props }) {
  return (
    <motion.input
      className={`
        border bg-[#374151] py-[0.8rem] mt-[0.5rem] mb-[0.5rem] px-[1.9rem] focus:outline-none focus:ring-2 focus:ring-brand-500 
         ${className}
      `}
      whileFocus={{
        scale: 1.02,
        borderColor: "#15803d",
        boxShadow: "0 0 0 2px rgba(34, 148, 85, 0.2)",
      }}
      whileHover={{
        borderColor: "#15803d",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
      {...props}
    />
  );
}

export default Input;
