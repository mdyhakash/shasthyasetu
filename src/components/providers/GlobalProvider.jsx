"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import dynamic from "next/dynamic";
import { useState } from "react";

const AppProgressBar = dynamic(
  () => import("next-nprogress-bar").then((mod) => mod.AppProgressBar),
  {
    ssr: true,
  }
);

const GlobalProvider = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <AppProgressBar
          height="3px"
          color="#09AFF4"
          // startPosition={0.3}
          stopDelayMs={300}
          options={{ showSpinner: false }}
          shallowRouting
        />
        {children}

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};

export default GlobalProvider;
