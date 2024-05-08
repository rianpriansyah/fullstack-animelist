import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-indigo-500">
      <div className="flex justify-between p-4 md:flex-row flex-col gap-2">
        <Link href={"/"} className="font-bold text-white text-2xl">
          ANIMELIST
        </Link>
        <input placeholder="Cari Anime" className="" />
      </div>
    </header>
  );
};

export default Navbar;
