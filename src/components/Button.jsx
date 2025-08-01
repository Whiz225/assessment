import { motion } from "framer-motion";

const sizeClasses = {
  circle: "rounded-full",
};

export default function Button({ children, size, style, onClick }) {
  const buttonElement = (
    <motion.button
      className={`${sizeClasses[size]} ${style}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );

  return buttonElement;
}
