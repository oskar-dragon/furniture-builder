'use client';

import { motion } from 'framer-motion';

type MainWrapperProps = {
  className?: string;
  children: React.ReactNode;
};
export function PageWrapper({ className, children }: MainWrapperProps) {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {children}
    </motion.main>
  );
}
