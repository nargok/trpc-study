import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { trpc } from "@/utils/trpc";
import { getOptionForVote } from "@/utils/getRandonPokemon";
import { useState } from "react";

const Home: NextPage = () => {
  const [ids, updateIds] = useState(() => getOptionForVote());
  const [first, second] = ids;

  const firstPokemon = trpc["get-pokemon-by-id"].useQuery({ id: first });
  const secondPokemon = trpc["get-pokemon-by-id"].useQuery({ id: second });

  console.log(firstPokemon);

  if (firstPokemon.isLoading || secondPokemon.isLoading) return <div>Loading...</div>;

  return (
    <h1 className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl text-center">Which Pokemon is Rounder?</div>
      <div className="p-2"></div>
      <div className="border rounded p-8 flex justify-between item-center max-w-2xl">
        <div className="w-64 h-64 bg-red-800 flex flex-col" suppressHydrationWarning>
          <img src={firstPokemon.data?.sprites.front_default} className="w-full" />
          <div className="text-xll text-center capitalize mt-[-2rem]">
            {firstPokemon.data?.name}
          </div>
        </div>
        <div className="p-8">Vs</div>
        <div className="w-64 h-64 bg-red-800 flex flex-col" suppressHydrationWarning>
          <img src={secondPokemon.data?.sprites.front_default} className="w-full" />
          <div className="text-xll text-center capitalize mt-[-2rem]">
            {secondPokemon.data?.name}
          </div>
        </div>
        <div className="p-2"></div>
      </div>
    </h1>
  );
};

export default Home;
