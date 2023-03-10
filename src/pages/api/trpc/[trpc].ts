import { appRouter } from "@/backend/router/index";
import * as trpcNext from "@trpc/server/adapters/next";

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
