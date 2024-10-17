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
    isLoading: isLoadingShow,
    error: showError,
  } = useFetch("https://api.tvmaze.com/shows/41428/cast");

  const {
    data: personData,
    isLoading: isLoadingPerson,
    error: personError,
  } = useFetchPerson(selectedPersonId ? `https://api.tvmaze.com/people/${selectedPersonId}` : null);

  console.log(showData);
  console.log(personData);

  if (isLoadingShow || (selectedPersonId && isLoadingPerson)) return <div>Chargement...</div>;
  if (showError || personError) return <div>Erreur 404 {showError?.message || personError?.message}</div>;

  return (
    <div className="bg-BackgroundColor font-main">
      <div>
        <h1 className="pl-10 text-TextColor text-2xl font-bold">Cast</h1>
      </div>

      <ScrollArea className="h-25 w-full rounded-md mt-4">
        <div className="flex w-full space-x-4 p-4">
          {showData &&
            showData.map((castMember) => (
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
                          className="size-20"
                        />
                      </Avatar>
                      
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="p-4">
                        <h2 className="text-lg font-bold">{castMember.person.name}</h2>
                        {personData && (
                          <>
                            <p>{personData.birthday}</p>
                            <p>{personData.gender}</p>
                            <p>{personData.country.name}</p>
    
                            {/* Ajoutez d'autres informations que vous souhaitez afficher */}
                          </>
                        )}
                      </div>
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