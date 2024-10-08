import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex sticky top-0 justify-between items-center bg-gray-100  w-screen shadow-gray-300 shadow-lg">
      <img
        src="https://logowik.com/content/uploads/images/nextjs2106.logowik.com.webp"
        className="h-16 w-32"
      />
      <div className="flex justify-around w-1/2">
        <Link className="hover:bg-gray-200 p-2" href="/">
          Home
        </Link>
        <Link className="hover:bg-gray-200 p-2" href="/about">
          About
        </Link>
        <Link className="hover:bg-gray-200 p-2" href="/jobs">
          Jobs
        </Link>
        <Link className="hover:bg-gray-200 p-2" href="/jobs/programming-jobs">
          Programming Jobs
        </Link>
      </div>
    </div>
  );
}
