import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className="bg-sky-600 flex justify-evenly ">
        <h1 className="p-4 font-bold ">
          <Link href="/">Moises Andrei G. Uy</Link>
        </h1>
        <h1 className="p-4 font-bold ">To Do List</h1>
        <Link className="p-4" href="/new">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md hover:bg-opacity-0 hover:border">
            New
          </span>
        </Link>
      </nav>
    </>
  );
};
export default Navbar;
