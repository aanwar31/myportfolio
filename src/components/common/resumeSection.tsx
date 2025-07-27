import { resumeSectionProps } from "@/types/resume";


export const Section = ({ title, data }: { title: string; data: resumeSectionProps[] }) => (
  <div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <div className="space-y-4">
      {data.map((item, index) => (
        <div key={index} className="border-l-4 border-yellow-400 pl-4">
          <p className="font-semibold">{item.title}</p>
          {item.subtitle && <p className="text-sm text-gray-500">{item.subtitle}</p>}
          <p className="text-xs text-gray-400 mb-1">{item.year}</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);