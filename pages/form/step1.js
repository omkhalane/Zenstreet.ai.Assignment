import { motion } from 'framer-motion';
import useFormStore from '../../store/formStore';

const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

export default function Step1() {
  const { formData, updateField } = useFormStore();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <h2>Step 1: Personal Information</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={formData.name}
            onChange={(e) => updateField('name', e.target.value)}
            className="border p-2"
          />
        </label>
      </form>
    </motion.div>
  );
}
