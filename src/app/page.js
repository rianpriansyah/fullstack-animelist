import Link from "next/link";
import AnimeList from "../components/AnimeList";

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const anime = await response.json();

  return (
    <div className="px-4">
      <div className="flex justify-between py-4 items-center">
        <h1 className="text-2xl font-bold">Paling Popular</h1>
        <Link href={"/populer"} className="md:text-xl text-sm underline hover:text-indigo-500 transition-all">
          Lihat Semua
        </Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        {anime.data.map((data) => {
          return (
            // bug in data.mal_id
            <div key={data.mal_id} className="shadow-xl">
              <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
