import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex justify-between p-4 md:flex-row flex-col gap-2 md:items-center">
        <Link href={"/"} className="font-bold  text-2xl">
          ANIMELIST
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
