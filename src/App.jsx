


import useFetch from './hook/useFetch';

export default function App() {
  const { data: showData, isLoading: isLoadingShow, error: showError } = useFetch('https://api.tvmaze.com/shows/41428');
  console.log(showData);

  if (isLoadingShow) {
    return <div>Loading...</div>;
  }

  if (showError) {
    return <div>Error: {showError.message}</div>;
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center p-10 gap-5">
      <h1>{showData.name}</h1>
      <img src={showData.image.medium} alt={showData.name} />
    </div>
  );
}
