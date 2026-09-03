import Link from "next/link";
import { Container } from "@/components/ui/container";
import { offices } from "@/content/offices";
import { navigation, siteConfig } from "@/content/site";
import { solutionCategories, getSolutionsByCategory } from "@/content/solutions";
import { AccreditationBadges } from "@/components/accreditation-badges";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const footerSolutions = solutionCategories.map(
    (category) => getSolutionsByCategory(category.id)[0],
  );

  return (
    <footer className="border-line-dark bg-indigo-deep text-invert/90 border-t">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr_1.6fr]">
        <div>
          <span className="mb-4 inline-block bg-white p-2">
            {/* eslint-disable-next-line @next/next/no-img-element -- small static brand asset, not worth next/image overhead here */}
            <img src="/images/coseke-logo.png" alt="Coseke" className="h-10 w-auto" />
          </span>
          <p className="text-invert/70 mt-3 max-w-xs text-sm leading-relaxed">
            {siteConfig.description}
          </p>
          <p className="text-brass-light mt-6 text-sm italic">&ldquo;{siteConfig.motto}&rdquo;</p>
          <div className="mt-6">
            <AccreditationBadges variant="dark" />
          </div>
        </div>

        <div>
          <p className="text-invert text-sm font-medium">Company</p>
          <ul className="text-invert/70 mt-4 space-y-3 text-sm">
            {navigation.primary.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-invert">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="https://support.coseke.com" className="hover:text-invert">
                Support portal
              </a>
            </li>
          </ul>
          <p className="text-invert mt-6 text-sm font-medium">Solutions</p>
          <ul className="text-invert/70 mt-4 space-y-3 text-sm">
            {footerSolutions.map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions/${s.slug}`} className="hover:text-invert">
                  {s.tabLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-invert text-sm font-medium">Regional offices</p>
          <div className="divide-line-dark/60 mt-4 divide-y text-sm">
            {offices.map((office) => (
              <div key={office.city} className="grid grid-cols-[6rem_1fr] gap-4 py-3">
                <span className="text-invert/50">{office.city}</span>
                <div className="text-invert/70">
                  <p>{office.phone}</p>
                  <a href={`mailto:${office.email}`} className="hover:text-invert">
                    {office.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="rule-dark">
        <Container className="text-invert/50 flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>Pan-African ICT solutions specialist, in operation since {siteConfig.founded}</p>
        </Container>
      </div>
    </footer>
  );
}
