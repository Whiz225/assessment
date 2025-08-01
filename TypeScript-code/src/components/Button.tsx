import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  size?: "circle";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

const sizeClasses = {
  circle: "rounded-full",
};

const Button: React.FC<ButtonProps> = ({
  children,
  size,
  className = "",
  onClick,
  type = "button",
}) => {
  return (
    <motion.button
      className={`${size ? sizeClasses[size] : ""} ${className}`}
      onClick={onClick}
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
