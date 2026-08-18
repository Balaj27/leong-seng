import { CheckCircle2, Handshake, ShieldCheck, Wrench } from "lucide-react";
import { Shell, SectionHeading } from "@/components/site-shell";

const principles = [
  {
    icon: ShieldCheck,
    title: "Quality first",
    copy: "We focus on dependable products, accurate fit, and the standards that keep vehicles and machinery working safely.",
  },
  {
    icon: Handshake,
    title: "People first",
    copy: "We listen before we recommend, making every conversation clear, respectful, and useful for the customer.",
  },
  {
    icon: Wrench,
    title: "Work first",
    copy: "Our advice is practical and our service is responsive because downtime costs more than a part.",
  },
];

export default function AboutPage() {
  return (
    <Shell>
      <main>
        <section className="bg-charcoal text-primary-foreground">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-sky">
              About Leong Seng
            </p>
            <h1 className="max-w-3xl font-serif text-5xl font-bold leading-tight md:text-7xl">
              A practical partner for every part.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/70">
              Leong Seng Auto Co. Sdn. Bhd. is a Kuala Lumpur-based supplier
              serving automotive, workshop, and industrial communities with
              reliable spare parts and responsive support.
            </p>
          </div>
        </section>
        <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <SectionHeading
            eyebrow="Our story"
            title="Experience that makes sourcing simpler."
            copy="For decades, we have helped customers keep their vehicles, equipment, and operations moving. Good parts supply is built on more than a product list: it is built on listening carefully, understanding the application, and following through."
          />
          <div className="flex flex-col gap-5">
            <div className="rounded-lg bg-sky/20 p-7">
              <p className="font-serif text-3xl font-bold text-primary">1985</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Serving Malaysia with consistent parts knowledge and dependable
                service.
              </p>
            </div>
            {[
              "Automotive spare parts for everyday workshop needs",
              "Industrial components for power transmission and maintenance",
              "A responsive team that helps identify the right product",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <p className="text-sm leading-6 text-muted-foreground">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-sky/20">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-primary">
                How we work
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight md:text-5xl">
                The principles behind the service.
              </h2>
              <p className="mt-5 leading-7 text-muted-foreground">
                Simple promises, followed through in the details of every order
                and every customer relationship.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {principles.map(({ icon: Icon, title, copy }) => (
                <article
                  key={title}
                  className="rounded-lg border border-primary/20 bg-background/80 p-7"
                >
                  <div className="flex size-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-7 font-serif text-2xl font-bold">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
