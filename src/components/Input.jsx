import { motion } from "framer-motion";

function Input({ className = "", ...props }) {
  return (
    <motion.input
      className={`
        border border-gray-700 py-[0.8rem] mt-[0.5rem] mb-[0.5rem] px-[1.9rem] 
        rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 
        transition-all duration-200 ${className}
      `}
      whileFocus={{
        scale: 1.02,
        borderColor: "#4f46e5",
        boxShadow: "0 0 0 2px rgba(79, 70, 229, 0.2)",
      }}
      whileHover={{
        borderColor: "#4f46e5",
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
