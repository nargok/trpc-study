import { procedure, router } from "@/backend/trpc";
import { z } from "zod";

import { PokemonClient } from "pokenode-ts";

export const appRouter = router({
  "get-pokemon-by-id": procedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ input }) => {
      const api = new PokemonClient();
      const pokemon = await api.getPokemonById(input.id);

      return { name: pokemon.name, sprites: pokemon.sprites };
    }),
});

export type AppRouter = typeof appRouter;
