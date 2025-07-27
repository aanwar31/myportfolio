import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <main className="flex-grow">
        <Hero />
      </main>
    </div>
  );
}
