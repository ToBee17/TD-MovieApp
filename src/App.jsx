import useFetch from "./hook/useFetch";

import { Button } from "./components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "./components/ui/select";

export default function App() {
  const {
    data: showData,
    isLoading: isLoadingShow,
    error: showError,
  } = useFetch(
    "https://api.tvmaze.com/shows/83?embed[]=images&embed[]=seasons&embed[]=episodes"
  );
  console.log(showData);

  // const { data: showDataImage } = useFetch(
  //   "https://api.tvmaze.com/shows/83/images"
  // );
  // console.log(showDataImage);

  // const { data: showDataSeason } = useFetch(
  //   "https://api.tvmaze.com/shows/83/seasons"
  // );
  // console.log(showDataSeason);

  // const { data: showDataEpisode } = useFetch(
  //   "https://api.tvmaze.com/shows/83/episodes"
  // );
  // console.log(showDataEpisode);

  if (isLoadingShow) {
    return <div>Loading...</div>;
  }

  if (showError) {
    return <div>Error: {showError.message}</div>;
  }

  return (
    <section className="h-full flex flex-col items-center gap-5 font-medium bg-background text-white">
      {/* Bannière */}
      <div
        className="aspect-[3/2] md:aspect-[16/9] md:h-[50%] md:absolute md:z-0 w-full bg-cover bg-center relative"
        style={{
          backgroundImage:
            showData._embedded.images && showData._embedded.images[6]
              ? `url(${showData._embedded.images[6].resolutions.original.url})`
              : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 top-2/3 md:inset-0 md:top-1/3 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      {/* Infos Movie */}
      <div className="flex justify-between w-full px-5 py-2 md:relative md:z-10 md:mt-36 md:flex-row-reverse">
        <section className="flex flex-col gap-5">
          <h1 className="text-xl md:text-2xl">{showData.name}</h1>
          <ul className="md:text-lg">
            <p>
              <span className="text-span">Average Runtime : </span>
              {showData.averageRuntime}min
            </p>
            <p>
              <span className="text-span">Status : </span>
              {showData.status}
            </p>
            <p>
              <span className="text-span">Show Type : </span>
              {showData.type}
            </p>
            <p>
              <span className="text-span">Genres : </span>
              {showData.genres}
            </p>
            <p>
              <span className="text-span">Episodes ordered : </span>
              {showData.status}
            </p>
            <p>
              <span className="text-span">How to watch : </span>
              {showData.webChannel ? showData.webChannel.name : "N/A"}
            </p>
          </ul>
        </section>
        <section className="h-full max-w-[40%] flex justify-end">
          <img
            src={showData.image ? showData.image.medium : ""}
            alt={showData.name}
            className="rounded-lg outline outline-[.5px] outline-white shadow-md shadow-white"
          />
        </section>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="episodes" className="w-full px-5 h-full md:z-10">
        <TabsList className="w-full flex justify-around gap-1 mb-10">
          <TabsTrigger value="infos" className="w-full">
            Infos
          </TabsTrigger>
          <TabsTrigger value="episodes" className="w-full">
            Episodes
          </TabsTrigger>
        </TabsList>

        {/* Section infos */}
        <TabsContent value="infos" className="flex flex-col gap-5">
          {/* Description */}
          <div className="flex flex-col gap-5 justify-center items-center">
            <h2 className="text-xl px-5 uppercase text-span">Description</h2>
            <p
              dangerouslySetInnerHTML={{ __html: showData.summary }}
              className="w-full text-sm text-span"
            ></p>
          </div>

          {/* Watch */}
          <div className="flex flex-col gap-5 justify-center items-center">
            <h2 className="text-xl px-5 uppercase text-span">Watch</h2>

            <Button
              variant="mobile"
              size="mobile"
              onClick={() => window.open(showData.officialSite, "_blank")}
            >
              Watch the trailer
            </Button>
          </div>
        </TabsContent>

        {/* Section épisodes */}
        <TabsContent value="episodes">
          <div className="flex flex-col gap-5">
            <Select>
              <SelectTrigger className="w-full">Saison X</SelectTrigger>
              <SelectContent>
                {showData._embedded.seasons.map((season) => (
                  <SelectItem key={season.id} value={season.id}>
                    {season.number} - {season.name} ({season.episodeOrder}{" "}
                    episodes)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="mt-5">
              {showData._embedded.episodes.map((episode) => (
                <div key={episode.id} className="mb-3">
                  <h3 className="text-lg">{episode.name}</h3>
                  <p>
                    Season {episode.season}, Episode {episode.number}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
