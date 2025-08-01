import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import AccountSetup from "./AccountSetup";
import Preferences from "./Preferences";
import Button from "./components/Button";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";

interface FormData {
  fullName: string;
  email: string;
  username: string;
  password: string;
  theme: string;
  newsletter: boolean;
}

interface Errors {
  fullName?: string;
  email?: string;
  username?: string;
  password?: string;
}

interface OnboardingModalProps {
  onClose: () => void;
}

const OnboardingModal: React.FC<OnboardingModalProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    username: "",
    password: "",
    theme: "Light",
    newsletter: false,
  });
  const [errors, setErrors] = useState<Errors>({});

  const nextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const prevStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateStep = (currentStep: number): boolean => {
    let valid = true;
    const newErrors: Errors = {};

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(step)) {
      console.log("Form submitted:", formData);
      alert("Onboarding complete!");
      onClose();
    }
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500,
      } as Transition,
    },
    exit: { opacity: 0, scale: 0.9 },
  };

  const stepVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.3,
      } as Transition,
    },
    exit: (direction: number) => ({
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
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="p-6">
          <div className="flex justify-between mb-6">
            {[1, 2, 3].map((tab) => (
              <div key={tab} className="flex flex-col items-center">
                <Button
                  size="circle"
                  onClick={() => tab < step && setStep(tab)}
                  className={`${
                    step === tab
                      ? "bg-[#15803d]"
                      : tab < step
                      ? "bg-[#4f46e5]"
                      : ""
                  } ${tab < step ? "cursor-pointer" : "cursor-default"}`}
                >
                  {tab}
                </Button>
                <span className="text-white">Step {tab}</span>
              </div>
            ))}
          </div>

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

            <div className="flex justify-between mt-[0.4rem]">
              {step > 1 ? <Button onClick={prevStep}>Back</Button> : <div />}

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
