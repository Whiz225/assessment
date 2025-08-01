import Input from "./components/Input";
import { motion } from "framer-motion";

interface PersonalInfoProps {
  formData: {
    fullName: string;
    email: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: {
    fullName?: string;
    email?: string;
  };
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({
  formData,
  handleChange,
  errors,
}) => {
  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2>Personal Information</h2>
      <div>
        <label htmlFor="fullName" className="block text-sm">
          Full Name
        </label>
        <Input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          autoComplete="on"
          className={errors.fullName ? "border-[#b91c1c]" : "border"}
        />
        {errors.fullName && (
          <motion.p
            className="mt-1 text-sm text-[#991b1b]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {errors.fullName}
          </motion.p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm">
          Email Address
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="on"
          className={errors.email ? "border-[#b91c1c]" : "border"}
        />
        {errors.email && (
          <motion.p
            className="mt-1 text-sm text-[#991b1b]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {errors.email}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default PersonalInfo;
