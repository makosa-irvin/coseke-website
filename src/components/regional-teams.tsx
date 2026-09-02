import { Photo } from "@/components/photo";
import { TeamPhotoFallback } from "@/components/illustrations/team-photo-fallback";
import { offices } from "@/content/offices";
import { regionalTeamBlurbs } from "@/content/team";

function slugifyCity(city: string) {
  return city.toLowerCase().replace(/[^a-z]+/g, "-");
}

export function RegionalTeams() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {offices.map((office) => {
        const blurb = regionalTeamBlurbs.find((b) => b.officeCity === office.city)?.blurb;
        return (
          <div key={office.city} className="border-line border">
            <Photo
              src={`/images/team-${slugifyCity(office.city)}.jpg`}
              alt={`The Coseke team in ${office.city}`}
              fallback={<TeamPhotoFallback />}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <p className="text-indigo font-medium">
                {office.city}, {office.country}
                {office.isHQ ? <span className="text-clay ml-2 text-xs">Headquarters</span> : null}
              </p>
              {blurb ? <p className="text-ink-soft mt-2 text-sm">{blurb}</p> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
