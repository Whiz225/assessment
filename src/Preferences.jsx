import Input from "./components/Input";
import { motion } from "framer-motion";

const Preferences = ({ formData, handleChange }) => {
  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2>Preferences</h2>
      <div>
        <label
          htmlFor="theme"
          className="block text-sm font-medium text-gray-700"
        >
          Theme
        </label>
        <motion.select
          id="theme"
          name="theme"
          value={formData.theme}
          onChange={handleChange}
          className="mt-[0.2rem] mb-[1rem] block w-full rounded-[0.5rem] border border-gray-700 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          whileFocus={{ scale: 1.01 }}
        >
          <option>Light</option>
          <option>Dark</option>
        </motion.select>
      </div>
      <div className="flex items-start">
        <div className="flex h-5 items-center">
          <Input
            id="newsletter"
            name="newsletter"
            type="checkbox"
            autoComplete="on"
            checked={formData.newsletter}
            onChange={handleChange}
            className="h-[1rem] w-[1rem] mb-[1rem]"
          />
        </div>
        <motion.div
          className="ml-3 text-sm mt-[0.2rem]"
          whileHover={{ scale: 1.01 }}
        >
          <label htmlFor="newsletter" className="font-medium text-gray-700">
            Subscribe to newsletter?
          </label>
          <p className="text-gray-500">
            Get updates on new features and products
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preferences;
