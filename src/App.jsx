import useFetch from "./hook/useFetch";

import { Button } from "./components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";

export default function App() {
  const {
    data: showData,
    isLoading: isLoadingShow,
    error: showError,
  } = useFetch("https://api.tvmaze.com/shows/41428");
  console.log(showData);

  const { data: showData2 } = useFetch(
    "https://api.tvmaze.com/shows/41428/images"
  );
  console.log(showData2);

  if (isLoadingShow) {
    return <div>Loading...</div>;
  }

  if (showError) {
    return <div>Error: {showError.message}</div>;
  }

  return (
    <section className="h-screen flex flex-col items-center gap-5 font-medium bg-background text-white">
      {/* Bannière */}
      <div
        className="h-[25%] w-full bg-cover bg-center relative"
        style={{
          backgroundImage:
            showData2 && showData2[6]
              ? `url(${showData2[6].resolutions.original.url})`
              : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 top-2/3 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      {/* Infos Movie */}
      <div className="flex justify-between w-full px-5 py-2">
        <section className="flex flex-col gap-5">
          <h1 className="text-xl">{showData.name}</h1>
          <ul>
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
        <img
          src={showData.image ? showData.image.medium : ""}
          alt={showData.name}
          className="max-w-[40%] rounded-lg outline outline-[.5px] outline-white shadow-md shadow-white"
        />
      </div>

      {/* Tabs */}
      <Tabs defaultValue="infos" className="w-full px-5">
        <TabsList className="w-full flex justify-around gap-1 mb-10">
          <TabsTrigger value="infos" className="w-full">
            Infos
          </TabsTrigger>
          <TabsTrigger value="episodes" className="w-full">
            Épisodes
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
        <TabsContent value="episodes">Change your password here.</TabsContent>
      </Tabs>

    </section>
  );
}
