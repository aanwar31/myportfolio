'use client';

import { motion } from "framer-motion";

export default function Blog(){
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center py-24 px-6">
      <motion.h1
        className="text-4xl sm:text-6xl font-bold tracking-tight"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Coming Soon !!!
      </motion.h1>
    </section>
  );
};