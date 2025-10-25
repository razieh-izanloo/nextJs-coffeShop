"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function Providers({ children }) {
    useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(() => console.log('SW registered'))
        .catch(console.error);
    }
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      {children}
    </QueryClientProvider>
  );
}
