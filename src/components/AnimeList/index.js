import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
      {api.data.map((anime) => {
        return (
          // bug in id
          <Link href={`/${anime.mal_id}`} className="cursor-pointer">
            <Image src={anime.images.webp.image_url} width={200} height={350} alt="..." className="w-full max-h-64 object-cover" />
            <h2 className="font-bold md:text-xl  text-md p-4 text-center">{anime.title}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
