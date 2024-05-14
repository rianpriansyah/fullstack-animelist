import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
      {api.data?.map((anime, index) => {
        return (
          // bug in id
          <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-color-primary hover:text-color-accent transition-all" key={index}>
            <Image src={anime.images.webp.image_url} width={350} height={350} alt="..." className="w-full max-h-64 object-cover" />
            <h2 className="font-bold md:text-xl  text-md p-4 text-center ">{anime.title}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
