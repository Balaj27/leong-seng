import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Shell, SectionHeading } from "@/components/site-shell";
import { assetPath, catalogCategories } from "@/lib/catalog-data";

export default function HomePage() {
  const totalCategories = catalogCategories.length;
  const shouldCenterLastTwo = totalCategories % 4 === 2;

  return (
    <Shell>
      <main>
        <section className="relative isolate min-h-[620px] overflow-hidden bg-charcoal">
          <video
            className="absolute inset-0 size-full object-cover opacity-180"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/20" />
          <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-20 lg:px-8">
            <div className="max-w-2xl text-primary-foreground">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-sky">
                Automotive & industrial parts
              </p>
              <h1 className="text-balance font-serif text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
                The right part keeps everything moving.
              </h1>
              <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-primary-foreground/75">
                Quality spare parts, dependable service, and practical expertise
                for workshops, manufacturers, and businesses across Malaysia.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/catalog"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  View catalog <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-md border border-primary-foreground/30 px-6 py-3.5 text-sm font-bold text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Talk to our team
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="border-b border-border bg-muted/40">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 md:grid-cols-3 lg:px-8">
            <div className="flex gap-4">
              <ShieldCheck className="mt-1 size-6 text-primary" />
              <div>
                <p className="font-bold">Trusted quality</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Parts selected for real-world reliability.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Factory className="mt-1 size-6 text-primary" />
              <div>
                <p className="font-bold">Industry know-how</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Decades of practical parts experience.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Truck className="mt-1 size-6 text-primary" />
              <div>
                <p className="font-bold">Responsive supply</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  A catalog made for quick sourcing.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto flex max-w-7xl flex-col gap-12 px-5 py-24 lg:px-8">
          <SectionHeading
            eyebrow="Browse by category"
            title="Parts for the work that matters."
            copy="From workshop essentials to industrial transmission components, find the product family you need and speak with our team for availability."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {catalogCategories.map((category, i) => {
              const secondLastIndex = totalCategories - 2;
              const lastIndex = totalCategories - 1;
              const centeredClass = shouldCenterLastTwo
                ? i === secondLastIndex
                  ? " lg:col-start-2"
                  : i === lastIndex
                    ? " lg:col-start-3"
                    : ""
                : "";

              return (
              <Link
                href={`/catalog/${category.slug}`}
                key={category.slug}
                className={`group overflow-hidden rounded-lg border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg${centeredClass}`}
              >
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={assetPath(category, category.featured)}
                    alt={`${category.name} featured product`}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex min-h-36 flex-col justify-between p-5">
                  <span className="text-xs font-bold text-primary">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-bold">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {category.desc}
                    </p>
                    <ArrowRight className="mt-5 size-5 text-primary transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
              );
            })}
          </div>
        </section>
        <section className="bg-sky/20">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <SectionHeading
              eyebrow="Why Leong Seng"
              title="Parts knowledge you can put to work."
              copy="We help our customers find the right fit without the runaround. Our team combines a practical understanding of automotive and industrial systems with a commitment to responsive service."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:self-start">
              <div className="rounded-lg border border-primary/20 bg-background/70 p-6">
                <p className="font-serif text-xl font-bold">
                  Built on relationships
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Long-term partnerships with workshops, businesses, and
                  industry.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-background/70 p-6">
                <p className="font-serif text-xl font-bold">
                  Made for real work
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Straightforward support for parts that need to perform.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-background/70 p-6">
                <p className="font-serif text-xl font-bold">Fast response</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Prompt replies from a team that understands urgent sourcing
                  needs.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-background/70 p-6">
                <p className="font-serif text-xl font-bold">
                  Broad product range
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Automotive and industrial options in one place for easier
                  procurement.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <SectionHeading
            eyebrow="What customers say"
            title="A dependable name in the parts trade."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              [
                "“Leong Seng has been our go-to for hard-to-find industrial parts. Their team is always quick to help.”",
                "Daniel Lim",
              ],
              [
                "“Good service, good knowledge, and parts that do the job. We value the relationship.”",
                "Aisha Rahman",
              ],
              [
                "“When a machine is down, response matters. Leong Seng consistently makes sourcing easier.”",
                "Kumar Suresh",
              ],
            ].map(([quote, name]) => (
              <blockquote
                key={name}
                className="rounded-lg bg-charcoal p-7 text-primary-foreground"
              >
                <p className="text-lg leading-8">{quote}</p>
                <footer className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-sky">
                  {name} · Workshop partner
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      </main>
    </Shell>
  );
}
