import { offices } from "@/content/offices";
import { siteConfig } from "@/content/site";

export function TopUtilityBar() {
  const countries = offices.map((o) => o.country);

  return (
    <div className="bg-indigo-deep border-line-dark hidden border-b md:block">
      <div className="text-invert/50 mx-auto flex h-9 w-full max-w-(--container-content) items-center justify-between px-6 text-xs lg:px-10">
        <ul className="flex items-center gap-3">
          {countries.map((country, i) => (
            <li key={country} className={i > 0 ? "border-line-dark border-l pl-3" : ""}>
              {country}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <span className="italic">&ldquo;{siteConfig.motto}&rdquo;</span>
          <a href={siteConfig.supportUrl} className="hover:text-invert">
            Client support
          </a>
        </div>
      </div>
    </div>
  );
}
