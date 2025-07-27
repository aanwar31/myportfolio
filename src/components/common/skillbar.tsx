import { SkillBarProps } from "@/types/resume";
import { motion } from "framer-motion";

const SkillBar = ({ data }: { data: SkillBarProps[] }) => (
  <div>
    {data.map((item, index) => (
      <div key={index} className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium">{item.label}</span>
          <span className="text-sm font-medium">{item.percent}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <motion.div
            className="h-full bg-yellow-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${item.percent}%` }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </div>
      </div>
    ))}
  </div>
);

export default SkillBar;