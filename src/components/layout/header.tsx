import Link from "next/link";

export default function Header() {
  return (

<header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">AamirXDev</h1>
        <nav className="space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/resume" className="hover:underline">Resume</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
        </nav>
      </div>
    </header>

  );
}
