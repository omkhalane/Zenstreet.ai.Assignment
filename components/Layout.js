import { motion } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';
import FormNavigation from './FormNavigation';

const variants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

export default function Layout({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
    >
      <header className="bg-gray-800 text-white p-4 flex justify-between">
        <h1>Multi-Step Form</h1>
        <DarkModeToggle />
      </header>
      <main className="flex-grow p-4">
        <FormNavigation />
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">Footer</footer>
    </motion.div>
  );
}
