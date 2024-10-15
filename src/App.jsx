


import useFetch from './hook/useFetch';

export default function App() {
  const { data: showData, isLoading: isLoadingShow, error: showError } = useFetch('https://api.tvmaze.com/shows/41428');
  console.log(showData);

  return (
    <div className="h-screen flex flex-col items-center justify-center p-10 gap-5">
      <h1>Hello</h1>
      <p>djvf</p>

      {isLoadingShow && <p>Loading...</p>}

      {showError && <p>Error</p>}

      {showData && <p>{showData.name}</p>}
        
    </div>
  );
}
