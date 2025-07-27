import { motion } from 'framer-motion';
import ResumeSection from '@/components/sections/resume';


export const ResumePage = () => {
  return (
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 px-4 py-12">
        <ResumeSection />
      </div>


  );
}
export default ResumePage;
