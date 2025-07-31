import Input from "./components/Input";
import { motion } from "framer-motion";

const AccountSetup = ({ formData, handleChange, errors }) => {
  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-semibold text-gray-800">Account Setup</h2>
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <Input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className={errors.username ? "border-red-700" : "border"}
        />
        {errors.username && (
          <motion.p
            className="mt-1 text-sm text-red-800"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {errors.username}
          </motion.p>
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <Input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={errors.password ? "border-red-700" : "border"}
        />
        {errors.password && (
          <motion.p
            className="mt-1 text-sm text-red-800"
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
