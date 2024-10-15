import useFetch from "./hook/useFetch";

export default function App() {
  const {
    data: showData,
    isLoading: isLoadingShow,
    error: showError,
  } = useFetch("https://api.tvmaze.com/shows/41428");
  console.log(showData);

  const { data: showData2 } = useFetch("https://api.tvmaze.com/shows/41428/images"); 
  console.log(showData2);

  if (isLoadingShow) {
    return <div>Loading...</div>;
  }

  if (showError) {
    return <div>Error: {showError.message}</div>;
  }

  return (
    <section className="h-screen flex flex-col items-center gap-5">
      <div 
      className="h-[25%] w-full"
      style={{
        backgroundImage: `url(${showData2[6].resolutions.original.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}></div>
      

      <section className="flex px-5 py-2">
        <div>
          <h1>{showData.name}</h1>
          <ul>
            <p>{showData.language}</p>
            <p>{showData.genres}</p>
          </ul>
        </div>
        <img src={showData.image.medium} alt={showData.name} />
      </section>
      <h2>Background image</h2>
      {/* <img src={showData2[5].resolutions.original.url} alt={showData.name} /> */}
    </section>
  );
}
