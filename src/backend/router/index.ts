import { procedure, router } from "@/backend/trpc";
import { z } from "zod";

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? "world"}`,
      };
    }),
});

export type AppRouter = typeof appRouter;
