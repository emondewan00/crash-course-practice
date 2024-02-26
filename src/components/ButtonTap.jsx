import { motion } from "framer-motion";
const ButtonTap = () => {
  return (
    <motion.button
      className="bg-green-400 py-2 px-6 m-10 text-white rounded"
      whileTap={{ scale: 0.3, transition: { yoyo: Infinity } }}
      whileHover={{ scale: 1.2, transition: { yoyo: Infinity } }}
    >
      Tap me
    </motion.button>
  );
};

export default ButtonTap;
