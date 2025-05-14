import "./index.css"
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="p-6 bg-white rounded-xl shadow-lg border border-gray-200 flex items-center justify-center w-64 h-40"
    >
      {children ? (
        children
      ) : (
        <div className="text-gray-600 text-center">
          <h3 className="text-lg font-semibold">Default Card</h3>
          <p className="text-sm">This is a default template</p>
        </div>
      )}
    </motion.div>
  );
}
