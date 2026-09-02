import Link from "next/link";
import { navigation } from "@/content/site";
import { Container } from "@/components/ui/container";
import { MobileNav } from "@/components/mobile-nav";
import { SolutionsMegaMenu } from "@/components/solutions-mega-menu";
import { TopUtilityBar } from "@/components/top-utility-bar";

export function SiteHeader() {
  const restNav = navigation.primary.filter((item) => item.label !== "Solutions");

  return (
    <header className="border-line-dark bg-indigo-deep text-paper relative z-50 border-b">
      <TopUtilityBar />
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span aria-hidden className="border-clay-soft/70 flex h-6 w-6 shrink-0 flex-col border">
            <span className="border-clay-soft/70 bg-clay-soft/20 h-1/2 border-b" />
            <span className="bg-clay-soft/40 h-1/2" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">Coseke</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <SolutionsMegaMenu />
          {restNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-paper/80 hover:text-paper text-sm transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contact"
            className="text-paper/80 hover:text-paper text-sm transition-colors"
          >
            Talk to us
          </Link>
          <Link
            href="/contact?type=demo"
            className="border-clay-soft/70 text-paper hover:border-clay hover:bg-clay border px-4 py-2 text-sm font-medium transition-colors"
          >
            Discuss a project
          </Link>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
