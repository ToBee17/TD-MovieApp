To Bee🌻
tobee2604
🍬candy

Type-UI | Adrien — 15/09/2024 12:08
caca
To Bee🌻 — 15/09/2024 12:08
https://discord.gg/qGyqR9JY
Type-UI | Adrien — 15/09/2024 21:28
1121432260
To Bee🌻 — 16/09/2024 20:19
Lethal vers 22h avec Isaac
Propose à Boule 2 cum
Type-UI | Adrien — 16/09/2024 20:26
ok ok
att mais c’est combien max de personne
To Bee🌻 — 16/09/2024 20:28
C'est 4 sinon faut mettre les mods
Mais bon c'est rapide
To Bee🌻 — 16/09/2024 23:52
pk t'as quitté double K ?
Type-UI | Adrien — 23/09/2024 14:09
To Bee🌻 — 23/09/2024 14:09
Type-UI | Adrien — 23/09/2024 14:09
To Bee🌻 — 23/09/2024 14:09
Type-UI | Adrien — 02/10/2024 10:20
To Bee🌻 — 02/10/2024 10:23
:mydriase:
To Bee🌻 — 02/10/2024 10:46
Image
Type-UI | Adrien — 02/10/2024 10:53
mdr
Type-UI | Adrien — 07/10/2024 00:08
To Bee🌻 — 07/10/2024 00:43
Rompich
J'ai bien le seum de levé mon cul à 7h demaî
Type-UI | Adrien — 07/10/2024 08:56
après je doit me lever à 8h
Type-UI | Adrien — 08/10/2024 09:33
To Bee🌻 — 08/10/2024 09:34
Type-UI | Adrien — 08/10/2024 09:34
https://docs.google.com/spreadsheets/d/1dtPkAB_4wAXSqSipLzB_4GD6ScAONRg5nSN_xkfGvCI/edit?gid=0#gid=0
Google Docs
SAé 5 - Groupes
Image
To Bee🌻 — 08/10/2024 09:35
MDr
Qui à fait les groupes wtf
Type-UI | Adrien — 08/10/2024 09:35
moi
fallait les mettres nous memes
To Bee🌻 — 08/10/2024 09:38
DAc
To Bee🌻 — 11/10/2024 22:17
Tu veux lethal ?
Type-UI | Adrien — 11/10/2024 22:21
nan
Type-UI | Adrien — 13/10/2024 00:18
ça dors?
To Bee🌻 — 13/10/2024 00:19
même pas
To Bee🌻 — 13/10/2024 21:25
Tu veux supermarket together avec moi et isaac ?
Type-UI | Adrien — 13/10/2024 21:42
c bon
To Bee🌻 — 13/10/2024 21:46
https://discord.gg/JTMTYPVz
Type-UI | Adrien — 15/10/2024 14:08
Image
To Bee🌻 — 15/10/2024 14:10
Type-UI | Adrien — 20/10/2024 22:25
mec c’est quoi ce jeudi de fils de pute
To Bee🌻 — 20/10/2024 22:26
mdr ça fait 2 semaines on en parle
Type-UI | Adrien — 20/10/2024 22:26
je crois que je vais me peter le bras pour skip
To Bee🌻 — 21/10/2024 21:17
lethal
Type-UI | Adrien — 21/10/2024 21:21
maria
To Bee🌻 — 21/10/2024 21:21
:Zzz:
Type-UI | Adrien — 21/10/2024 21:21
Type-UI | Adrien — Aujourd’hui à 09:12
import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
Afficher plus
message.txt
12 Ko
tenez mr beast
To Bee🌻 — Aujourd’hui à 09:12
Mrc Monsieur Bête
Type-UI | Adrien — Aujourd’hui à 09:12
Image
﻿
metarizz re fantanyl
Type-UI | Adrien
typeui
 
 
UI/UX designer and web developer

Portfolio en cours
import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

const fetchAPI = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const [state, setState] = useState({
    data: null,
    episodes: [],
    cast: [],
    isLoading: true,
    selectedSeason: 1,
  });
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [selectedCastMember, setSelectedCastMember] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const [data, episodes, cast] = await Promise.all([
          fetchAPI("https://api.tvmaze.com/shows/184"),
          fetchAPI("https://api.tvmaze.com/shows/184/episodes"),
          fetchAPI("https://api.tvmaze.com/shows/184/cast"),
        ]);
        setState({ data, episodes, cast, isLoading: false, selectedSeason: 1 });
      } catch {
        setState({ data: null, episodes: [], cast: [], isLoading: false });
      }
    };
    fetchSeries();
  }, []);

  const handleChange = (setter) => (item) => setter((prev) => (prev?.id === item.id ? null : item));
  const handleSearch = (results) => setSearchResults(results);
  const filteredEpisodes = state.episodes.filter(({ season }) => season === state.selectedSeason);

  const handleSeasonChange = (e) => {
    setState((prevState) => ({ ...prevState, selectedSeason: Number(e.target.value) }));
  };

  if (state.isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <motion.div
          className="rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
        <p className="ml-4 text-white text-xl">Chargement...</p>
      </div>
    );
  }

  const renderInfoCard = (title, content) => (
    <Card className="shadow-2xl rounded-lg p-4 md:p-8">
      <CardHeader>
        <CardTitle className="text-xl text-white md:text-3xl mb-4 md:mb-6">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 md:space-y-4 text-gray-300 text-sm md:text-base">{content}</div>
      </CardContent>
    </Card>
  );

  const renderEpisodes = () =>
    filteredEpisodes.map((episode) => (
      <motion.li
        key={episode.id}
        className="flex flex-col justify-between items-start p-4 bg-gray-950 rounded-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        onClick={() => handleChange(setSelectedEpisode)(episode)}
      >
        <div className="flex items-center space-x-4">
          <span className="bg-blue-500 text-white px-2 md:px-3 py-1 rounded-full">{episode.number}</span>
          <p className="text-base md:text-lg font-medium text-white">{episode.name}</p>
        </div>
        {selectedEpisode?.id === episode.id && (
          <div className="mt-4 text-gray-400">
            <p><strong>Durée :</strong> {episode.runtime} minutes</p>
            <p dangerouslySetInnerHTML={{ __html: episode.summary }} />
          </div>
        )}
      </motion.li>
    ));

  return (
    <div className="min-h-screen text-white">
      <Navbar onSearch={handleSearch} />
      <Progress value={33} />
      <div className="container mx-auto px-4 py-12">
        {selectedMovie ? (
          <>
            <button
              onClick={() => setSelectedMovie(null)}
              className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Retour
            </button>
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold text-center mb-12 md:mb-16 bg-clip-text text-blue-400"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {selectedMovie.show.name}
            </motion.h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-16">
              {selectedMovie.show.image && (
                <CardContent>
                  <motion.img
                    className="w-full sm:w-3/4 h-auto rounded mx-auto"
                    src={selectedMovie.show.image.original}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </CardContent>
              )}
              {renderInfoCard("Informations du film", (
                <>
                  <p><strong>Genres :</strong> {selectedMovie.show.genres.join(", ")}</p>
                  <p><strong>Langue :</strong> {selectedMovie.show.language}</p>
                  <p><strong>Durée :</strong> {selectedMovie.show.runtime} minutes</p>
                  <p><strong>Première diffusion :</strong> {selectedMovie.show.premiered}</p>
                  <p><strong>Score :</strong> {selectedMovie.show.rating.average}/10</p>
                  <CardDescription dangerouslySetInnerHTML={{ __html: selectedMovie.show.summary }} />
                </>
              ))}
            </div>
          </>
        ) : searchResults.length > 0 ? (
          <>
            <h2 className="text-4xl font-bold mb-8 text-center text-blue-400">Résultats de recherche</h2>
            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {searchResults.map((result) => (
                <motion.li
                  key={result.show.id}
                  className="flex flex-col bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedMovie(result)}
                >
                  <div className="flex items-center justify-center mb-4">
                    {result.show.image ? (
                      <img
                        src={result.show.image.medium}
                        alt={result.show.name}
                        className="rounded-lg object-cover w-full h-auto max-w-[200px] transition-transform duration-300 ease-in-out"
                      />
                    ) : (
                      <div className="bg-gray-600 h-48 w-full rounded-lg flex items-center justify-center">
                        <p className="text-gray-300">Image non disponible</p>
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">{result.show.name}</h3>
                    <p className="text-gray-400 text-sm line-clamp-3">
                      {result.show.summary?.replace(/<\/?[^>]+(>|$)/g, "") || "Résumé non disponible"}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </>
        ) : (
          <>
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold text-center mb-12 md:mb-16 bg-clip-text text-blue-400"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {state.data.name}
            </motion.h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-16">
              {state.data.image && (
                <CardContent>
                  <motion.img
                    className="w-full sm:w-3/4 h-auto rounded mx-auto"
                    src={state.data.image.original}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </CardContent>
              )}
              {renderInfoCard("Informations de la série", (
                <>
                  <p><strong>Genres :</strong> {state.data.genres.join(", ")}</p>
                  <p><strong>Langue :</strong> {state.data.language}</p>
                  <p><strong>Durée :</strong> {state.data.runtime} minutes</p>
                  <p><strong>Première diffusion :</strong> {state.data.premiered}</p>
                  <p><strong>Score :</strong> {state.data.rating.average}/10</p>
                  <CardDescription dangerouslySetInnerHTML={{ __html: state.data.summary }} />
                </>
              ))}
            </div>
            <div className="mb-8 md:mb-12">
              <h2 className="text-4xl font-bold mb-8 text-center text-blue-400">Choix des saisons</h2>
              <select
                value={state.selectedSeason}
                onChange={handleSeasonChange}
                className="bg-gray-800 text-white py-2 px-4 rounded-lg mb-4"
              >
                {Array.from(new Set(state.episodes.map(({ season }) => season))).map((season) => (
                  <option key={season} value={season}>
                    Saison {season}
                  </option>
                ))}
              </select>
              <motion.ul className="space-y-6">{renderEpisodes()}</motion.ul>
            </div>
            <div className="mb-8 md:mb-12">
              <h2 className="text-4xl font-bold mb-8 text-center text-blue-400">Distribution</h2>
              <motion.ul
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {state.cast.map(({ person, character }) => (
                  <motion.li
                    key={person.id}
                    className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleChange(setSelectedCastMember)(person)}
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={person.image?.medium || "/placeholder.jpg"}
                        alt={person.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{person.name}</h3>
                        <p className="text-sm text-gray-400">{character.name}</p>
                      </div>
                    </div>
                    {selectedCastMember?.id === person.id && (
                      <div className="mt-4 text-gray-400">
                        <p dangerouslySetInnerHTML={{ __html: person.biography }} />
                      </div>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
message.txt
12 Ko