import { motion } from "framer-motion";
const Simple = () => {
  return (
    <motion.div
      className="bg-red-500 w-40 h-40 m-10"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        scale: [ 0, 2, 1 ],
        borderRadius: [ "20%", "30%", "40%", "50%"],
        rotate: 360,
      }}
      transition={{ duration: 2, delay: 0.5 }}
    />
  );
};

export default Simple;
