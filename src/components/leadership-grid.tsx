import { Photo } from "@/components/photo";
import { PersonPlaceholder } from "@/components/illustrations/person-placeholder";
import { leadershipRoles } from "@/content/team";
import { solutionCategories } from "@/content/solutions";

export function LeadershipGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {leadershipRoles.map((role) => {
        const category = solutionCategories.find((c) => c.id === role.categoryId);
        return (
          <div key={role.categoryId} className="border-line border">
            <Photo
              src={`/images/leadership-${role.categoryId}.jpg`}
              alt={role.name ?? role.roleTitle}
              fallback={<PersonPlaceholder />}
              className="aspect-square w-full object-cover"
            />
            <div className="p-5">
              {role.name ? (
                <>
                  <p className="text-indigo font-medium">{role.name}</p>
                  <p className="text-ink-soft mt-0.5 text-xs">{role.roleTitle}</p>
                </>
              ) : (
                <>
                  <p className="text-indigo font-medium">{role.roleTitle}</p>
                  <p className="text-ink-soft/60 mt-0.5 text-xs italic">Profile coming soon</p>
                </>
              )}
              {category ? (
                <p className="text-ink-soft mt-3 text-sm">{category.description}</p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
