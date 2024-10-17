import useFetch from "./hook/useFetch";

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
      <div
        className="h-[25%] w-full"
        style={{
          backgroundImage: `url(${showData2[6].resolutions.original.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

        <div className="flex justify-between w-full px-5">
          <section className="flex flex-col gap-5">
            <h1 className="text-xl">{showData.name}</h1>
            <ul>
              <p><span className="text-span">Average Runtime : </span>{showData.averageRuntime}min</p>
              <p><span className="text-span">Status : </span>{showData.status}</p>
              <p><span className="text-span">Show Type : </span>{showData.type}</p>
              <p><span className="text-span">Genres : </span>{showData.genres}</p>
              <p><span className="text-span">Épisodes ordered : </span>{showData.status}</p>
              <p><span className="text-span">How to watch : </span>{showData.webChannel.name}</p>
            </ul>
          </section>
          <img src={showData.image.medium} alt={showData.name} className="max-w-[40%] rounded-lg outline outline-[.5px] outline-white shadow-md shadow-white"/>
        </div>
        
    </section>
  );
}
