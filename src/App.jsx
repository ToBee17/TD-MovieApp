import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import useFetch from "./hook/useFetch";
import useFetchPerson from './hook/useFetchPerson';

export default function App() {
  const [selectedPersonId, setSelectedPersonId] = useState(null);

  const {
    data: showData,
    isLoading: isLoadingData,
    error: showErrorData,
  } = useFetch("https://api.tvmaze.com/shows/41428");

  const {
    data: showCast,
    isLoading: isLoadingCast,
    error: showError,
  } = useFetch("https://api.tvmaze.com/shows/41428/cast");

  console.log(showCast);
  console.log(showData);

  if (isLoadingCast) return <div>Chargement...</div>;
  if (showError) return <div>Erreur 404 {showError?.message}</div>;

  const seriesRating = showData?.rating?.average || 'N/A';

  return (
    <div className="bg-BackgroundColor font-main">
      <div>
      <h1 className="pl-10 text-TextColor text-2xl font-bold">Note de la communauté: {seriesRating}/10</h1>
      </div>
      <div>
        <h1 className="pl-10 pt-7 text-TextColor text-2xl font-bold">Cast</h1>
      </div>

      <ScrollArea className="h-25 w-full rounded-md mt-4">
        <div className="flex w-full space-x-4 p-4">
          {showCast &&
            showCast.map((castMember) => (
              <figure key={castMember.person.id} className="shrink-0">
                <div className="overflow-hidden rounded-md">
                  <Popover>
                    <PopoverTrigger
                      className="flex items-center"
                      onClick={() => setSelectedPersonId(castMember.person.id)}
                    >
                      <Avatar className="h-20 w-20">
                        <AvatarImage
                          src={castMember.person.image.medium}
                          className="size-20 object-cover"
                        />
                      </Avatar>
                    </PopoverTrigger>
                    <PopoverContent>
                      {selectedPersonId === castMember.person.id && (
                        <PersonDetails personId={selectedPersonId} castMember={castMember} />
                      )}
                    </PopoverContent>
                  </Popover>
                </div>
              </figure>
            ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

function PersonDetails({ personId, castMember }) {
  const {
    data: personData,
    isLoading: isLoadingPerson,
    error: personError,
  } = useFetchPerson(`https://api.tvmaze.com/people/${personId}`);

  if (isLoadingPerson) return <div>Chargement...</div>;
  if (personError) return <div>Erreur 404 {personError.message}</div>;

  return (
    <div className="flex flex-col items-center p-4 bg-background font-main">
      <img
        src={castMember.person.image.medium}
        className="rounded-xl"
        alt={castMember.person.name}
      />
      <h2 className="text-lg font-bold text-white ">
        {castMember.person.name}
      </h2>
      {personData && (
        <>
          <p className="text-white">{personData.birthday}</p>
          <p className="text-white">{personData.country.name}</p>
        </>
      )}
    </div>
  );
}