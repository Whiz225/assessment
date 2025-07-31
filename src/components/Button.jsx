import { motion } from "framer-motion";

const sizeClasses = {
  circle: "text-sm px-4 py-3 font-medium rounded-full",
  small: "text-[1.2rem] px-6 py-3 font-medium",
};

export default function Button({
  children,
  size = "small",
  style,
  type,
  onClick,
  disabled = false,
}) {
  const buttonElement = (
    <motion.button
      className={`
        ${sizeClasses[size]} ${style}
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
      whileHover={
        !disabled
          ? {
              scale: 1.05,
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }
          : {}
      }
      whileTap={
        !disabled
          ? {
              scale: 0.98,
            }
          : {}
      }
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );

  return buttonElement;
}
