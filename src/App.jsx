import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [randomMovies, setRandomMovies] = useState([]);

  useEffect(() => {
    const fetchRandomMovies = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows`);
        const data = await response.json();
        // Shuffle the array and take the first 20 movies
        const shuffled = data.sort(() => 0.5 - Math.random());
        setRandomMovies(shuffled.slice(0, 20));
      } catch (error) {
        console.error("Erreur dans la randomisation:", error);
      }
    };

    fetchRandomMovies();
  }, []);

  const handleSearch = async () => {
    if (query.trim() === "") return;
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Erreur data:", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-full mt-2">
      <div className="fixed top-0 left-0 right-0 flex justify-center w-full max-w-sm space-x-2 mb-4 -white p-4 shadow-md">
        <Input
          type="search"
          placeholder="rechercher..."
          className="bg-white"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button type="button" className="bg-white" onClick={handleSearch}>
          <img src="./magnifying-glass-solid.svg" alt="Search" className="w-4 h-4" />
        </Button>
      </div>
      <div className="w-full h-full max-w-md mt-20">
        {results.length === 0 ? (
          <div className=" p-2 text-white font-main h-50%">
            <h2 className="text-lg font-bold mb-2">A ne pas manquer</h2>
            <ScrollArea className="h-full w-full rounded-md mt-4" orientation="horizontal">
              <div className="flex space-x-4">
                {randomMovies.map((movie) => (
                  <div key={movie.id} className="mb-2 rounded flex-shrink-0">
                    <h3 className="text-lg font-bold text-white">{movie.name}</h3>
                    {movie.image && (
                      <img src={movie.image.medium} alt={movie.name} className="" />
                    )}
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        ) : (
          results.map((result) => (
            <div key={result.show.id} className="mb-2 p-2 text-white font-main rounded">
              <h3 className="text-lg font-bold">{result.show.name}</h3>
              {result.show.image && (
                <img src={result.show.image.medium} alt={result.show.name} className="w-full h-auto" />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}