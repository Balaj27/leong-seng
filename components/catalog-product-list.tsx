"use client";

import { useMemo, useState } from "react";
import type { CatalogProduct } from "@/lib/catalog-data";

type CatalogProductListProps = {
  products: CatalogProduct[];
};

const INITIAL_VISIBLE = 12;
const LOAD_MORE_COUNT = 8;

export function CatalogProductList({ products }: CatalogProductListProps) {
  const [visibleCount, setVisibleCount] = useState(
    Math.min(INITIAL_VISIBLE, products.length),
  );

  const visibleProducts = useMemo(
    () => products.slice(0, visibleCount),
    [products, visibleCount],
  );

  const remainingCount = products.length - visibleCount;
  const hasMore = remainingCount > 0;

  function handleViewMore() {
    setVisibleCount((current) =>
      Math.min(current + LOAD_MORE_COUNT, products.length),
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {visibleProducts.map((item, index) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-lg border border-border bg-card"
          >
            <div className="aspect-[4/3] bg-muted">
              <img
                src={item.image}
                alt={item.name}
                className="size-full object-contain p-5"
              />
            </div>

            <div className="flex items-start gap-4 p-5">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sky/15 text-xs font-bold text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  Available in multiple sizes and specifications.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMore ? (
        <div className="flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={handleViewMore}
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:opacity-90"
          >
            View more ({remainingCount} left)
          </button>
          <p className="text-xs text-muted-foreground">
            Scroll down to keep exploring more products.
          </p>
        </div>
      ) : null}
    </div>
  );
}
