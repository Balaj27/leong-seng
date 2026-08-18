import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Shell, SectionHeading } from "@/components/site-shell";
import { assetPath, catalogCategories } from "@/lib/catalog-data";

export default function CatalogPage() {
  const totalCategories = catalogCategories.length;
  const shouldCenterLastTwo = totalCategories % 4 === 2;

  return (
    <Shell>
      <main>
        <section className="bg-sky/10">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Product catalog
            </p>
            <h1 className="font-serif text-5xl font-bold tracking-tight md:text-6xl">
              Find your next part.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
              Browse our core product categories. Product listings are provided
              as a reference — contact us for current availability and
              specifications.
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Categories"
            title="Built around your application."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-5">
            {catalogCategories.map((category, index) => {
              const secondLastIndex = totalCategories - 2;
              const lastIndex = totalCategories - 1;
              const centeredClass = shouldCenterLastTwo
                ? index === secondLastIndex
                  ? " lg:col-start-2"
                  : index === lastIndex
                    ? " lg:col-start-3"
                    : ""
                : "";

              return (
              <Link
                href={`/catalog/${category.slug}`}
                key={category.slug}
                className={`group overflow-hidden rounded-lg border border-border bg-card hover:border-primary hover:shadow-lg${centeredClass}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={assetPath(category, category.featured)}
                    alt={`${category.name} featured product`}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex min-h-40 flex-col justify-between p-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                      Product family
                    </p>
                    <h2 className="mt-4 font-serif text-2xl font-bold">
                      {category.name}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {category.desc}
                    </p>
                  </div>
                  <span className="mt-6 flex items-center gap-2 text-sm font-bold text-primary">
                    View products{" "}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
              );
            })}
          </div>
        </section>
      </main>
    </Shell>
  );
}
