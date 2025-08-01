import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import AccountSetup from "./AccountSetup";
import Preferences from "./Preferences";
import Button from "./components/Button";
import { motion, AnimatePresence } from "framer-motion";

const OnboardingModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    theme: "Light",
    newsletter: false,
  });
  const [errors, setErrors] = useState({});

  const nextStep = (e) => {
    e.preventDefault();
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const prevStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateStep = (currentStep) => {
    let valid = true;
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Full name is required";
        valid = false;
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
        valid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = "Email is invalid";
        valid = false;
      }
    } else if (currentStep === 2) {
      if (!formData.username.trim()) {
        newErrors.username = "Username is required";
        valid = false;
      }
      if (!formData.password) {
        newErrors.password = "Password is required";
        valid = false;
      } else if (formData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(step)) {
      console.log("Form submitted:", formData);
      // Here you would typically send the data to your backend
      alert("Onboarding complete!");
      onClose();
    }
  };

  // Animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: { opacity: 0, scale: 0.9 },
  };

  const stepVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <motion.div
      className="bg-[#0c1c47] rounded-[1rem] p-[3rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        // className="bg-white rounded-lg shadow-xl w-full max-w-md"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="p-6">
          {/* Tabs */}
          <div className="flex justify-between mb-6">
            {[1, 2, 3].map((tab) => (
              <div key={tab} className="flex flex-col items-center">
                <Button
                  size="circle"
                  onClick={() => tab < step && setStep(tab)}
                  style={`${
                    step === tab
                      ? "bg-[#15803d]"
                      : tab < step
                      ? "bg-[#4f46e5]"
                      : ""
                  }
                    ${tab < step ? "cursor-pointer" : "cursor-default"}`}
                >
                  {tab}
                </Button>
                <span>Step {tab}</span>
              </div>
            ))}
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit}>
            <AnimatePresence custom={step} mode="wait">
              <motion.div
                key={step}
                custom={step}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
              >
                {step === 1 && (
                  <PersonalInfo
                    formData={formData}
                    handleChange={handleChange}
                    errors={errors}
                  />
                )}
                {step === 2 && (
                  <AccountSetup
                    formData={formData}
                    handleChange={handleChange}
                    errors={errors}
                  />
                )}
                {step === 3 && (
                  <Preferences
                    formData={formData}
                    handleChange={handleChange}
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-[0.4rem]">
              {step > 1 ? (
                <Button onClick={prevStep}>Back</Button>
              ) : (
                <div></div>
              )}

              {step < 3 ? (
                <Button onClick={nextStep}>Next</Button>
              ) : (
                <Button type="submit">Submit</Button>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OnboardingModal;
