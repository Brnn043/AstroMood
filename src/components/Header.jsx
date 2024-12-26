import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
      <Link href="/">
          <div className="text-xl font-bold">AstroMood</div>
        </Link>

        {/* Navigation Links */}
        <nav className="flex space-x-4">
          <Link href="/nova">
            <div className="hover:text-astro-mood-light transition duration-200">Nova</div>
          </Link>
          <Link href="/orbit">
            <div className="hover:text-astro-mood-light transition duration-200">Orbit</div>
          </Link>
        </nav>
      </div>
    </div>
  );
}