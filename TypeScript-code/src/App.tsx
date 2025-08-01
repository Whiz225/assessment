import { useState } from "react";
import OnboardingModal from "./OnboardingModal";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={`min-h-screen flex items-center justify-center`}>
      <AnimatePresence>
        {!showModal && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Start Onboarding
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showModal && <OnboardingModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
