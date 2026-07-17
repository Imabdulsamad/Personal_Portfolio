import { Mail, MapPin, MessageSquare } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { SocialLinks } from "@/components/social-links";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <SectionHeading
          eyebrow="// contact"
          title="Let's build something together"
          description="Have a project in mind, a role to fill, or just want to say hi? Drop me a message and I'll get back to you."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          {/* Info */}
          <Reveal className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <Mail className="size-5" />
              </span>
              <div>
                <p className="text-sm font-medium">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <MessageSquare className="size-5" />
              </span>
              <div>
                <p className="text-sm font-medium">Response time</p>
                <p className="text-sm text-muted-foreground">
                  Usually within 24–48 hours.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <MapPin className="size-5" />
              </span>
              <div>
                <p className="text-sm font-medium">Availability</p>
                <p className="text-sm text-muted-foreground">
                  Open to remote work worldwide.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <p className="mb-3 text-sm font-medium">Find me online</p>
              <SocialLinks />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={1}>
            <Card>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
