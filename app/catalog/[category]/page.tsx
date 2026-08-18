import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CatalogProductList } from "@/components/catalog-product-list";
import { Shell } from "@/components/site-shell";
import { assetPath, catalogCategories } from "@/lib/catalog-data";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = catalogCategories.find((item) => item.slug === slug);

  if (!category) notFound();

  return (
    <Shell>
      <main>
        <section className="bg-charcoal text-primary-foreground">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_0.7fr] lg:items-center lg:px-8">
            <div>
              <Link
                href="/catalog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/60 hover:text-sky"
              >
                <ArrowLeft className="size-4" /> Back to catalog
              </Link>

              <p className="mt-12 text-xs font-bold uppercase tracking-[0.22em] text-sky">
                Product category
              </p>
              <h1 className="mt-4 font-serif text-5xl font-bold md:text-6xl">
                {category.name}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-primary-foreground/70">
                {category.desc} Browse the product families below, then contact
                us for details.
              </p>
            </div>

            <div className="overflow-hidden rounded-lg border border-primary-foreground/15">
              <img
                src={assetPath(category, category.featured)}
                alt={`${category.name} featured product`}
                className="aspect-[4/3] size-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <CatalogProductList products={category.products} />

          <div className="mt-14 flex flex-col items-start justify-between gap-5 rounded-lg bg-sky/10 p-7 md:flex-row md:items-center">
            <div>
              <h2 className="font-serif text-2xl font-bold">
                Need help selecting a part?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Our team can help with specifications and availability.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"
            >
              Contact us <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
    </Shell>
  );
}
