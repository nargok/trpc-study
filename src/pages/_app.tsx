import "../styles/globals.css";
import type { AppProps } from "next/app";

import { withTRPC } from "@trpc/next";
import type { AppRouter } from "@/backend/router";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// export default MyApp;

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : "http://localhost:3000/api/trpc";

    return {
      url,
      // links: [
      //   httpBatchLink({
      //     /**
      //      * If you want to use SSR, you need to use the server's full URL
      //      * @link https://trpc.io/docs/ssr
      //      **/
      //     url: `${getBaseUrl()}/api/trpc`,
      //   }),
      // ],
      /**
       * @link https://tanstack.com/query/v4/docs/reference/QueryClient
       **/
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   **/
  ssr: false,
})(MyApp);
