import { Mail, MapPin, Phone, Printer } from "lucide-react";
import { Shell, SectionHeading } from "@/components/site-shell";

export default function ContactPage() {
  return (
    <Shell>
      <main>
        <section className="bg-charcoal text-primary-foreground">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-primary-foreground/70">
              Contact us
            </p>
            <h1 className="font-serif text-5xl font-bold tracking-tight md:text-6xl">
              Let&apos;s find the right fit.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-primary-foreground/80">
              Tell us what you&apos;re looking for. Our team in Kuala Lumpur is
              ready to help with product information and availability.
            </p>
          </div>
        </section>
        <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Reach Leong Seng"
              title="We're here to help."
              copy="Connect with us by phone, WhatsApp, or email, or visit our showroom on Jalan Ipoh."
            />
            <div className="mt-10 flex flex-col gap-7">
              <div className="flex gap-4">
                <Phone className="mt-1 size-5 text-primary" />
                <div>
                  <p className="font-bold">Phone</p>
                  <a
                    href="tel:+60340436834"
                    className="mt-1 block text-sm text-muted-foreground hover:text-primary"
                  >
                    +60 3 4043 6834 (HL)
                  </a>
                  <a
                    href="tel:+60175716834"
                    className="mt-1 block text-sm text-muted-foreground hover:text-primary"
                  >
                    +60 17 571 6834
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-1 size-5 text-primary" />
                <div>
                  <p className="font-bold">Email</p>
                  <a
                    href="mailto:sales@leongseng.com.my"
                    className="mt-1 block text-sm text-muted-foreground hover:text-primary"
                  >
                    sales@leongseng.com.my
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="mt-1 size-5 text-primary" />
                <div>
                  <p className="font-bold">Visit us</p>
                  <p className="mt-1 max-w-xs text-sm leading-6 text-muted-foreground">
                    514, Jalan Sultan Azlan Shah, (Batu 3, Jalan Ipoh), 51200
                    Kuala Lumpur, Malaysia.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Printer className="mt-1 size-5 text-primary" />
                <div>
                  <p className="font-bold">Fax</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    +60 3 4043 8396
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border bg-muted">
            <iframe
              title="Leong Seng Auto location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.6834927041805!2d101.68370247348939!3d3.1777367529793428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc48130e0abfad%3A0x74b2c926a2787bf4!2sWisma%20Yap%20Ka%2C%204%2C%20Jalan%20Ipoh%2C%20Wilayah%20Persekutuan%2C%2051200%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2s!4v1787049720424!5m2!1sen!2s"
              className="block h-[440px] w-full lg:h-full"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </section>
        <section className="bg-charcoal">
          <div className="mx-auto max-w-7xl px-5 py-14 text-center lg:px-8">
            <p className="text-lg text-primary-foreground/80">
              Prefer WhatsApp?{" "}
              <a
                href="https://wa.me/60173636834"
                className="font-bold text-sky hover:underline"
              >
                +60 17 363 6834
              </a>
            </p>
          </div>
        </section>
      </main>
    </Shell>
  );
}
