

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import useFetch from './hook/useFetch';

export default function App() {
  const { data: showData, isLoading: isLoadingShow, error: showError } = useFetch('https://api.tvmaze.com/shows/41428');
  console.log(showData);

  return (
    <div className="h-screen flex  items-center justify-center p-10 gap-5">
      <div src="https://api.tvmaze.com/the-queens-gambit/1/cast"></div>
      <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

<Avatar>
  <AvatarImage src="https://api.tvmaze.com/the-queens-gambit/140140/cast" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

    </div>
  );
}
