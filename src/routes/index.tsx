
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { getProducts } from "../api/graphql";

export const Route = createFileRoute("/")({
  component: HomePage,
  loader: () => getProducts(""),
});

function HomePage() {
  const { data } = useSuspenseQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(""),
  });

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-10 p-2">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold sm:text-4xl">React TanStarter</h1>
        <div className="text-foreground/80 flex items-center gap-2 text-sm max-sm:flex-col">
          This is an unprotected page:
          <pre className="bg-card text-card-foreground rounded-md border p-1">
            routes/index.tsx
          </pre>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-wrap justify-center gap-4">
          {data.data.getBikeListing.edges.map((edge) => (
            <div key={edge.node.id} className="max-w-xs rounded overflow-hidden shadow-lg">
              <img className="w-full" src={edge.node.thumbnail} alt={edge.node.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{edge.node.name}</div>
              </div>
            </div>
          ))}
          {data.data.getProductsListing.edges.map((edge) => (
            <div key={edge.node.id} className="max-w-xs rounded overflow-hidden shadow-lg">
              <img className="w-full" src={edge.node.thumbnail} alt={edge.node.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{edge.node.name}</div>
              </div>
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  );
}
