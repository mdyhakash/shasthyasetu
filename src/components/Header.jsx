import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600">ShasthyaSetu</div>

        <ul className="hidden md:flex gap-9 text-gray-600 font-medium">
          <Link href="/">
            <li className="hover:text-green-600 hover:underline-offset-1 cursor-pointer">Home</li>
          </Link>

          <Link href="/about-us">
            <li className="hover:text-green-600 cursor-pointer">About</li>
          </Link>
          <Link href="/services">
            <li className="hover:text-green-600 cursor-pointer">Services</li>
          </Link>
          <Link href="/blog">
            <li className="hover:text-green-600 cursor-pointer">Blog</li>
          </Link>
          <Link href="/contact">
            <li className="hover:text-green-600 cursor-pointer">Contact</li>
          </Link>
        </ul>

        <div className="md:hidden text-gray-600 cursor-pointer">
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
