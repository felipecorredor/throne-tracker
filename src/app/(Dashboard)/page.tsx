// app/posts/page.jsx
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { fetchHousesWithSwornMembers } from "@/hooks/useHousesWithSwornMembers";
import HousesList from "@/app/(Dashboard)/HousesList";

export default async function HomePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["housesWithSwornMembers"],
    queryFn: fetchHousesWithSwornMembers,
  });

  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydrate(queryClient)}>
      <h1 className="text-3xl font-semibold text-center mt-8">
        Universe of Ice And Fire
      </h1>
      <HousesList />
    </HydrationBoundary>
  );
}
