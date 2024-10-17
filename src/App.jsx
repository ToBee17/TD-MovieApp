import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import useFetch from './hook/useFetch';

export default function App() {
  const { data: showData, isLoading: isLoadingShow, error: showError } = useFetch('https://api.tvmaze.com/shows/41428/cast');
  console.log(showData);

  if (isLoadingShow) return <div>Chargement...</div>;
  if (showError) return <div>Erreur 404 {showError.message}</div>;

  return (
    <div className="h-screen flex  items-center justify-center p-10 gap-5"> 
      <div>
      <h1 className="pl-10">cast</h1>
      <ScrollArea className="pl-10 h-20 w-[440px] rounded-md mt-4">
      <ul className="flex gap-2">
        {showData && showData.map((castMember) => (
          <li key={castMember.person.id} >
            <Avatar>
          <AvatarImage src={castMember.person.image.original}/>
        </Avatar>
        </li>
        ))}
      </ul>
      </ScrollArea>
    </div>
    
    </div>
  );
}
