import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ title, images, id }) => {
  return (
    // bug in id
    <Link href={`/${id}`} className="cursor-pointer">
      <Image src={images} width={200} height={350} alt="..." className="w-full max-h-64 object-cover" />
      <h2 className="font-bold md:text-xl  text-md p-4 text-center">{title}</h2>
    </Link>
  );
};

export default AnimeList;
