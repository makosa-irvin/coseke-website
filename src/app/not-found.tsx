import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col justify-center py-24">
      <p className="text-clay text-sm">404</p>
      <h1 className="font-display text-indigo mt-3 text-4xl font-semibold sm:text-5xl">
        That record isn&apos;t indexed here.
      </h1>
      <p className="text-ink-soft mt-4 max-w-md">
        The page you&apos;re looking for may have moved. Try the homepage, or head straight to our
        solutions.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/"
          className="bg-clay text-paper hover:bg-clay-soft px-6 py-3 text-sm font-medium"
        >
          Back to homepage
        </Link>
        <Link
          href="/solutions"
          className="border-line text-indigo hover:border-indigo border px-6 py-3 text-sm font-medium"
        >
          Browse solutions
        </Link>
      </div>
    </Container>
  );
}
