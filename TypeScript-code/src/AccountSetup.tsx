import Input from "./components/Input";
import { motion } from "framer-motion";

interface AccountSetupProps {
  formData: {
    username: string;
    password: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: {
    username?: string;
    password?: string;
  };
}

const AccountSetup: React.FC<AccountSetupProps> = ({
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
      <h2>Account Setup</h2>
      <div>
        <label htmlFor="username" className="block text-sm">
          Username
        </label>
        <Input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          autoComplete="on"
          onChange={handleChange}
          className={errors.username ? "border-[#b91c1c]" : "border"}
        />
        {errors.username && (
          <motion.p
            className="mt-1 text-sm text-[#991b1b]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {errors.username}
          </motion.p>
        )}
      </div>
      <div>
        <label htmlFor="password" className="block text-sm">
          Password
        </label>
        <Input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          autoComplete="on"
          onChange={handleChange}
          className={errors.password ? "border-[#b91c1c]" : "border"}
        />
        {errors.password && (
          <motion.p
            className="mt-1 text-sm text-[#991b1b]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {errors.password}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default AccountSetup;
